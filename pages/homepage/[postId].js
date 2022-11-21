import axios from 'axios';
import { NewPost } from '../../components/Templates/Post/NewPost';
import { API_SERVER } from '../../lib/constants';
import { useState } from 'react';
import { CommentPrompt } from '../../components/Molecules/Post/CommentPrompt';
import { CommentCard } from '../../components/Molecules/Post/CommentCard';
import { Spacer } from '../../components/Atoms/Common/Spacer';

export default function Post({ post, onClick }) {

    const [createPrompt, setCommentPrompt] = useState(false);
    const togglePrompt = () => setCommentPrompt(!createPrompt);

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
                    onClick={togglePrompt} />
            </div>
            {createPrompt && <CommentPrompt username={post.authorUser?.username ?? 'Anonymous'}/>}
            <CommentCard comment = {testComment}/>
            <Spacer size={50} />
        </>

    );
}

export async function getServerSideProps({ params }) {
    const res = await axios.get(`${API_SERVER}/posts/${params.postId}`);
    const post = res.data;
    return {
        props: { post }, // will be passed to the page component as props
    };
}
