import styled from 'styled-components';
import {ProfileIcon} from '../../Atoms/ProfileIcon';
import { PostInfo } from '../../Molecules/PostInfo';


const PostHeaderDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;

export function PostHeader({ username, date }) {

    return (
        <PostHeaderDiv>
            <ProfileIcon bgimage='PrideFlag.svg' />
            <PostInfo username={username}date={date} />            
        </PostHeaderDiv>
    );
}
