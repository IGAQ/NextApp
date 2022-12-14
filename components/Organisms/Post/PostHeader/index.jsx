import styled from 'styled-components';
import {ProfileIcon} from '../../../Atoms/Common/Icons/ProfileIcon';
import {PostInfo} from '../../../Molecules/Post/PostInfo';
import {badgesPaths} from '../../../../lib/constants/badgesPaths';


const PostHeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export function PostHeader({weight, username, date}) {
    return (
        <PostHeaderDiv>
            <ProfileIcon bgimage={badgesPaths.flags.pride}/>
            <PostInfo weight = {weight} username={username} date={date}/>
        </PostHeaderDiv>
    );
}
