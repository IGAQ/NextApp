import axios from 'axios';
import {SingleNewPost, NewPost} from '../../components/Templates/Post/NewPost';
import {API_SERVER} from '../../lib/constants';
import {useEffect, useState} from 'react';
import {CommentPrompt} from '../../components/Molecules/Post/CommentPrompt';
import {CommentCard} from '../../components/Molecules/Post/CommentCard';
import {Spacer} from '../../components/Atoms/Common/Spacer';
import * as postService from '../../lib/postService';
import {useRouter} from 'next/router';
import {PostContext, UserActionsHandlersContext} from '../../lib/contexts';
import {InPageLoader} from '../../components/Atoms/Common/Loader';

export default function Post({post}) {
    const router = useRouter();
    const [isLoadingComments, setIsLoadingComments] = useState(true);
    const [comments, setComments] = useState([]);

    const [createPrompt, setCommentPrompt] = useState(false);
    
    const togglePrompt = () => setCommentPrompt(!createPrompt);

    const handleCommentClick = async ({commentId}) => {
        // redirect to the comment thread.
        await router.push(`/homepage/${post.postId}/comment/${commentId}`);
    };

    useEffect(() => {
        (async function () {
            const comments = await postService.getsCommentsOfPost(post.postId);
            setComments([...comments]);
            setIsLoadingComments(false);
        })();
    }, [post.postId]);

    const flatComments = (comments, nestedLevel = 0) => {
        return comments.reduce((acc, comment) => {
            comment.nestedLevel = nestedLevel;
            acc.push(comment);
            if (comment.childComments?.length > 0) {
                acc.push(...flatComments(comment.childComments, nestedLevel + 1));
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
                    <UserActionsHandlersContext.Provider value={{handleCommentClick}}>
                        <CommentCard
                            onClick={handleCommentClick}
                            nestedLevel={comment.nestedLevel}
                        />
                    </UserActionsHandlersContext.Provider>
                </PostContext.Provider>
            );
        }
        return result;
    };

    return (
        <>
            <div>
                <PostContext.Provider value={post}>
                    <UserActionsHandlersContext.Provider value={{
                        handleClickOnPost: togglePrompt,
                        handleCommentClick: handleCommentClick,
                    }}>
                        <SingleNewPost/>
                    </UserActionsHandlersContext.Provider>
                </PostContext.Provider>
            </div>
            {createPrompt && <CommentPrompt username={post.authorUser?.username ?? 'Anonymous'}/>}

            {isLoadingComments ? (
                <InPageLoader/>
            ) : (
                renderComments()
            )}
            <Spacer size={50}/>
        </>

    );
}

export async function getServerSideProps({params}) {
    const res = await axios.get(`${API_SERVER}/posts/${params.postId}`);
    const post = res.data;
    return {
        props: {post}, // will be passed to the page component as props
    };
}
