import axios from 'axios';
import {NewPost} from '../../components/Templates/Post/NewPost';
import {API_SERVER} from '../../lib/constants';
import {useEffect, useState} from 'react';
import {CommentPrompt} from '../../components/Molecules/Post/CommentPrompt';
import {CommentCard} from '../../components/Molecules/Post/CommentCard';
import {Spacer} from '../../components/Atoms/Common/Spacer';
import * as postService from '../../lib/postService';
import {useRouter} from 'next/router';
import styled from 'styled-components';

export default function Post({post}) {
    const router = useRouter();
    const [isLoadingComments, setIsLoadingComments] = useState(true);
    const [comments, setComments] = useState([]);

    const [createPrompt, setCommentPrompt] = useState(false);
    const togglePrompt = () => setCommentPrompt(!createPrompt);

    const handleCommentClick = async ({commentId}) => {
        // redirect to the comment thread.
        await router.push(`/homepage/${post.id}/comment/${commentId}`);
    };

    useEffect(() => {
        (async function () {
            const comments = await postService.getsCommentsOfPost(post.postId);
            setComments([...comments]);
            setIsLoadingComments(false);
        })();
    }, []);

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
                <CommentCard
                    key={comment.commentId}
                    comment={comment}
                    onClick={handleCommentClick}
                    nestedLevel={comment.nestedLevel}
                />
            );
        }
        return result;
    };

    const testComment = {
        username: 'John',
        date: '3 hours ago',
        content: 'testing 123 pls work',
        id: 1,
        score: 12,
    };

    return (
        <>
            <div>
                <NewPost
                    key={post.postId}
                    username={post.authorUser?.username ?? 'Anonymous'}
                    date={post.createdAt}
                    title={post.postTitle}
                    content={post.postContent}
                    tags={post.postTags}
                    onClick={togglePrompt}
                />
            </div>
            {createPrompt && <CommentPrompt username={post.authorUser?.username ?? 'Anonymous'}/>}

            {isLoadingComments ? (
                <div>Loading the comments...</div>
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
