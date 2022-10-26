import axios from "axios";
import { Spacer } from "../../components/Atoms/Spacer";
import { NewPost } from "../../components/Templates/NewPost";
import { OTDBase } from "../../components/Templates/OTDBase";
import { queeryQuestions } from "../../data/qotd";
import { FlexBox, ModalBackdrop, Wrapper } from "../../styles/globals";

export default function Homepage(props) {
    return (
        <div>
            <OTDBase queeryQuestions={queeryQuestions.question} />
            {/* <BaseCard posts = {props.posts}/> */}
            {props.posts.map((post) => (
                <>
                    <NewPost
                        key={post.postId}
                        username={post.authorUser.username}
                        date={post.createdAt}
                        title={post.postTitle}
                        content={post.postContent}
                        tags={post.postTags}
                    />
                    <Spacer size={10} />
                </>
            ))}
            {/* {postModal && <NewPostModal onClick = {closePostModal}/>}
            {postModal && <ModalBackdrop onClick = {closePostModal}/>} */}
        </div>
    );
}

export async function getServerSideProps(context) {
    const res = await axios.get("http://localhost:8080/posts");
    const posts = res.data;
    return {
        props: { posts }, // will be passed to the page component as props
    };
}
