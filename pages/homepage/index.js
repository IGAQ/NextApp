import axios from 'axios';
import { Spacer } from '../../components/Atoms/Spacer';
import { NewPost } from '../../components/Templates/NewPost';
import { OTDBase } from '../../components/Templates/OTDBase';
import { queeryQuestions } from '../../data/qotd';
import { API_SERVER } from '../../lib/constants';
import { Background } from '../../styles/globals';
import { SearchAndFilter } from '../../components/Organisms/SearchAndFilter';
import { Space, Tabs } from '@mantine/core';
import styled from 'styled-components';

export const StickyDiv = styled.div`
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #FFEAD4;
    max-width: 50em;
    margin: auto;
`;



export default function Homepage(props) {

    return (
        <Background>
            <OTDBase queeryQuestions={queeryQuestions.question} />
            <StickyDiv>
                <Spacer size={15} />
                <SearchAndFilter />
                <Spacer size={10} />
                <Tabs color="pink" defaultValue="Queeries" backgroundColor="white">
                    <Tabs.List grow>
                        <Tabs.Tab value="Queeries"> Queeries </Tabs.Tab>
                        <Tabs.Tab value="Stories">Stories </Tabs.Tab>
                    </Tabs.List>
                </Tabs>
            </StickyDiv>
            {/* <BaseCard posts = {props.posts}/> */}
            {props.posts.map((post) => (
                <>
                    <NewPost
                        key={post.postId}
                        username={post.authorUser?.username ?? 'Anonymous'}
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
        </Background>
    );
}

export async function getServerSideProps(context) {
    const res = await axios.get(`${API_SERVER}/posts`);
    const posts = res.data;
    console.log(res.data);
    return {
        props: { posts }, // will be passed to the page component as props
    };
}