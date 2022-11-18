import axios from 'axios';
import {Spacer} from '../../components/Atoms/Common/Spacer';
import {NewPost} from '../../components/Templates/Post/NewPost';
import {OTDBase} from '../../components/Templates/OfTheDay/OTDBase';
import {queeryQuestions} from '../../data/qotd';
import {API_SERVER} from '../../lib/constants';
import {Background} from '../../styles/globals';
import {SearchAndFilter} from '../../components/Organisms/Common/SearchAndFilter';
import styled from 'styled-components';
import {ScrollToTopButton} from '../../components/Atoms/Common/ScrollToTopButton';
import React, {useEffect, useState} from 'react';
import {QueeryStoryTabs} from '../../components/Organisms/Common/QueeryStoryTabs';

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

    return (
        <Background>
            <ScrollToTopButton isVisible={scrolledEnough}/>
            <OTDBase queeryQuestions={queeryQuestions.question}/>
            <StickyDiv>
                <Spacer size={15}/>
                <SearchAndFilter/>
                <Spacer size={10}/>
                <QueeryStoryTabs />
            </StickyDiv>
        </Background>
    );
}