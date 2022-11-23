import styled from 'styled-components';
import { useState } from 'react';
import {ContentButton} from '../../../Atoms/Post/ContentButton';

const PostContentDiv = styled.div`
  font-size: .9rem;
  font-weight: 400;
  line-height: 1.5rem;
  max-height: ${props => props.maxHeight || '4.2em'};
  overflow: hidden;
  text-align: ${props => props.textAlign};
`;



export function PostContent({content = 'Content', maxHeight = '4.5em', textAlign = 'left'}) {

    const [overflow, setOverflow] = useState(false);
    const [showContent, setShowContent] = useState(false);
    var buttonText = 'Show More';
    if (showContent === true) {
        maxHeight = 'auto';
        buttonText = 'Show Less';
    }


    return (<>
        <PostContentDiv textAlign={textAlign} maxHeight={maxHeight} ref={v => v && setOverflow(v.offsetHeight < v.scrollHeight)}>
            {content}
        </PostContentDiv>
        {overflow && <ContentButton buttonText='Show More' onClick={() => setShowContent(!showContent)}>{showContent ? 'Show less' : 'Show more'}</ContentButton>}
    </>
    );
}

export function SinglePostContent({content = 'Content', textAlign = 'left', maxHeight='100%'}) {
    return (
        <PostContentDiv textAlign={textAlign} maxHeight={maxHeight}>
            {content}
        </PostContentDiv>
    );
}