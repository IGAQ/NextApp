import {FiBookmark} from 'react-icons/fi';
import {FlexBox} from '../../../styles/globals';
import {Spacer} from '../../Atoms/Spacer';
import {PostTitle} from '../../Atoms/Post/PostTitle';
import {PostContent} from '../../Atoms/Post/PostContent';
import {PostTagBox} from '../Post/PostTagBox';
import {ContentButton} from '../../Atoms/Post/ContentButton';
import styled from 'styled-components';
import {useState} from 'react';

const StyledSave = styled(FiBookmark)`
  position: relative;
  top: 3%;
  left: 50%;
`;

export function ResourceCard({title, content, tags}) {
    const [isSaved, setIsSaved] = useState(false);

    const handleSave = () => {
        setIsSaved(!isSaved);
    };

    return (
        <>
            <FlexBox bgColor="#FFF" padding="15px 60px">
                <StyledSave size={25} onClick={handleSave}/>
                <PostTitle title={title} style={{alignSelf: 'flex-start'}}/>
                <PostContent maxHeight="4.5em" content={content} onClick={() => {
                }}/>
                <ContentButton onClick={() => {
                }}/>
                <Spacer axis="vertical" size={10}/>
                <PostTagBox tags={tags}/>
                <Spacer axis="vertical" size={10}/>
            </FlexBox>
            <Spacer axis="vertical" size={25}/>
        </>
    );
}
