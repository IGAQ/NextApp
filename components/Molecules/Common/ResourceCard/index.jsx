import {FiBookmark} from 'react-icons/fi';
import {FlexBox} from '../../../../styles/globals';
import {Spacer} from '../../../Atoms/Common/Spacer';
import {PostTitle} from '../../../Atoms/Post/PostTitle';
import {PostContent} from '../../../Atoms/Post/PostContent';
import {PostTagBox} from '../../Post/PostTagBox';
import styled from 'styled-components';
import {useState} from 'react';
import {useRouter} from 'next/router';
import { resources } from '../../../../data/resources';

const StyledSave = styled(FiBookmark)`
  position: relative;
  top: 3%;
  left: 50%;
`;

export function ResourceCard({title, content, tags, onClick}) {
    const r = useRouter();
    const [isSaved, setIsSaved] = useState(false);

    const handleSave = () => {
        setIsSaved(!isSaved);
    };

    return (
        <>
            <FlexBox bgColor="#FFF" padding="15px 60px">
                <StyledSave size={25} onClick={handleSave}/>
                <PostTitle title={title} style={{alignSelf: 'flex-start'}} onClick = {onClick}/>
                <PostContent maxHeight="4.5em" content={content} onClick={onClick}/>
                <Spacer axis="vertical" size={10}/>
                <PostTagBox tags={tags}/>
                <Spacer axis="vertical" size={10}/>
            </FlexBox>
            <Spacer axis="vertical" size={25}/>
        </>
    );
}
