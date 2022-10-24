import styled from 'styled-components';
import {ProfileIcon} from '../../Atoms/ProfileIcon';
import { PostInfo } from '../../Molecules/PostInfo';
import { PostSetting } from '../../Atoms/PostSetting';
import { PostSettingsModal } from '../PostSettingsModal';
const PostHeaderDiv = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: center;
`;

export function PostHeader({ username, date }) {
    return (
        <PostHeaderDiv>
            <ProfileIcon bgimage='PrideFlag.svg' />
            <PostInfo username={username}date={date} />
            <PostSetting onClick={() => {
                <PostSettingsModal />;
            }} />
        </PostHeaderDiv>
    );
}
