import {Tabs} from '@mantine/core';
import {NewPost} from '../../../Templates/Post/NewPost';
import {Spacer} from '../../../Atoms/Common/Spacer';
import React, {useEffect, useState} from 'react';
import {InPageLoader} from '../../../Atoms/Common/Loader';
import {StickyDiv} from '../../../../pages/homepage';
import {PostContext, UserActionsHandlersContext} from '../../../../lib/contexts';
import * as postService from '../../../../lib/postService';
import {useRouter} from 'next/router';

export function QueeryStoryTabs({filteringAndSorting, onActiveTabChange}) {
    const router = useRouter();

    const [stories, setStories] = useState(null);
    const [queeries, setQueeries] = useState(null);

    const [activeTab, setActiveTab] = useState('queery');

    const handleClickOnPost = (postId, postType) => {
        console.log('clicked on post', postId, postType);
    };

    const handleTogglePrompt = (postId, postType) => {
        console.log('comment clicked', postId, postType);
        router.push(`/homepage/${postId}`);
    };

    useEffect(() => {
        (async function () {
            const posts = await postService.getPosts(activeTab);
            if (activeTab === 'queery') {
                setQueeries([...posts]);
            } else {
                console.log('setting stories', posts);
                setStories([...posts]);
            }
        })();
    }, [activeTab]);

    useEffect(() => {
        if (filteringAndSorting) {
            const applicableFilters = { ...filteringAndSorting.filters['_common'], ...filteringAndSorting.filters[activeTab]};
            const appliedFilters = Object.keys(applicableFilters)   .filter((key) => applicableFilters[key]);

            const callback = posts => {
                const shadowed = [...posts];
                if (appliedFilters.length > 0) {
                    for (let post of shadowed) {
                        const postTags = post.postTags.map((tag) => tag.tagName);
                        post.isFiltered = appliedFilters.some((filter) => postTags.includes(filter));
                    }
                }
                if (filteringAndSorting.sorts['recent']) {
                    shadowed.sort((a, b) => b.createdAt - a.createdAt);
                }
                if (filteringAndSorting.sorts['likes']) {
                    shadowed.sort((a, b) => b.totalVotes - a.totalVotes);
                }
                return [...shadowed];
            };

            if (activeTab === 'queery') {
                setQueeries(callback);
            } else {
                setStories(callback);
            }
        }
    }, [filteringAndSorting]);

    return (
        <Tabs color="pink" value={activeTab} onTabChange={(tab) => {
            onActiveTabChange(tab);
            setActiveTab(tab);
        }}
        styles={{tab:  {'&[data-active]': {background: activeTab === 'queery' ? '#ffb6c3' : '#C2ADFF'}}}}>
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
                        queeries.filter(q => q.isFiltered !== undefined ? q.isFiltered : true).map((queery) => (
                            <PostContext.Provider key={queery.postId} value={queery}>
                                <UserActionsHandlersContext.Provider value={{
                                    handleClickOnPost: () => handleClickOnPost(queery.postId, 'queery'),
                                    handleTogglePrompt: () => handleTogglePrompt(queery.postId, 'queery'),
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
                    <InPageLoader color='grape'/>
                ) : (
                    stories.filter(s => s.isFiltered !== undefined ? s.isFiltered : true).map((story) => (
                        <PostContext.Provider key={'storyy' + story.postId} value={story}>
                            <UserActionsHandlersContext.Provider value={{
                                handleClickOnPost: () => handleClickOnPost(story.postId, 'story'),
                                handleTogglePrompt: () => handleTogglePrompt(story.postId, 'story'),
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