import axios from "axios";
import { Spacer } from "../../components/Atoms/Spacer";
import { NewPost } from "../../components/Templates/NewPost";
import { OTDBase } from "../../components/Templates/OTDBase";
import { queeryQuestions } from "../../data/qotd";
import { FlexBox, ModalBackdrop, Wrapper } from "../../styles/globals";

export default function Post({ post }) {
    return (
        <div>
            <NewPost
                key={post.postId}
                username={post.authorUser.username}
                date={post.createdAt}
                title={post.postTitle}
                content={post.postContent}
                tags={post.postTags}
            />
        </div>
    );
}

export async function getServerSideProps({ params }) {
    const res = await axios.get(`http://localhost:8080/posts/${params.postId}`);
    const post = res.data;
    return {
        props: { post }, // will be passed to the page component as props
    };
}
