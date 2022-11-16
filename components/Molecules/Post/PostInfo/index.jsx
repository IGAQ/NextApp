import {PostUsername} from '../../../Atoms/Post/PostUsername';
import {PostDate} from '../../../Atoms/Post/PostDate';
import styled from 'styled-components';

const PostInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export function PostInfo({username, date}) {
    return (
        <PostInfoDiv>
            <PostUsername username={username}/>
            <PostDate date={date}/>
        </PostInfoDiv>
    );
}