import axios from 'axios';
import {SingleNewPost} from '../../../../components/Templates/Post/NewPost';
import {API_SERVER} from '../../../../lib/constants';
import {useEffect, useState} from 'react';
import {CommentPrompt} from '../../../../components/Molecules/Post/CommentPrompt';
import {CommentCard} from '../../../../components/Molecules/Post/CommentCard';
import {Spacer} from '../../../../components/Atoms/Common/Spacer';
import * as postService from '../../../../lib/postService';
import {useRouter} from 'next/router';
import {PostContext, UserActionsHandlersContext, UserContext} from '../../../../lib/contexts';
import {InPageLoader} from '../../../../components/Atoms/Common/Loader';
import {useUser} from '../../../../lib/hooks/useUser';

export default function Comment({postId, comment}) {
    const router = useRouter();
    const [user, userAuthLoaded] = useUser();
    const [isLoadingComments, setIsLoadingComments] = useState(true);
    const [comments, setComments] = useState([]);

    const [createPrompt, setCommentPrompt] = useState(false);

    const togglePrompt = () => setCommentPrompt(!createPrompt);

    const handleCommentClick = async ({commentId}) => {
        // redirect to the comment thread.
        await router.push(`/homepage/${postId}/comments/${commentId}`);
    };

    const handleSubmitComment = async ({parentId, commentContent, isPost}) => {
        console.log('submitting comment', parentId, commentContent);
        return await postService.newCommentOn({
            postId: parentId,
            commentContent,
            isPost,
        });
    };

    useEffect(() => {
        (async function () {
            const comments = await postService.getCommentsOfComment(comment.commentId);
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
                acc.push(...flatComments(comment.childComments, nestedLevel + 1, comment.commentId));
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
                    <UserActionsHandlersContext.Provider value={{
                        data: {
                            parentId: comment.commentId,
                            isPost: false,
                            nestedLevel: comment.nestedLevel,
                        },
                        handleCommentClick: handleCommentClick,
                        handleSubmitComment: handleSubmitComment,
                    }}>
                        <CommentCard
                            nestedLevel={comment.nestedLevel}
                        />
                    </UserActionsHandlersContext.Provider>
                </PostContext.Provider>
            );
        }
        return result;
    };

    return !userAuthLoaded ? (
        <InPageLoader />
    ) : (
        <UserContext.Provider value={user}>
            <div>
                <PostContext.Provider value={comment}>
                    <UserActionsHandlersContext.Provider value={{
                        handleClickOnPost: () => '',
                        handleCommentClick: handleCommentClick,
                        handleTogglePrompt: togglePrompt,
                    }}>
                        <SingleNewPost/>
                    </UserActionsHandlersContext.Provider>
                </PostContext.Provider>
            </div>
            {createPrompt && (
                <UserActionsHandlersContext.Provider value={{
                    data: {
                        parentId: comment.commentId,
                        isPost: true,
                        nestedLevel: 0,
                    },
                    handleSubmitComment: handleSubmitComment,
                }}>
                    <CommentPrompt />
                </UserActionsHandlersContext.Provider>
            )}

            {isLoadingComments ? (
                <InPageLoader/>
            ) : (
                renderComments()
            )}
            <Spacer size={50}/>
        </UserContext.Provider>
    );
}

export async function getServerSideProps({params}) {
    const res = await axios.get(`${API_SERVER}/comments/${params.commentId}`);
    const comment = res.data;
    return {
        props: {postId: params.postId, comment}, // will be passed to the page component as props
    };
}
