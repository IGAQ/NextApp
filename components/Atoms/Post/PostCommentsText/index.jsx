import styled from 'styled-components';

const PostCommentsDiv = styled.div`
  font-size: .8rem;
  font-weight: 400;
  color: #000;
`;

export function PostCommentsText({numComments = 0}) {
    return (
        <PostCommentsDiv>
            {numComments}
            &nbsp;Comments
        </PostCommentsDiv>
    );
}