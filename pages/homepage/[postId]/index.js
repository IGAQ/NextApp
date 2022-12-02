import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {BackArrow} from '../../../components/Atoms/Common/Buttons/BackArrow';
import {
    InPageLoader,
    PageLoader,
} from '../../../components/Atoms/Common/Loader';
import {Spacer} from '../../../components/Atoms/Common/Spacer';
import {CommentCard} from '../../../components/Molecules/Comment/CommentCard';
import {CommentPrompt} from '../../../components/Molecules/Comment/CommentPrompt';
import {ModalAlert} from '../../../components/Organisms/Common/Modals/ModalAlert';
import {SingleNewPost} from '../../../components/Templates/Post/NewPost';
import {
    PostContext,
    UserActionsHandlersContext,
    UserContext,
} from '../../../lib/contexts';
import {useUser} from '../../../lib/hooks/useUser';
import * as postService from '../../../lib/services/postService';
import {getRecaptchaToken} from '../../../lib/utils';
import {UserActionsEnum} from '../../../lib/constants/userInteractions';
import * as userService from '../../../lib/services/userService';


export default function Post() {
    const router = useRouter();
    const {postId} = router.query;
    const [user, userAuthLoaded] = useUser();
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingComments, setIsLoadingComments] = useState(true);
    const [comments, setComments] = useState([]);
    const [posts, setPosts] = useState(null);

    const [createPrompt, setCommentPrompt] = useState(false);

    const [error, setError] = useState(null);
    const [pinSuccess, setPinSuccess] = useState(false);
    const [unpinSuccess, setUnpinSuccess] = useState(false);

    const togglePrompt = () => setCommentPrompt(!createPrompt);

    const handleCommentClick = async ({commentId}) => {
        // redirect to the comment thread.
        await router.push(`/homepage/${postId}/comment/${commentId}`);
    };

    const handlePinClick = async ({commentId, isPinning}) => {
        try {
            await postService.pinOrUnpinComment({commentId, isPinning});
            if (isPinning) {
                setPinSuccess(true);
                return;
            }
            setUnpinSuccess(true);
            return;
        } catch (error) {
            setError(error);
        }
    };

    const handleSubmitComment = async ({parentId, commentContent, isPost}) => {
        console.log('submitting comment', parentId, commentContent);
        const recaptchaToken = await getRecaptchaToken(
            UserActionsEnum.CreateComment,
            process.env.NEXT_PUBLIC_RECAPTCHA_KEY,
        );
        try {
            return await postService.newCommentOn({
                postId: parentId,
                commentContent,
                isPost,
                googleRecaptchaToken: recaptchaToken,
            });
        } catch (error) {
            setError(error);
        }
    };

    const handleSubmitReport = async ({isPost, id, reason}) => {
        console.log('submitting report', {isPost, id, reason});
        return await userService.reportContent({ isPost, id, reason });
    };

    useEffect(() => {
        if (postId !== undefined) {
            (async function () {
                const posts = await postService.getPostById(postId);
                setPosts(posts);
                setIsLoading(false);
                const comments = await postService.getsCommentsOfPost(
                    posts.postId,
                );
                setComments([...comments]);
                setIsLoadingComments(false);
            })();
        }
    }, [postId]);

    const flatComments = (comments, nestedLevel = 0, parentId = null) => {
        return comments.reduce((acc, comment) => {
            if (nestedLevel > 0 && parentId !== null) {
                comment.parentId = parentId;
            }
            comment.nestedLevel = nestedLevel;
            acc.push(comment);
            if (comment.childComments?.length > 0) {
                acc.push(
                    ...flatComments(
                        comment.childComments,
                        nestedLevel + 1,
                        comment.commentId,
                    ),
                );
            }
            return acc;
        }, []);
    };

    const renderComments = () => {
        const result = [];
        const flattenedComments = flatComments(comments);
        for (let comment of flattenedComments) {
            const commentComponent = (
                <PostContext.Provider key={comment.commentId} value={comment}>
                    <UserActionsHandlersContext.Provider
                        value={{
                            data: {
                                parentId: comment.commentId,
                                postId: posts.postId,
                                postAuthorId: posts.authorUser.userId,
                                isPost: false,
                                nestedLevel: comment.nestedLevel,
                            },
                            handleCommentClick: handleCommentClick,
                            handleSubmitComment: handleSubmitComment,
                            handlePin: handlePinClick,
                            handleSubmitReport: handleSubmitReport,
                        }}
                    >
                        <CommentCard
                            nestedLevel={
                                comment.pinned ? 0 : comment.nestedLevel
                            }
                        />
                    </UserActionsHandlersContext.Provider>
                </PostContext.Provider>
            );
            if (comment.pinned) {
                result.unshift(commentComponent);
            } else {
                result.push(commentComponent);
            }
        }
        return result;
    };

    return !userAuthLoaded ? (
        <InPageLoader />
    ) : (
        <UserContext.Provider value={user}>
            <>
                {error && (
                    <ModalAlert
                        onClick={() => setError(null)}
                        title="Error"
                        content={error}
                        moreText="Please try again."
                    />
                )}
                {pinSuccess && (
                    <ModalAlert
                        onClick={() => setPinSuccess(false)}
                        title="Success"
                        content={'You have successfully pinned a comment'}
                        moreText="Marked as resolved!"
                    />
                )}
                {unpinSuccess && (
                    <ModalAlert
                        onClick={() => setUnpinSuccess(false)}
                        title="Success"
                        content={'You have successfully unpinned a comment'}
                        moreText="Feel free to pin a new comment!"
                    />
                )}
                {isLoading ? (
                    <PageLoader />
                ) : (
                    <>
                        <BackArrow margin="0" />
                        <PostContext.Provider value={posts}>
                            <UserActionsHandlersContext.Provider
                                value={{
                                    handleClickOnPost: () => '',
                                    handleCommentClick: handleCommentClick,
                                    handleTogglePrompt: togglePrompt,
                                    handleSubmitReport: handleSubmitReport,
                                }}
                            >
                                <SingleNewPost />
                            </UserActionsHandlersContext.Provider>
                        </PostContext.Provider>

                        {createPrompt && (
                            <UserActionsHandlersContext.Provider
                                value={{
                                    data: {
                                        parentId: posts.postId,
                                        isPost: true,
                                        nestedLevel: 0,
                                    },
                                    handleSubmitComment: handleSubmitComment,
                                }}
                            >
                                <CommentPrompt />
                            </UserActionsHandlersContext.Provider>
                        )}

                        {isLoadingComments ? (
                            <InPageLoader />
                        ) : (
                            renderComments()
                        )}
                        <Spacer size={50} />
                    </>
                )}
            </>
        </UserContext.Provider>
    );
}
