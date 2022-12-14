import {motion, AnimatePresence} from 'framer-motion';
import styled from 'styled-components';
import {CloseButton} from '../../../Atoms/CloseButton';
import {Text} from '../../../Atoms/Common/Text';
import {FlexBox, ModalBackdrop} from '../../../../styles/globals';
import {Spacer} from '../../../Atoms/Common/Spacer';
import {useContext, useState} from 'react';
import {Checkbox} from '@mantine/core';
import {Button} from '../../../Atoms/Common/Buttons/Button';
import {FilterContext} from '../../../../lib/contexts';
import {capitalizeFirstLetter} from '../../../../lib/utils';

const SlideMenuBase = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  min-width: 20em;
  left: 1.5em;
  background-color: #FFFFFF;
  padding: 2rem;
  z-index: 15;
  position: absolute;
  top: 0.8em;
`;

export function SlideMenu({currentTab, onClick, filters, setFilters}) {
    const {handleAppliedFilters} = useContext(FilterContext);

    const [sorts, setSorts] = useState({
        'recent': false,
        'likes': false,
    });

    function handleFilterChange(filterType, filter, value) {
        setFilters({
            ...filters,
            [filterType]: {
                ...filters[filterType],
                [filter]: value,
            },
        });
    }

    function handleSortChange(sort, value) {
        setSorts({...sorts, [sort]: value});
    }

    function resetFilter() {
        setFilters(prevState => {
            const newState = {...prevState};
            for (const key in newState) {
                for (const key2 in newState[key]) {
                    newState[key][key2] = false;
                }
            }
            return newState;
        });
        setSorts(prevState => {
            const newState = {...prevState};
            for (const key in newState) {
                newState[key] = false;
            }
            return newState;
        });
    }

    return (
        <>
            <AnimatePresence>
                <SlideMenuBase
                    initial={{x: 20}}
                    animate={{x: 0, opacity: 1}}
                    transiton={{duration: 200, delay: 500, staggerChildren: 0.5}}
                    exit={{x: 1500, opacity: 0}}>
                    <FlexBox justify="space-between" dir="row">
                        <CloseButton onClick={onClick}/>
                        <Text text="CLEAR FILTERS" size="0.75rem" color="#666666B5" onClick={resetFilter}> </Text>
                    </FlexBox>
                    <FlexBox padding="0 2em" align="flex-start">
                        <Spacer axis="vertical" size={25}/>
                        <Text size="1.5em" text="Sort By"></Text>
                        <Spacer axis="vertical" size={10}/>
                        <FlexBox align="flex-start">
                            <Checkbox color="red" size="md"
                                value='mostRecent'
                                checked={sorts['recent']}
                                label='Most Recent'
                                onChange={() => handleSortChange('recent', !sorts['recent'])}
                                styles={(theme) => ({
                                    input: {
                                        border: '1px solid red',
                                    },
                                })}
                            />
                            <Spacer axis="vertical" size={15}/>
                            <Checkbox color="red" size="md"
                                value='mostLikes'
                                checked={sorts['likes']}
                                label='Most Likes'
                                onChange={() => handleSortChange('likes', !sorts['likes'])}
                                styles={(theme) => ({
                                    input: {
                                        border: '1px solid red',
                                    },
                                })}
                            />
                        </FlexBox>
                        <Spacer axis="vertical" size={45}/>
                        <Text size="1.5em" text={`Filter by ${capitalizeFirstLetter(currentTab)} tags`}></Text>
                        <Spacer axis="vertical" size={10}/>
                        {currentTab === 'queery' ? (
                            <FlexBox align="flex-start">
                                <Checkbox color="red" size="md"
                                    value='casual'
                                    label='Casual'
                                    checked={filters['_common']['casual']}
                                    onChange={() => handleFilterChange('_common', 'casual', !filters['_common']['casual'])}
                                    styles={(theme) => ({
                                        input: {
                                            border: '1px solid red',
                                        },
                                    })}
                                />
                                <Spacer axis="vertical" size={15}/>
                                <Checkbox color="red" size="md"
                                    value='serious'
                                    label='Serious'
                                    checked={filters['_common']['serious']}
                                    onChange={() => handleFilterChange('_common', 'serious', !filters['_common']['serious'])}
                                    styles={(theme) => ({
                                        input: {
                                            border: '1px solid red',
                                        },
                                    })}
                                />
                                <Spacer axis="vertical" size={15}/>
                                <Checkbox color="red" size="md"
                                    value='advice'
                                    label='Advice'
                                    checked={filters['queery']['advice']}
                                    onChange={() => handleFilterChange('queery', 'advice', !filters['queery']['advice'])}
                                    styles={(theme) => ({
                                        input: {
                                            border: '1px solid red',
                                        },
                                    })}
                                />
                                <Spacer axis="vertical" size={15}/>
                                <Checkbox color="red" size="md"
                                    value='general'
                                    label='General'
                                    checked={filters['queery']['general']}
                                    onChange={() => handleFilterChange('queery', 'general', !filters['queery']['general'])}
                                    styles={(theme) => ({
                                        input: {
                                            border: '1px solid red',
                                        },
                                    })}
                                />
                                <Spacer axis="vertical" size={15}/>
                                <Checkbox color="red" size="md"
                                    value='discussion'
                                    label='Discussion'
                                    checked={filters['queery']['discussion']}
                                    onChange={() => handleFilterChange('queery', 'discussion', !filters['queery']['discussion'])}
                                    styles={(theme) => ({
                                        input: {
                                            border: '1px solid red',
                                        },
                                    })}
                                />
                                <Spacer axis="vertical" size={15}/>
                                <Checkbox color="red" size="md"
                                    value='trigger'
                                    label='Trigger'
                                    checked={filters['_common']['trigger']}
                                    onChange={() => handleFilterChange('_common', 'trigger', !filters['_common']['trigger'])}
                                    styles={(theme) => ({
                                        input: {
                                            border: '1px solid red',
                                        },
                                    })}
                                />
                            </FlexBox>
                        ) : (
                            <FlexBox align="flex-start">
                                <Checkbox color="red" size="md"
                                    value='casual'
                                    label='Casual'
                                    checked={filters['_common']['casual']}
                                    onChange={() => handleFilterChange('_common', 'casual', !filters['_common']['casual'])}
                                    styles={(theme) => ({
                                        input: {
                                            border: '1px solid red',
                                        },
                                    })}
                                />
                                <Spacer axis="vertical" size={15}/>
                                <Checkbox color="red" size="md"
                                    value='serious'
                                    label='Serious'
                                    checked={filters['_common']['serious']}
                                    onChange={() => handleFilterChange('_common', 'serious', !filters['_common']['serious'])}
                                    styles={(theme) => ({
                                        input: {
                                            border: '1px solid red',
                                        },
                                    })}
                                />
                                <Spacer axis="vertical" size={15}/>
                                <Checkbox color="red" size="md"
                                    value='trigger'
                                    label='Trigger'
                                    checked={filters['_common']['trigger']}
                                    onChange={() => handleFilterChange('_common', 'trigger', !filters['_common']['trigger'])}
                                    styles={(theme) => ({
                                        input: {
                                            border: '1px solid red',
                                        },
                                    })}
                                />
                                <Spacer axis="vertical" size={15}/>
                                <Checkbox color="red" size="md"
                                    value='inspiring'
                                    label='Inspiring'
                                    checked={filters['story']['inspiring']}
                                    onChange={() => handleFilterChange('story', 'inspiring', !filters['story']['inspiring'])}
                                    styles={(theme) => ({
                                        input: {
                                            border: '1px solid red',
                                        },
                                    })}
                                />
                                <Spacer axis="vertical" size={15}/>
                                <Checkbox color="red" size="md"
                                    value='vent'
                                    label='Vent'
                                    checked={filters['story']['vent']}
                                    onChange={() => handleFilterChange('story', 'vent', !filters['story']['vent'])}
                                    styles={(theme) => ({
                                        input: {
                                            border: '1px solid red',
                                        },
                                    })}
                                />
                                <Spacer axis="vertical" size={15}/>
                                <Checkbox color="red" size="md"
                                    value='drama'
                                    label='Drama'
                                    checked={filters['story']['drama']}
                                    onChange={() => handleFilterChange('story', 'drama', !filters['story']['drama'])}
                                    styles={(theme) => ({
                                        input: {
                                            border: '1px solid red',
                                        },
                                    })}
                                />
                            </FlexBox>
                        )}
                        <Spacer axis="vertical" size={45}/>
                    </FlexBox>
                    <FlexBox align="center">
                        <Button label="Apply Filters" onClick={() => handleAppliedFilters({filters, sorts})}/>
                    </FlexBox>
                </SlideMenuBase>
                <ModalBackdrop/>
            </AnimatePresence>
        </>
    );
}