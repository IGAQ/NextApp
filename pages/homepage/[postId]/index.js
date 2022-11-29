import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BackArrow } from '../../../components/Atoms/Common/Buttons/BackArrow';
import { InPageLoader } from '../../../components/Atoms/Common/Loader';
import { Spacer } from '../../../components/Atoms/Common/Spacer';
import { CommentCard } from '../../../components/Molecules/Comment/CommentCard';
import { CommentPrompt } from '../../../components/Molecules/Comment/CommentPrompt';
import { ModalAlert } from '../../../components/Organisms/Common/Modals/ModalAlert';
import { SingleNewPost } from '../../../components/Templates/Post/NewPost';
import { API_SERVER } from '../../../lib/constants';
import { PostContext, UserActionsHandlersContext, UserContext } from '../../../lib/contexts';
import { useUser } from '../../../lib/hooks/useUser';
import * as postService from '../../../lib/services/postService';
import { Background } from '../../../styles/globals';

export default function Post({ post }) {
    const router = useRouter();
    const [user, userAuthLoaded] = useUser();
    const [isLoadingComments, setIsLoadingComments] = useState(true);
    const [comments, setComments] = useState([]);

    const [createPrompt, setCommentPrompt] = useState(false);

    const [error, setError] = useState(null);

    const togglePrompt = () => setCommentPrompt(!createPrompt);

    const handleCommentClick = async ({ commentId }) => {
        // redirect to the comment thread.
        await router.push(`/homepage/${post.postId}/comment/${commentId}`);
    };

    const handlePinClick = async ({ commentId, isPinning }) => {
        try {
            await postService.pinOrUnpinComment({ commentId, isPinning });
        } catch (error) {
            setError(error);
        }
    };

    const handleSubmitComment = async ({ parentId, commentContent, isPost }) => {
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
            const comments = await postService.getsCommentsOfPost(post.postId);
            setComments([...comments]);
            setIsLoadingComments(false);
        })();
    }, [post.postId]);

    const flatComments = (comments, nestedLevel = 0, parentId = null) => {
        return comments.reduce((acc, comment) => {
            if (nestedLevel > 0 && parentId !== null) {
                comment.parentId = parentId;
            }
            comment.nestedLevel = nestedLevel;
            acc.push(comment);
            if (comment.childComments?.length > 0) {
                acc.push(...flatComments(comment.childComments, nestedLevel + 1, comment.commentId));
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
                    <UserActionsHandlersContext.Provider value={{
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
                    }}>
                        <CommentCard
                            nestedLevel={comment.pinned ? 0 : comment.nestedLevel}
                        />
                    </UserActionsHandlersContext.Provider>
                </PostContext.Provider>
            );
            if (comment.pinned) {
                result.unshift(commentComponent);
            } else {
                result.push(commentComponent);
            }
        };
        return result;
    };

    return !userAuthLoaded ? (
        <InPageLoader />
    ) : (
        <UserContext.Provider value={user}>
            <Background>
                {error && (
                    <ModalAlert
                        onClick={() => setError(null)}
                        title='Error'
                        content={error}
                        moreText='Please try again.'
                    />
                )}
                <PostContext.Provider value={post}>
                    <UserActionsHandlersContext.Provider value={{
                        handleClickOnPost: () => '',
                        handleCommentClick: handleCommentClick,
                        handleTogglePrompt: togglePrompt,
                    }}>
                        <SingleNewPost />
                    </UserActionsHandlersContext.Provider>
                </PostContext.Provider>

                {createPrompt && (
                    <UserActionsHandlersContext.Provider value={{
                        data: {
                            parentId: post.postId,
                            isPost: true,
                            nestedLevel: 0,
                        },
                        handleSubmitComment: handleSubmitComment,
                    }}>
                        <CommentPrompt />
                    </UserActionsHandlersContext.Provider>
                )}

                {isLoadingComments ? (
                    <InPageLoader />
                ) : (
                    renderComments()
                )}
                <Spacer size={50} />
            </Background>
        </UserContext.Provider>
    );
};

export async function getServerSideProps({ params }) {
    const res = await axios.get(`${API_SERVER}/posts/${params.postId}`);
    const post = res.data;
    return {
        props: { post }, // will be passed to the page component as props
    };
};
