import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {InPageLoader} from '../../../../components/Atoms/Common/Loader';
import {Spacer} from '../../../../components/Atoms/Common/Spacer';
import {CommentCard} from '../../../../components/Molecules/Comment/CommentCard';
import {CommentPrompt} from '../../../../components/Molecules/Comment/CommentPrompt';
import {ModalAlert} from '../../../../components/Organisms/Common/Modals/ModalAlert';
import {SingleComment} from '../../../../components/Templates/Comment/SingleComment';
import {PageLoader} from '../../../../components/Atoms/Common/Loader';
import {
    PostContext,
    UserActionsHandlersContext,
    UserContext,
} from '../../../../lib/contexts';
import {useUser} from '../../../../lib/hooks/useUser';
import * as postService from '../../../../lib/services/postService';
import {getRecaptchaToken} from '../../../../lib/utils';
import {UserActionsEnum} from '../../../../lib/constants/userInteractions';

export default function Comment() {
    const router = useRouter();
    const {postId} = router.query;
    const {commentId} = router.query;

    // my god the amount of states
    const [user, userAuthLoaded] = useUser();
    const [isLoadingComments, setIsLoadingComments] = useState(true);
    const [childComments, setChildComments] = useState([]);
    const [comment, setComment] = useState(null);

    const [isLoading, setIsLoading] = useState(true);

    const [post, setPost] = useState(null);

    const [createPrompt, setCommentPrompt] = useState(false);

    const [error, setError] = useState(null);
    const [pinSuccess, setPinSuccess] = useState(false);
    const [unpinSuccess, setUnpinSuccess] = useState(false);

    const togglePrompt = () => setCommentPrompt(!createPrompt);

    const handleCommentClick = async ({commentId}) => {
        // redirect to the comment thread.
        await router.push(`/homepage/${postId}/comments/${commentId}`);
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

    useEffect(() => {
        if (commentId !== undefined) {
            (async function () {
                const post = await postService.getPostById(postId);
                setPost(post);
                const comment = await postService.getCommentById(commentId);
                setComment(comment);
                setIsLoading(false);
            })();
        }
    }, [commentId]);

    useEffect(() => {
        if (commentId !== undefined) {
            (async function () {
                const comments = await postService.getCommentsOfComment(
                    commentId,
                );
                setChildComments([...comments]);
                setIsLoadingComments(false);
            })();
        }
    }, [commentId]);

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
        const flattenedComments = flatComments(childComments);
        for (let comment of flattenedComments) {
            const commentComponent = (
                <PostContext.Provider key={comment.commentId} value={comment}>
                    <UserActionsHandlersContext.Provider
                        value={{
                            data: {
                                parentId: comment.commentId,
                                postId: post.postId,
                                postAuthorId: post.authorUser.userId,
                                isPost: false,
                                nestedLevel: comment.nestedLevel,
                            },
                            handleCommentClick: handleCommentClick,
                            handleSubmitComment: handleSubmitComment,
                            handlePin: handlePinClick,
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
            {isLoading ? (
                <PageLoader />
            ) : (
                <>
                    <div>
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
                                content={
                                    'You have successfully pinned a comment'
                                }
                                moreText="Marked as resolved!"
                            />
                        )}
                        {unpinSuccess && (
                            <ModalAlert
                                onClick={() => setUnpinSuccess(false)}
                                title="Success"
                                content={
                                    'You have successfully unpinned a comment'
                                }
                                moreText="Feel free to pin a new comment!"
                            />
                        )}
                        <PostContext.Provider value={comment}>
                            <UserActionsHandlersContext.Provider
                                value={{
                                    data: {
                                        postAuthorId: post.authorUser.userId,
                                    },
                                    handleClickOnPost: () => '',
                                    handleCommentClick: handleCommentClick,
                                    handleTogglePrompt: togglePrompt,
                                    handlePin: handlePinClick,
                                }}
                            >
                                <SingleComment />
                            </UserActionsHandlersContext.Provider>
                        </PostContext.Provider>
                    </div>
                    {createPrompt && (
                        <UserActionsHandlersContext.Provider
                            value={{
                                data: {
                                    parentId: comment.commentId,
                                    isPost: true,
                                    nestedLevel: 0,
                                },
                                handleSubmitComment: handleSubmitComment,
                            }}
                        >
                            <CommentPrompt />
                        </UserActionsHandlersContext.Provider>
                    )}

                    {isLoadingComments ? <InPageLoader /> : renderComments()}
                    <Spacer size={50} />
                </>
            )}
        </UserContext.Provider>
    );
}
