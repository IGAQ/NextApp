import {motion, AnimatePresence} from 'framer-motion';
import styled from 'styled-components';
import { CloseButton } from '../../../Atoms/CloseButton';
import {Text}from '../../../Atoms/Common/Text';
import {FlexBox}from '../../../../styles/globals';
import { Spacer } from '../../../Atoms/Common/Spacer';
import { useContext, useState } from 'react';
import { Checkbox } from '@mantine/core';
import { Button } from '../../../Atoms/Common/Buttons/Button';
import { FilterContext } from '../../../../lib/contexts';

const SlideMenuBase = styled(motion.div)`
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: stretch;
       min-width: 50em;
       background-color: #FFFFFF;
       padding: 2rem;
       z-index: 15;
       position: absolute;
       top: 0.99em;
`;

export function SlideMenu(props) {
    const {handleAppliedFilters} = useContext(FilterContext);

    const [casualFilter, setCasualFilter] = useState(false);
    const [seriousFilter, setSeriousFilter] = useState(false);
    const [generalFilter, setGeneralFilter] = useState(false);
    const [adviceFilter, setAdviceFilter] = useState(false);
    const [triggerFilter, setTriggerFilter] = useState(false);
    const [discussionFilter, setDiscussionFilter] = useState(false);
    const [inspiringFilter, setInspiringFilter] = useState(false);
    const [ventFilter, setVentFilter] = useState(false);
    const [dramaFilter, setDramaFilter] = useState(false);

    const [sortByRecent, setSortByRecent] = useState(false);
    const [sortByLikes, setSortByLikes] = useState(false);

    
    const appliedFilters = {
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
    };

    function handleSubmit(){
        if(props.currentTab === 'queery'){
            AppliedFilters(appliedFilters);
        }
        if(props.currentTab === 'story'){
            AppliedFilters(appliedFilters);
        }
    }

    function resetFilter(){
        handleAppliedFilters([]);
        setCasualFilter(false);
        setSeriousFilter(false);
        setGeneralFilter(false);
        setTriggerFilter(false);
        setDiscussionFilter(false);
        setSortByRecent(false);
        setSortByLikes(false);
    }

    if(props.currentTab === 'queery'){
        return(
            <AnimatePresence>
                <SlideMenuBase
                    initial={{x:150}}
                    animate = {{x:0, opacity:1}}
                    transiton={{duration: 200, delay:500, staggerChildren: 0.5}}
                    exit={{x:1500, opacity: 0}}>
                    <FlexBox justify = "space-between" dir = "row"> 
                        <CloseButton onClick = {props.onClick}/>
                        <Text text = "CLEAR FILTERS" size = "0.75rem" color = "#666666B5" onClick = {resetFilter}> </Text>
                    </FlexBox>
                    <FlexBox padding = "0 2em" align = "flex-start">
                        <Spacer axis="vertical" size={25} />
                        <Text size = "1.5em" text = "Sort By"></Text>
                        <Spacer axis="vertical" size={10} />
                        <FlexBox align = "flex-start">
                            <Checkbox color = "red" size = "md"
                                value = 'mostRecent'
                                label = 'Most Recent'
                                onChange = {()=>setSortByRecent(!sortByRecent)}
                                styles = {(theme) => ({
                                    input: {
                                        border: '1px solid red',
                                    },
                                })}
                            />
                            <Spacer axis="vertical" size={15} />
                            <Checkbox color = "red" size = "md"
                                value = 'mostLikes'
                                label = 'Most Likes'
                                onChange = {()=>setSortByLikes(!sortByLikes)}
                                styles = {(theme) => ({
                                    input: {
                                        border: '1px solid red',
                                    },
                                })}
                            />
                        </FlexBox>
                        <Spacer axis="vertical" size={45} />
                        <Text size = "1.5em" text = "Filter by Queery tags"></Text>
                        <Spacer axis="vertical" size={10} />
                        <FlexBox align = "flex-start">    
                            <Checkbox color = "red" size = "md"
                                value = 'casual'
                                label = 'Casual'
                                onChange = {()=> setCasualFilter(!casualFilter)}
                                styles = {(theme) => ({
                                    input: {
                                        border: '1px solid red',
                                    },
                                })}
                            />
                            <Spacer axis="vertical" size={15} />
                            <Checkbox color = "red" size = "md"
                                value = 'serious'
                                label = 'Serious'
                                onChange = {()=>setSeriousFilter(!seriousFilter)}
                                styles = {(theme) => ({
                                    input: {
                                        border: '1px solid red',
                                    },
                                })}
                            />
                            <Spacer axis="vertical" size={15} />
                            <Checkbox color = "red" size = "md"
                                value = 'general'
                                label = 'General'
                                onChange = {()=>setGeneralFilter(!generalFilter)}
                                styles = {(theme) => ({
                                    input: {
                                        border: '1px solid red',
                                    },
                                })}
                            />
                            <Spacer axis="vertical" size={15} />
                            <Checkbox color = "red" size = "md"
                                value = 'general'
                                label = 'General'
                                onChange = {()=>setAdviceFilter(!adviceFilter)}
                                styles = {(theme) => ({
                                    input: {
                                        border: '1px solid red',
                                    },
                                })}
                            />
                            <Spacer axis="vertical" size={15} />
                            <Checkbox color = "red" size = "md"
                                value = 'discussion'
                                label = 'Discussion'
                                onChange = {()=>setDiscussionFilter(!discussionFilter)}
                                styles = {(theme) => ({
                                    input: {
                                        border: '1px solid red',
                                    },
                                })}
                            />
                            <Spacer axis="vertical" size={15} />
                            <Checkbox color = "red" size = "md"
                                value = 'trigger'
                                label = 'Trigger'
                                onChange = {()=>setTriggerFilter(!triggerFilter)}
                                styles = {(theme) => ({
                                    input: {
                                        border: '1px solid red',
                                    },
                                })}
                            />
                        </FlexBox>
                        <Spacer axis="vertical" size={45} />
                    </FlexBox>
                    <FlexBox align = "center"> 
                        <Button label= "Apply Filters" onClick = {handleSubmit}/>
                    </FlexBox>
                </SlideMenuBase>
            </AnimatePresence>
        );
    }

    if(props.currentTab === 'story'){
        return(
            <AnimatePresence>
                <SlideMenuBase
                    initial={{x:150}}
                    animate = {{x:0, opacity:1}}
                    transiton={{duration: 200, delay:500, staggerChildren: 0.5}}
                    exit={{x:1500, opacity: 0}}>
                    <FlexBox justify = "space-between" dir = "row"> 
                        <CloseButton onClick = {props.onClick}/>
                        <Text text = "CLEAR FILTERS" size = "0.75rem" color = "#666666B5" onClick = {resetFilter}> </Text>
                    </FlexBox>
                    <FlexBox padding = "0 2em" align = "flex-start">
                        <Spacer axis="vertical" size={25} />
                        <Text size = "1.5em" text = "Sort By"></Text>
                        <Spacer axis="vertical" size={10} />
                        <FlexBox align = "flex-start">
                            <Checkbox color = "red" size = "md"
                                value = 'mostRecent'
                                label = 'Most Recent'
                                onChange = {()=>setSortByRecent(!sortByRecent)}
                                styles = {(theme) => ({
                                    input: {
                                        border: '1px solid red',
                                    },
                                })}
                            />
                            <Spacer axis="vertical" size={15} />
                            <Checkbox color = "red" size = "md"
                                value = 'mostLikes'
                                label = 'Most Likes'
                                onChange = {()=>setSortByLikes(!sortByLikes)}
                                styles = {(theme) => ({
                                    input: {
                                        border: '1px solid red',
                                    },
                                })}
                            />
                        </FlexBox>
                        <Spacer axis="vertical" size={45} />
                        <Text size = "1.5em" text = "Filter by Queery tags"></Text>
                        <Spacer axis="vertical" size={10} />
                        <FlexBox align = "flex-start">    
                            <Checkbox color = "red" size = "md"
                                value = 'casual'
                                label = 'Casual'
                                onChange = {()=> setCasualFilter(!casualFilter)}
                                styles = {(theme) => ({
                                    input: {
                                        border: '1px solid red',
                                    },
                                })}
                            />
                            <Spacer axis="vertical" size={15} />
                            <Checkbox color = "red" size = "md"
                                value = 'serious'
                                label = 'Serious'
                                onChange = {()=>setSeriousFilter(!seriousFilter)}
                                styles = {(theme) => ({
                                    input: {
                                        border: '1px solid red',
                                    },
                                })}
                            />
                            <Spacer axis="vertical" size={15} />
                            <Checkbox color = "red" size = "md"
                                value = 'serious'
                                label = 'Serious'
                                onChange = {()=>setInspiringFilter(!inspiringFilter)}
                                styles = {(theme) => ({
                                    input: {
                                        border: '1px solid red',
                                    },
                                })}
                            />
                            <Spacer axis="vertical" size={15} />
                            <Checkbox color = "red" size = "md"
                                value = 'general'
                                label = 'General'
                                onChange = {()=>setVentFilter(!ventFilter)}
                                styles = {(theme) => ({
                                    input: {
                                        border: '1px solid red',
                                    },
                                })}
                            />
                            <Spacer axis="vertical" size={15} />
                            <Checkbox color = "red" size = "md"
                                value = 'discussion'
                                label = 'Discussion'
                                onChange = {()=>setDramaFilter(!dramaFilter)}
                                styles = {(theme) => ({
                                    input: {
                                        border: '1px solid red',
                                    },
                                })}
                            />
                            <Spacer axis="vertical" size={15} />
                            <Checkbox color = "red" size = "md"
                                value = 'trigger'
                                label = 'Trigger'
                                onChange = {()=>setTriggerFilter(!triggerFilter)}
                                styles = {(theme) => ({
                                    input: {
                                        border: '1px solid red',
                                    },
                                })}
                            />
                        </FlexBox>
                        <Spacer axis="vertical" size={45} />
                    </FlexBox>
                    <FlexBox align = "center"> 
                        <Button label= "Apply Filters" onClick = {handleSubmit}/>
                    </FlexBox>
                </SlideMenuBase>
            </AnimatePresence>
        );
    }
}