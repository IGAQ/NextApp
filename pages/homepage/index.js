import {Spacer} from '../../components/Atoms/Common/Spacer';
import {OTDBase, StoryOTD} from '../../components/Templates/OfTheDay/OTDBase';
import {Background} from '../../styles/globals';
import {SearchAndFilter} from '../../components/Organisms/Common/SearchAndFilter';
import styled from 'styled-components';
import {ScrollToTopButton} from '../../components/Atoms/Common/ScrollToTopButton';
import React, {useEffect, useState} from 'react';
import {QueeryStoryTabs} from '../../components/Organisms/Common/QueeryStoryTabs';
import {useUser} from '../../lib/hooks/useUser';
import {PageLoader} from '../../components/Atoms/Common/Loader';
import {QueeryStoryStateContext, UserContext, UserActionsHandlersContext, FilterContext} from '../../lib/contexts';
import { SlideMenu } from '../../components/Molecules/Common/SlideMenu';

export const StickyDiv = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: ${(props) => props.top}px;
  z-index: ${(props) => props.zIndex || 2};
  background-color: #DFEEFF;
  max-width: 50em;
  margin: auto;
  padding-bottom: 1em;
`;

export default function Homepage(props) {
    const [user, userAuthLoaded] = useUser();
    const [activeTab, setActiveTab] = useState('queery');
    const [scrolledEnough, setScrolledEnough] = useState(false);
    const [filterMenu, openFilterMenu] = useState(false);
    const [appliedFilters, setAppliedFilters] = useState([]);
    const [stories, setStories] = useState(null);
    const [queeries, setQueeries] = useState(null);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setScrolledEnough(true);
        } else {
            setScrolledEnough(false);
        }
    };

    function handleOpenFilter(){
        openFilterMenu(true);
    }

    function handleCloseFilter(){
        openFilterMenu(false);
    }

    const handleActiveTabChange = (tab) => {
        setActiveTab(tab);
    };

    function handleAppliedFilters({
        casualFilter,
        seriousFilter,
        generalFilter,
        adviceFilter,
        triggerFilter,
        inspiringFilter,
        ventFilter,
        dramaFilter,
        discussionFilter,
        sortByRecent,
        sortByLikes,
    }){
        // if(activeTab === 'queery'){
        //     for(i = 0; i < queeries.length; i++){
        //         console.log(queeries[i].postTags);
        //     }
        // }else{
        //     for(i = 0; i < stories.length; i++){
                
        //     }
        // }
    }
    

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // const [search, setSearch] = useState('');
    // const [filter, setFilter] = useState('All');
    // const [filteredPosts, setFilteredPosts] = useState([]);

    return !userAuthLoaded ? (
        <PageLoader/>
    ) : (
        <UserContext.Provider value={user}>
            <FilterContext.Provider value = {{handleAppliedFilters}}>
                <Background>
                    <ScrollToTopButton isVisible={scrolledEnough}/>
                    <OTDBase activeTab={activeTab}/>
                    <StickyDiv top={0} zIndex = {4} >
                        {filterMenu && <SlideMenu onClick = {handleCloseFilter} currentTab = {activeTab}/>}
                    </StickyDiv>
                    <StickyDiv top={0}>
                        <Spacer size={15}/>
                        <UserActionsHandlersContext.Provider value = {{handleOpenFilter}}>
                            <SearchAndFilter />
                        </UserActionsHandlersContext.Provider>
                    </StickyDiv>
                    <Spacer size={10}/>
                    <QueeryStoryStateContext.Provider value = {{setStories, setQueeries, stories, queeries}}>
                        <QueeryStoryTabs onActiveTabChange={handleActiveTabChange} />
                    </QueeryStoryStateContext.Provider>
                </Background>
            </FilterContext.Provider>
        </UserContext.Provider>
    );
}