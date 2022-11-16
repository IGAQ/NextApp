import styled from 'styled-components';

const PostTitleDiv = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin: .6em 0 .6em 0;
`;

export function PostTitle({title = 'Title', ...otherProps}) {
    return (
        <PostTitleDiv {...otherProps}>
            {title}
        </PostTitleDiv>
    );
}