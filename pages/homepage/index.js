import {Spacer} from '../../components/Atoms/Common/Spacer';
import {OTDBase} from '../../components/Templates/OfTheDay/OTDBase';
import {Background} from '../../styles/globals';
import {SearchAndFilter} from '../../components/Organisms/Common/SearchAndFilter';
import styled from 'styled-components';
import {ScrollToTopButton} from '../../components/Atoms/Common/ScrollToTopButton';
import React, {useEffect, useState} from 'react';
import {QueeryStoryTabs} from '../../components/Organisms/Common/QueeryStoryTabs';
import {useUser} from '../../lib/hooks/useUser';
import {PageLoader} from '../../components/Atoms/Common/Loader';
import {FilterContext, UserActionsHandlersContext, UserContext} from '../../lib/contexts';
import {SlideMenu} from '../../components/Molecules/Common/SlideMenu';

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

    const [filters, setFilters] = useState({
        '_common': {
            'casual': false,
            'serious': false,
            'trigger': false,
        },
        'queery': {
            'general': false,
            'advice': false,
            'discussion': false,
        },
        'story': {
            'inspiring': false,
            'vent': false,
            'drama': false,
        },
    });

    const [scrolledEnough, setScrolledEnough] = useState(false);

    const [filterMenu, openFilterMenu] = useState(false);

    const [filteringAndSorting, setFilteringAndSorting] = useState(null);


    const handleScroll = () => {
        if (window.scrollY > 100) {
            setScrolledEnough(true);
        } else {
            setScrolledEnough(false);
        }
    };

    function handleOpenFilter() {
        openFilterMenu(true);
    }

    function handleCloseFilter() {
        openFilterMenu(false);
    }

    const handleActiveTabChange = (tab) => {
        setActiveTab(tab);
    };

    function handleAppliedFilters({filters, sorts}) {
        setFilteringAndSorting({filters, sorts});
        openFilterMenu(false);
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
            <FilterContext.Provider value={{handleAppliedFilters, filters, setFilters}}>
                <Background>
                    <ScrollToTopButton isVisible={scrolledEnough}/>
                    <OTDBase activeTab={activeTab}/>
                    <StickyDiv top={0} zIndex={4}>
                        {filterMenu && <SlideMenu onClick={handleCloseFilter} currentTab={activeTab}/>}
                    </StickyDiv>
                    <StickyDiv top={0}>
                        <Spacer size={15}/>
                        <UserActionsHandlersContext.Provider value={{handleOpenFilter}}>
                            <SearchAndFilter/>
                        </UserActionsHandlersContext.Provider>
                    </StickyDiv>
                    <Spacer size={10}/>
                    <QueeryStoryTabs filteringAndSorting={filteringAndSorting}  onActiveTabChange={handleActiveTabChange}/>
                </Background>
            </FilterContext.Provider>
        </UserContext.Provider>
    );
}