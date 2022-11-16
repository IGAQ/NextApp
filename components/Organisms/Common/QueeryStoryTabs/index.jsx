import {Tabs} from '@mantine/core';
import {NewPost} from '../../../Templates/Post/NewPost';
import {Spacer} from '../../../Atoms/Common/Spacer';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

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
    );
}