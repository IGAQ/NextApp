import {motion, AnimatePresence} from 'framer-motion';
import styled from 'styled-components';
import {CloseButton} from '../../../Atoms/CloseButton';
import {Text} from '../../../Atoms/Common/Text';
import {FlexBox} from '../../../../styles/globals';
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
  right: 1.5em;
  background-color: #FFFFFF;
  padding: 2rem;
  z-index: 15;
  position: absolute;
  top: 0.8em;
`;

export function SlideMenuForResourcePage({onClick, filters, setFilters}) {
    const {handleAppliedFilters} = useContext(FilterContext);

    function handleFilterChange(filterType, filter, value) {
        setFilters({
            ...filters,
            [filterType]: {
                ...filters[filterType],
                [filter]: value,
            },
        });
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
    }

    return (
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
                    <Text size="1.5em" text={'Filter by tags'}></Text>
                    <Spacer axis="vertical" size={10}/>
                    <FlexBox align="flex-start">
                        <Checkbox color="red" size="md"
                            value='CmgOut'
                            checked={filters['_common']['CmgOut']}
                            label='Coming Out'
                            onChange={() => handleFilterChange('_common', 'CmgOut', !filters['_common']['CmgOut'])}
                            styles={(theme) => ({
                                input: {
                                    border: '1px solid red',
                                },
                            })}
                        />
                        <Spacer axis="vertical" size={15}/>
                        <Checkbox color="red" size="md"
                            value='serious'
                            checked={filters['_common']['Culture']}
                            label='Culture'
                            onChange={() => handleFilterChange('_common', 'Culture', !filters['_common']['Culture'])}
                            styles={(theme) => ({
                                input: {
                                    border: '1px solid red',
                                },
                            })}
                        />
                        <Spacer axis="vertical" size={15}/>
                        <Checkbox color="red" size="md"
                            value='advice'
                            checked={filters['_common']['Gay']}
                            label='Gay'
                            onChange={() => handleFilterChange('_common', 'Gay', !filters['_common']['Gay'])}
                            styles={(theme) => ({
                                input: {
                                    border: '1px solid red',
                                },
                            })}
                        />
                        <Spacer axis="vertical" size={15}/>
                        <Checkbox color="red" size="md"
                            value='Gender'
                            checked={filters['_common']['Gender']}
                            label='Gender'
                            onChange={() => handleFilterChange('_common', 'Gender', !filters['_common']['Gender'])}
                            styles={(theme) => ({
                                input: {
                                    border: '1px solid red',
                                },
                            })}
                        />
                        <Spacer axis="vertical" size={15}/>
                        <Checkbox color="red" size="md"
                            value='Identity'
                            checked={filters['_common']['Identity']}
                            label='Identity'
                            onChange={() => handleFilterChange('_common', 'Identity', !filters['_common']['Identity'])}
                            styles={(theme) => ({
                                input: {
                                    border: '1px solid red',
                                },
                            })}
                        />
                        <Spacer axis="vertical" size={15}/>
                        <Checkbox color="red" size="md"
                            value='Lesbian'
                            checked={filters['_common']['Lesbian']}
                            label='Lesbian'
                            onChange={() => handleFilterChange('_common', 'Lesbian', !filters['_common']['Lesbian'])}
                            styles={(theme) => ({
                                input: {
                                    border: '1px solid red',
                                },
                            })}
                        />
                    </FlexBox>
                    <Spacer axis="vertical" size={45}/>
                </FlexBox>
                <FlexBox align="center">
                    <Button label="Apply Filters" onClick={(e) => {
                        e.preventDefault();
                        handleAppliedFilters({filters});
                    }}/>
                </FlexBox>
            </SlideMenuBase>
        </AnimatePresence>
    );
}