import axios from 'axios';
import {Spacer} from '../../components/Atoms/Common/Spacer';
import {NewPost} from '../../components/Templates/Post/NewPost';
import {OTDBase} from '../../components/Templates/OfTheDay/OTDBase';
import {queeryQuestions} from '../../data/qotd';
import {API_SERVER} from '../../lib/constants';
import {Background} from '../../styles/globals';
import {SearchAndFilter} from '../../components/Organisms/Common/SearchAndFilter';
import {Space, Tabs} from '@mantine/core';
import styled from 'styled-components';
import {ScrollToTopButton} from '../../components/Atoms/Common/ScrollToTopButton';
import React, {useEffect, useState} from 'react';
import {Loader} from '../../components/Atoms/Common/Loader';

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
    const [activeTab, setActiveTab] = useState('queery');

    const [stories, setStories] = useState(null);
    const [queeries, setQueeries] = useState(null);

    useEffect(() => {
        (async function () {
            try {
                console.log('fetching stories');
                const response = await axios.get(`/api/posts/${activeTab}`);
                console.log('response', response);
                if (activeTab === 'queery') {
                    setQueeries([...response.data]);
                } else {
                    setStories([...response.data]);
                }
            } catch (error) {
                debugger;
                console.error(error);
            }
        })();
    }, [activeTab]);

    return (
        <Background>
            <ScrollToTopButton isVisible={scrolledEnough}/>
            <OTDBase queeryQuestions={queeryQuestions.question}/>
            <StickyDiv>
                <Spacer size={15}/>
                <SearchAndFilter/>
                <Spacer size={10}/>
                <Tabs color="pink" value={activeTab} onTabChange={setActiveTab}>
                    <Tabs.List grow>
                        <Tabs.Tab value="queery"> Queeries </Tabs.Tab>
                        <Tabs.Tab value="story">Stories </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="queery">
                        {queeries === null ? (
                            <div>Loading Queeries...</div>
                        ) :
                            (
                                queeries.map((queery) => (
                                    <>
                                        <NewPost
                                            key={queery.postId}
                                            postId={queery.postId}
                                            postType={queery.postType ?? 'Queery'}
                                            username={queery.authorUser?.username ?? 'Anonymous'}
                                            date={queery.createdAt}
                                            title={queery.postTitle}
                                            content={queery.postContent}
                                            tags={queery.postTags}
                                        />
                                        <Spacer size={10}/>
                                    </>
                                ))
                            )
                        }
                    </Tabs.Panel>
                    <Tabs.Panel value="story">
                        {stories === null ? (
                            <div>Loading stories...</div>
                        ) : (
                            stories.map((story) => (

                                <>
                                    <NewPost
                                        key={story.postId}
                                        postId={story.postId}
                                        postType={story.postType ?? 'Story'}
                                        username={story.authorUser?.username ?? 'Anonymous'}
                                        date={story.createdAt}
                                        title={story.postTitle}
                                        content={story.postContent}
                                        tags={story.postTags}
                                    />
                                    <Spacer size={10}/>
                                </>
                            ))
                        )
                        }
                    </Tabs.Panel>
                </Tabs>
            </StickyDiv>
        </Background>
    );
}

export async function getServerSideProps(context) {
    const res = await axios.get(`${API_SERVER}/posts`);
    const posts = res.data;
    console.log(res.data);
    return {
        props: {posts}, // will be passed to the page component as props
    };
}