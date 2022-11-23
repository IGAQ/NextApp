import {Spacer} from '../../components/Atoms/Common/Spacer';
import {OTDBase, StoryOTD} from '../../components/Templates/OfTheDay/OTDBase';
import {queeryQuestions} from '../../data/qotd';
import { storyQuestions } from '../../data/sotd';
import {Background} from '../../styles/globals';
import {SearchAndFilter} from '../../components/Organisms/Common/SearchAndFilter';
import styled from 'styled-components';
import {ScrollToTopButton} from '../../components/Atoms/Common/ScrollToTopButton';
import React, {useEffect, useState} from 'react';
import {QueeryStoryTabs} from '../../components/Organisms/Common/QueeryStoryTabs';
import {useUser} from '../../lib/hooks/useUser';
import {PageLoader} from '../../components/Atoms/Common/Loader';
import {UserContext} from '../../lib/contexts';

export const StickyDiv = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: ${(props) => props.top}px;
  z-index: 2;
  background-color: #DFEEFF;
  max-width: 50em;
  margin: auto;
  padding-bottom: 1em;
`;

export default function Homepage(props) {
    const [user, userAuthLoaded] = useUser();

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

    return !userAuthLoaded ? (
        <PageLoader/>
    ) : (
        <UserContext.Provider value={user}>
            <Background>
                <ScrollToTopButton isVisible={scrolledEnough}/>
                {activeTab === 'story' ? ( <StoryOTD  storyQuestions={storyQuestions.question} />) : ( <OTDBase  queeryQuestions={queeryQuestions.question} />)}
                <StickyDiv top={0}>
                    <Spacer size={15}/>
                    <SearchAndFilter/>
                </StickyDiv>
                <Spacer size={10}/>
                <QueeryStoryTabs/>
            </Background>
        </UserContext.Provider>
    );
}