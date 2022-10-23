import styled from 'styled-components';

const PostTitleDiv = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    margin-bottom: .6em;
    margin-top: .6em;
    `;

export function PostTitle ({title = 'Title'}) {
    return (
        <PostTitleDiv>
            {title}
        </PostTitleDiv>
    );
}