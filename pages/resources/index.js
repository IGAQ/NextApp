import { FlexBox, ModalBackdrop, Wrapper } from '../../styles/globals';
import { useRouter } from 'next/router';
import { Spacer } from '../../components/Atoms/Spacer';
import { ResourceCard } from '../../components/Molecules/ResourceCard';
import { PostTitle } from '../../components/Molecules/PostTitle';
import { Button } from '../../components/Atoms/Button';
import { resources } from '../../data/resources';
import { SearchAndFilter } from '../../components/Organisms/SearchAndFilter';

export default function Resources(props){
    const r = useRouter();

    return(
        <Wrapper align = "stretch" bgColor = "#FFEAD4"> 
            <PostTitle title = "Resources"/>
            <SearchAndFilter/>
            <Spacer axis="vertical" size={25}/>
            <FlexBox align = "stretch" flex = "1" bgColor = "#fff9f2">
                <FlexBox  margin= "10px 0 0 0" dir = "row" padding = "15px 0" justify-content = "space-between" bgColor = "#FFF" boxShadow = "0 2px 4px -1px rgb(117 37 37 / 35%)">
                    <Button length = "short" label = "LGBTQA+ Terms" backgroundColor="#8054ff"/>
                    <Spacer axis="horizontal" size={15}/>
                    <Button length = "short" label = "LGBTQA+ Flags" backgroundColor="#8054ff"/>
                </FlexBox>
                <Spacer axis="vertical" size={25}/>
                <FlexBox  margin = "0" align = "stretch" flex = "1">
                    {resources.map((resource)=>(
                        <ResourceCard
                            key = {resource.title}
                            title = {resource.title}
                            content = {resource.content}
                            tags = {resource.tags}   
                        />
                    ))}
                </FlexBox>
            </FlexBox>
            <Spacer axis="vertical" size={25}/>

        </Wrapper>


    );


}