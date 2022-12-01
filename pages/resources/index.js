import {FlexBox} from '../../styles/globals';
import {Spacer} from '../../components/Atoms/Common/Spacer';
import {ResourceCard} from '../../components/Molecules/Common/ResourceCard';
import {PostTitle} from '../../components/Molecules/Post/PostTitle';
import {Button} from '../../components/Atoms/Common/Buttons/Button';
import {resources as _resources} from '../../data/resources';
import {SearchAndFilter} from '../../components/Organisms/Common/SearchAndFilter';
import { FilterContext, UserActionsHandlersContext } from '../../lib/contexts';
import React, {useEffect, useRef, useState} from 'react';
import { useRouter } from 'next/router';
import {SlideMenuForResourcePage} from '../../components/Molecules/Common/SlideMenuForResourcePage';
import {InPageLoader} from '../../components/Atoms/Common/Loader';
import {ScrollToTopButton} from '../../components/Atoms/Common/ScrollToTopButton';
import {eventService} from '../../lib/services/eventService';

export default function Resources(props) {
    const r = useRouter();
    const [resources, setResources] = useState(_resources);
    const [isLoading, setIsLoading] = useState(false);

    const [filterMenu, openFilterMenu] = useState(false);

    const [filters, setFilters] = useState({
        '_common': {
            'CmgOut': false,
            'Culture': false,
            'Gay': false,
            'Gender': false,
            'Identity': false,
            'Lesbian': false,
        },
    });
    const [filteringAndSorting, setFilteringAndSorting] = useState(null);

    function handleOpenFilter() {
        openFilterMenu(true);
    }

    function handleCloseFilter(){
        openFilterMenu(false);
    }

    useEffect(() => {
        if (filteringAndSorting) {
            const applicableFilters = filteringAndSorting.filters['_common'];
            const appliedFilters = Object.keys(applicableFilters).filter((key) => applicableFilters[key]);

            const callback = resources => {
                let shadowed = [...resources];
                if (appliedFilters.length > 0) {
                    for (let resource of shadowed) {
                        const postTags = resource.tags.map((tag) => tag.tagName.trim().toLowerCase());
                        resource.isFiltered = appliedFilters.some((filter) => postTags.includes(filter.trim().toLowerCase()));
                    }
                } else {
                    shadowed = shadowed.map(s => {
                        s.isFiltered = true;
                        return s;
                    });
                }
                return [...shadowed];
            };
            setResources(callback);
            setIsLoading(false);
        }
    }, [filteringAndSorting]);

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

    function handleAppliedFilters({filters}) {
        openFilterMenu(false);
        setIsLoading(true);
        setFilteringAndSorting({filters});
    }

    const searchTerm = useRef('');
    const lastTimeSearchTermChanged = useRef(Date.now());
    const handleSearchTermChange = (term) => {
        if (lastTimeSearchTermChanged.current + 50 < Date.now()) {
            searchTerm.current = term;
            lastTimeSearchTermChanged.current = Date.now();

            // search
            const callback = resources => {
                let shadowed = [...resources];

                return shadowed.map(resource => {
                    const title = resource.title.trim().toLowerCase();
                    const content = resource.content.trim().toLowerCase();
                    const query = term.trim().toLowerCase();

                    resource.isFiltered = (title.includes(query) || content.includes(query));

                    return resource;
                });
            };
            setResources(callback);
        }
    };

    function handleResourceClick({resource}) {
        r.push({
            pathname: '/resources/[resourceID]',
            query: {
                title: resource.title, 
                id: resource.id,
                content: resource.content,
                tags: resource.tags,
                author: resource.author,
            },
        });
    }
    return (
        <FlexBox align='stretch' bgColor='#A5CEFF'>
            <PostTitle title='Resources'/>
            <FilterContext.Provider value={{handleAppliedFilters}}>
                {filterMenu && <SlideMenuForResourcePage filters={filters} setFilters={setFilters} onClick = {handleCloseFilter} />}
            </FilterContext.Provider>
            <ScrollToTopButton isVisible={scrolledEnough}/>
            <UserActionsHandlersContext.Provider value={{
                handleOpenFilter,
                handleSearchTermChange,
            }}>
                <FlexBox style = {{alignSelf: 'center'}} align = 'stretch' minWidth = '50%' maxWidth ='85%'>
                    <SearchAndFilter  />
                </FlexBox>
            </UserActionsHandlersContext.Provider>
            <Spacer axis='vertical' size={55}/>
            <FlexBox flex='1' bgColor='#DFEEFF'>
                <FlexBox margin='10px 0 0 0' dir='row' padding='15px 0' justify-content='space-between' bgColor='#FFF'
                    boxShadow='0 2px 4px -1px rgb(117 37 37 / 35%)' minWidth = '100%'>
                    <Button color='#000000' label='LGBTQA+ Terms' backgroundColor='#A5CEFF' onClick = {()=> r.push({pathname: '/resources/terms'})}/>
                    <Spacer axis='horizontal' size={30}/>
                    <Button color='#000000' label='LGBTQA+ Flags' backgroundColor='#A5CEFF'onClick = {()=> r.push({pathname: '/resources/flags'})}/>
                </FlexBox>
                <Spacer axis='vertical' size={25}/>
                <FlexBox width = '100%' maxWidth = '50em'>
                    <FlexBox margin='0' align='stretch' flex='1'>
                        {isLoading ? (
                            <InPageLoader/>
                        ) : resources.filter(r => r.isFiltered !== undefined ? r.isFiltered : true).map((resource) => (

                            <ResourceCard
                                key={resource.title}
                                title={resource.title}
                                content={resource.content}
                                tags={resource.tags}
                                onClick = {() => r.push('resources/' + resource.id)}
                            />
                        ))}
                    </FlexBox>
                </FlexBox>
            </FlexBox>
            <Spacer axis='vertical' size={25}/>
        </FlexBox>


    );


}