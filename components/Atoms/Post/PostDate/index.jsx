import styled from 'styled-components';
import timeAgo from '../../../../utils/timeAgo';

const PostDateDiv = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: #000;
`;

    
export function PostDate({date}) {
    const dt = timeAgo(date);
    return (
        <PostDateDiv>
            {dt}
        </PostDateDiv>
    );
}