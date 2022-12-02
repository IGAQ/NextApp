import {BsBookmark} from 'react-icons/bs';
import {BsBookmarkFill} from 'react-icons/bs';
import {FlexBox} from '../../../../styles/globals';
import {Spacer} from '../../../Atoms/Common/Spacer';
import {PostTitle} from '../../../Atoms/Post/PostTitle';
import {PostContent} from '../../../Atoms/Post/PostContent';
import {PostTagBox} from '../../Post/PostTagBox';
import styled from 'styled-components';
import {useState} from 'react';
import {useRouter} from 'next/router';
import { SavedResourceContext } from '../../../../lib/contexts';
import { useContext } from 'react';

export const StyledUnsaved = styled(BsBookmark)`
  position: relative;
  top: ${props => props.top || '3%'};
  left: ${props=> props.left || '50%'};
`;
export const StyledSaved = styled(BsBookmarkFill)`
position: relative;
  top: ${props => props.top || '3%'};
  left: ${props=> props.left || '50%'};
`;
export function ResourceCard({title, content, tags, onClick}) {
    const r = useRouter();
    const [isSaved, setIsSaved] = useState(false);

    const handleSave = () => {
        setIsSaved(!isSaved);
    };

    // const {handleSave, setIsSaved, isSaved} = useContext(SavedResourceContext);

    return (
        <>
            <FlexBox bgColor="#FFF" padding="25px 10%" borderRadius = "10px">
                {/* <SavedResourceContext.Provider value={{handleSave, setIsSaved, isSaved}}> */}
                {!isSaved && <StyledUnsaved size={25} onClick={handleSave}/>}
                {isSaved && <StyledSaved size={25} onClick={handleSave}/>}
                {/* </SavedResourceContext.Provider> */}
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
