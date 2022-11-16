import axios from 'axios';
import { Spacer } from '../../components/Atoms/Common/Spacer';
import { NewPost } from '../../components/Templates/Post/NewPost';
import { OTDBase } from '../../components/Templates/OfTheDay/OTDBase';
import { queeryQuestions } from '../../data/qotd';
import { API_SERVER } from '../../lib/constants';
import { Background } from '../../styles/globals';
import { SearchAndFilter } from '../../components/Organisms/Common/SearchAndFilter';
import { Space, Tabs } from '@mantine/core';
import styled from 'styled-components';
import {ScrollToTopButton} from '../../components/Atoms/Common/ScrollToTopButton';
import {useEffect, useState} from 'react';

export const StickyDiv = styled.div`
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #DFEEFF;
    max-width: 50em;
    margin: auto;
`;

export default function Homepage(props) {
    const [scrolledEnough, setScrolledEnough] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setScrolledEnough(true);
        } else {
            setScrolledEnough(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // const [search, setSearch] = useState('');
    // const [filter, setFilter] = useState('All');
    // const [filteredPosts, setFilteredPosts] = useState([]);
    const [activeTab, setActiveTab] = useState('Queery');
    const [posts, setPosts] = useState([]); 
   



    useEffect(() => {
        (async function() {
            if (activeTab === 'Queery') {
                const response = await axios.get(`${API_SERVER}/api/posts/queery`);
                props.setPosts(response.data);
            }
            if (activeTab === 'Story') {
                const response = await axios.get(`${API_SERVER}/api/posts/story`);
                props.setPosts(response.data);
            }
        })();
    }
    );

    return (
        <Background>
            <ScrollToTopButton isVisible={scrolledEnough} />
            <OTDBase queeryQuestions={queeryQuestions.question} />
            <StickyDiv>
                <Spacer size={15} />
                <SearchAndFilter />
                <Spacer size={10} />
                <Tabs color="pink" defaultValue="Queeries">
                    <Tabs.List grow>
                        <Tabs.Tab value="Queeries" onClick={()=>setActiveTab('Queery')}> Queeries </Tabs.Tab>
                        <Tabs.Tab value="Stories" onClick={()=>setActiveTab('Story')}>Stories </Tabs.Tab>
                    </Tabs.List>
                </Tabs>
            </StickyDiv>
            <Tabs.Panel value="Queeries">
                {props.posts.map((post) => (
                    <>
                        <NewPost
                            key={post.postId}
                            postId={post.postId}
                            postType={post.postType ?? 'Queery'}
                            username={post.authorUser?.username ?? 'Anonymous'}
                            date={post.createdAt}
                            title={post.postTitle}
                            content={post.postContent}
                            tags={post.postTags}
                        />
                        <Spacer size={10} />
                    </>
                ))}
            </Tabs.Panel>
            <Tabs.Panel value="Stories">
                {props.posts.map((post) => (
                    <>
                        <NewPost
                            key={post.postId}
                            postId={post.postId}
                            postType={post.postType ?? 'Story'}
                            username={post.authorUser?.username ?? 'Anonymous'}
                            date={post.createdAt}
                            title={post.postTitle}
                            content={post.postContent}
                            tags={post.postTags}
                        />
                        <Spacer size={10} />
                    </>
                ))}
            </Tabs.Panel>
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