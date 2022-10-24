import { PostReaction } from '../../Atoms/PostReaction';
import styled from 'styled-components';

const PostFooterDiv = styled.div`
    display: flex; 
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 10%;
`;

export function PostScore({ score = 0 }) {
    return (
        <PostFooterDiv>
            <PostReaction vote="Like" onClick = {() => {score + 1;}} />
            {score}
            <PostReaction onClick = {() => {score - 1;}} />
        </PostFooterDiv>
    );
}
