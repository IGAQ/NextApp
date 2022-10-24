import { PostSettingsIcons } from '../../Atoms/PostSettingsIcons';
import { PostSettingsText } from '../../Atoms/PostSettingsText';
import styled from 'styled-components';

const SettingsButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid black;
    width: 100%;
    `;

export function PostSettingsButton({ setType, icon }) {
    return (
        <SettingsButtonDiv>
            <PostSettingsIcons icon={icon} />
            <PostSettingsText setType={setType} />
        </SettingsButtonDiv>
    );
}