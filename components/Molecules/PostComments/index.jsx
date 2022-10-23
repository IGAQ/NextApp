import { PostCommentsText } from '../../Atoms/PostCommentsText';
import { CommentsIcon } from '../../Atoms/CommentsIcon';
import styled from 'styled-components';

const PostFooterDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    `;

export function PostComments({ comment }) {
    return (
        <PostFooterDiv>
            <CommentsIcon />
            <PostCommentsText comment={comment} />
        </PostFooterDiv>
    );
}