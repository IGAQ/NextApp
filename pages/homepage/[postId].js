import axios from "axios";
import { NewPost } from "../../components/Templates/NewPost";
import {API_SERVER} from '../../lib/constants';

export default function Post({ post }) {
    return (
        <div>
            <NewPost
                key={post.postId}
                username={post.authorUser?.username ?? "Anonymous"}
                date={post.createdAt}
                title={post.postTitle}
                content={post.postContent}
                tags={post.postTags}
            />
        </div>
    );
}

export async function getServerSideProps({ params }) {
    const res = await axios.get(`${API_SERVER}/posts/${params.postId}`);
    const post = res.data;
    return {
        props: { post }, // will be passed to the page component as props
    };
}
