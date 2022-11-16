import styled from 'styled-components';

const PostContentDiv = styled.div`
  font-size: .9rem;
  font-weight: 400;
  line-height: 1.5rem;
  max-height: ${props => props.maxHeight || '4.2em'};
  overflow: hidden;
  text-align: ${props => props.textAlign};
`;

export function PostContent({content = 'Content', maxHeight = 'auto', textAlign = 'left'}) {
    return (
        <PostContentDiv textAlign={textAlign} maxHeight={maxHeight}>
            {content}
        </PostContentDiv>
    );
}