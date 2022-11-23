import {FlexBox} from '../../styles/globals';
import {Spacer} from '../../components/Atoms/Common/Spacer';
import {ResourceCard} from '../../components/Molecules/Common/ResourceCard';
import {PostTitle} from '../../components/Molecules/Post/PostTitle';
import {Button} from '../../components/Atoms/Common/Buttons/Button';
import {resources} from '../../data/resources';
import {SearchAndFilter} from '../../components/Organisms/Common/SearchAndFilter';
import { SlideMenu } from '../../components/Molecules/Common/SlideMenu';
import { UserActionsHandlersContext } from '../../lib/contexts';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Resources(props) {
    const r = useRouter();
    const [filterMenu, openFilterMenu] = useState(false);

    function handleOpenFilter(){
        openFilterMenu(true);
    }

    function handleCloseFilter(){
        openFilterMenu(false);
    }

    function handleResourceClick({resource}) {
        console.log('clicked');
        r.push({
            pathname: '/resources/[resourceID]',
            query: {
                title: resource.title, 
                id: resource.id,
                content: resource.content,
                tags: resource.tags,
            },
        });
    }
    return (
        <FlexBox align="stretch" bgColor="#A5CEFF">
            <PostTitle title="Resources"/>
            {filterMenu && <SlideMenu onClick = {handleCloseFilter}/>}
            <UserActionsHandlersContext.Provider value = {{handleOpenFilter}}>
                <SearchAndFilter />
            </UserActionsHandlersContext.Provider>
            <Spacer axis="vertical" size={55}/>
            <FlexBox align="stretch" flex="1" bgColor="#DFEEFF">
                <FlexBox margin="10px 0 0 0" dir="row" padding="15px 0" justify-content="space-between" bgColor="#FFF"
                    boxShadow="0 2px 4px -1px rgb(117 37 37 / 35%)">
                    <Button size="short" color="#000000" label="LGBTQA+ Terms" backgroundColor="#A5CEFF"/>
                    <Spacer axis="horizontal" size={15}/>
                    <Button size="short" color="#000000" label="LGBTQA+ Flags" backgroundColor="#A5CEFF"/>
                </FlexBox>
                <Spacer axis="vertical" size={25}/>
                <FlexBox margin="0" align="stretch" flex="1">
                    {resources.map((resource) => (
                        <ResourceCard
                            key={resource.title}
                            title={resource.title}
                            content={resource.content}
                            tags={resource.tags}
                            onClick = {() => handleResourceClick({resource})}
                        />
                    ))}
                </FlexBox>
            </FlexBox>
            <Spacer axis="vertical" size={25}/>

        </FlexBox>


    );


}