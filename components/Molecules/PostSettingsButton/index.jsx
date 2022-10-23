import { PostSettingsIcons } from '../../Atoms/PostSettingsIcons';
import { PostSettingsText } from '../../Atoms/PostSettingsText';
import styled from 'styled-components';

const SettingsButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    `;

export function PostSettingsButton({ setType, icon }) {
    return (
        <SettingsButtonDiv>
            <PostSettingsIcons icon={icon} />
            <PostSettingsText setType={setType} />
        </SettingsButtonDiv>
    );
}