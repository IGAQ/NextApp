import {FiBookmark} from 'react-icons/fi';
import { FlexBox } from '../../../styles/globals';
import { Spacer } from '../../Atoms/Spacer';
import { PostTitle } from '../../Atoms/PostTitle';
import { PostContent } from '../../Atoms/PostContent';
import { PostTagBox } from '../../Molecules/PostTagBox';
import { ContentButton } from '../../Atoms/ContentButton';
import styled from 'styled-components';
import { useState } from 'react';

const StyledSave = styled(FiBookmark)`
position: relative;
top: 3%;
left: 50%;
    `;

export function ResourceCard ({title, content, tags}){
    const [isSaved, setIsSaved] = useState(false);

    const handleSave = () => {
        setIsSaved(!isSaved);
    };

    return(
        <>
            <FlexBox bgColor = "#FFF" padding = "15px 60px">
                <StyledSave size = {25} onClick = {handleSave}/>
                <PostTitle title={title} style = {{ alignSelf: 'flex-start'}}/>
                <PostContent content = {content} onClick={()=>{}}/>
                <ContentButton onClick={()=>{}}/>
                <Spacer axis="vertical" size={10}/> 

                <PostTagBox tags = {tags}/>
                <Spacer axis="vertical" size={10}/> 
            </FlexBox>
            <Spacer axis="vertical" size={25}/> 
        </>
              

    );
}

