import { PostReaction } from '../../Atoms/PostReaction';
import styled from 'styled-components';

const PostFooterDiv = styled.div`
    display: flex; 
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export function PostScore({ score }) {
    return (
        <PostFooterDiv>
            <PostReaction vote="Like" onClick = {() => {score + 1;}} />
            {score}
            <PostReaction onClick = {() => {score - 1;}} />
        </PostFooterDiv>
    );
}
