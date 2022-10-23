import { PostScore } from '../../Molecules/PostScore';
import { PostComments } from '../../Molecules/PostComments';
import styled from 'styled-components';


const PostFooterDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export function PostFooter({ score, comment }) {
    return (
        <PostFooterDiv>
            <PostScore score={score} />
            <PostComments comment={comment} />
        </PostFooterDiv>
    );
}