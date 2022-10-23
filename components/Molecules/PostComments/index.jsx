import { PostCommentsText } from '../../Atoms/PostCommentsText';
import { CommentsIcon } from '../../Atoms/CommentsIcon';
import styled from 'styled-components';

const PostFooterDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    `;

export function PostComments({ numComments }) {
    return (
        <PostFooterDiv>
            <CommentsIcon />
            <PostCommentsText numComments={numComments} />
        </PostFooterDiv>
    );
}