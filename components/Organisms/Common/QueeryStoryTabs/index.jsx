import {Tabs} from '@mantine/core';
import {NewPost} from '../../../Templates/Post/NewPost';
import {Spacer} from '../../../Atoms/Common/Spacer';
import React, {useEffect, useState} from 'react';
import {InPageLoader} from '../../../Atoms/Common/Loader';
import {StickyDiv} from '../../../../pages/homepage';
import {QueeryStoryStateContext, PostContext, UserActionsHandlersContext} from '../../../../lib/contexts';
import * as postService from '../../../../lib/postService';
import { useContext } from 'react';

export function QueeryStoryTabs({onActiveTabChange}) {
    const {setStories, setQueeries, stories, queeries} = useContext(QueeryStoryStateContext);
    const [activeTab, setActiveTab] = useState('queery');

    const handleClickOnPost = (postId, postType) => {
        console.log('clicked on post', postId, postType);
    };

    const handleCommentClick = (postId, postType) => {
        console.log('comment clicked', postId, postType);
    };

    useEffect(() => {
        (async function () {
            const posts = await postService.getPosts(activeTab);
            if (activeTab === 'queery') {
                setQueeries([...posts]);
            } else {
                setStories([...posts]);
            }
        })();
    }, [activeTab]);

    return (
        <Tabs color="pink" value={activeTab} onTabChange={(tab) => {
            onActiveTabChange(activeTab);
            setActiveTab(tab);
        }}
        styles={{tab: {'&[data-active]': {background: '#ffb6c3'}}}}>
            <StickyDiv top={69}>
                <Tabs.List grow>
                    <Tabs.Tab value="queery"> Queeries </Tabs.Tab>
                    <Tabs.Tab value="story" color='grape'>Stories </Tabs.Tab>
                </Tabs.List>
            </StickyDiv>

            <Tabs.Panel value="queery">
                {queeries === null ? (
                    <InPageLoader/>
                ) :
                    (
                        queeries.map((queery) => (
                            <PostContext.Provider key={queery.postId} value={queery}>
                                <UserActionsHandlersContext.Provider value={{
                                    handleClickOnPost: () => handleClickOnPost(queery.postId, 'queery'),
                                    handleCommentClick: () => handleCommentClick(queery.postId, 'queery'),
                                }}>
                                    <NewPost/>
                                    <Spacer size={10}/>
                                </UserActionsHandlersContext.Provider>
                            </PostContext.Provider>
                        ))
                    )
                }
            </Tabs.Panel>
            <Tabs.Panel value="story">
                {stories === null ? (
                    <InPageLoader/>
                ) : (
                    stories.map((story) => (
                        <PostContext.Provider key={story.postId} value={story}>
                            <UserActionsHandlersContext.Provider value={{
                                handleClickOnPost: () => handleClickOnPost(story.postId, 'story'),
                                handleCommentClick: () => handleCommentClick(story.postId, 'story'),
                            }}>
                                <NewPost/>
                                <Spacer size={10}/>
                            </UserActionsHandlersContext.Provider>
                        </PostContext.Provider>
                    ))
                )
                }
            </Tabs.Panel>
        </Tabs>
    );
}