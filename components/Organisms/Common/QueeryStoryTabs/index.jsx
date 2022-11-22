import {Tabs} from '@mantine/core';
import {NewPost} from '../../../Templates/Post/NewPost';
import {Spacer} from '../../../Atoms/Common/Spacer';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {InPageLoader} from '../../../Atoms/Common/Loader';
import {StickyDiv} from '../../../../pages/homepage';

export function QueeryStoryTabs({}) {
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
        <Tabs color="pink" value={activeTab} onTabChange={setActiveTab}>
            <StickyDiv top={69}>
                <Tabs.List grow>
                    <Tabs.Tab value="queery"> Queeries </Tabs.Tab>
                    <Tabs.Tab value="story">Stories </Tabs.Tab>
                </Tabs.List>
            </StickyDiv>

            <Tabs.Panel value="queery">
                {queeries === null ? (
                    <InPageLoader/>
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
                                    score={queery.totalVotes}
                                />
                                <Spacer size={10}/>
                            </>
                        ))
                    )
                }
            </Tabs.Panel>
            <Tabs.Panel value="story">
                {stories === null ? (
                    <InPageLoader/>
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
                                score={story.totalVotes}
                            />
                            <Spacer size={10}/>
                        </>
                    ))
                )
                }
            </Tabs.Panel>
        </Tabs>
    );
}