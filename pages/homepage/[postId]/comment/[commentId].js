import axios from 'axios';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {InPageLoader} from '../../../../components/Atoms/Common/Loader';
import {Spacer} from '../../../../components/Atoms/Common/Spacer';
import {CommentCard} from '../../../../components/Molecules/Comment/CommentCard';
import {CommentPrompt} from '../../../../components/Molecules/Comment/CommentPrompt';
import {ModalAlert} from '../../../../components/Organisms/Common/Modals/ModalAlert';
import {SingleComment} from '../../../../components/Templates/Comment/SingleComment';
import {API_SERVER} from '../../../../lib/constants';
import {
    PostContext,
    UserActionsHandlersContext,
    UserContext,
} from '../../../../lib/contexts';
import {useUser} from '../../../../lib/hooks/useUser';
import * as postService from '../../../../lib/postService';

export default function Comment({post, comment}) {
    const router = useRouter();
    const [user, userAuthLoaded] = useUser();
    const [isLoadingComments, setIsLoadingComments] = useState(true);
    const [comments, setComments] = useState([]);

    const [createPrompt, setCommentPrompt] = useState(false);

    const [error, setError] = useState(null);

    const togglePrompt = () => setCommentPrompt(!createPrompt);

    const handleCommentClick = async ({commentId}) => {
        // redirect to the comment thread.
        await router.push(`/homepage/${post.postId}/comments/${commentId}`);
    };

    const handlePinClick = async ({commentId, isPinning}) => {
        try {
            await postService.pinOrUnpinComment({commentId, isPinning});
        } catch (error) {
            setError(error);
        }
    };

    const handleSubmitComment = async ({parentId, commentContent, isPost}) => {
        console.log('submitting comment', parentId, commentContent);
        try {
            return await postService.newCommentOn({
                postId: parentId,
                commentContent,
                isPost,
            });
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        (async function () {
            const comments = await postService.getCommentsOfComment(
                comment.commentId,
            );
            setComments([...comments]);
            setIsLoadingComments(false);
        })();
    }, [comment.commentId]);

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
            result.push(
                <PostContext.Provider key={comment.commentId} value={comment}>
                    <UserActionsHandlersContext.Provider
                        value={{
                            data: {
                                parentId: comment.commentId,
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
                </PostContext.Provider>,
            );
        }
        return result;
    };

    return !userAuthLoaded ? (
        <InPageLoader />
    ) : (
        <UserContext.Provider value={user}>
            <div>
                {error && (
                    <ModalAlert
                        onClick={() => setError(null)}
                        title="Error"
                        content={error}
                        moreText="Please try again."
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
        </UserContext.Provider>
    );
}

export async function getServerSideProps({params}) {
    const responsePost = await axios.get(
        `${API_SERVER}/posts/${params.postId}`,
    );
    const res = await axios.get(`${API_SERVER}/comments/${params.commentId}`);
    const comment = res.data;
    const post = responsePost.data;
    return {
        props: {post, comment}, // will be passed to the page component as props
    };
}
