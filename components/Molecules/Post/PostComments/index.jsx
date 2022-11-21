import {PostCommentsText} from '../../../Atoms/Post/PostCommentsText';
import {CommentsIcon} from '../../../Atoms/Post/CommentsIcon';
import styled from 'styled-components';

const PostFooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export function PostComments({numComments, onClick}) {
    return (
        <PostFooterDiv>
            <CommentsIcon onClick = {onClick}/>
            <PostCommentsText numComments={numComments}/>
        </PostFooterDiv>
    );
}