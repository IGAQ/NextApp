import styled from 'styled-components';

const PostContentDiv = styled.div`
    font-size: .9rem;
    font-weight: 400;
    line-height: 1.5rem;
    max-height: 4.2em;
    overflow: hidden;
    `;

export function PostContent ({content = 'Content'}) {
    return (
        <PostContentDiv>
            {content}
        </PostContentDiv>
    );
}
