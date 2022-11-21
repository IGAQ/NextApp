import {PostScore} from '../../../Molecules/Post/PostScore';
import {PostComments} from '../../../Molecules/Post/PostComments';
import styled from 'styled-components';

const PostFooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export function PostFooter({score, numComments, onClick}) {
    return (
        <PostFooterDiv>
            <PostScore score={score}/>
            <PostComments numComments={numComments} onClick = {onClick}/>
        </PostFooterDiv>
    );
}