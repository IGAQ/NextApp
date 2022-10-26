import { PostSettingsButton } from '../../Molecules/PostSettingsButton';
import styled from 'styled-components';

const SettingsModalDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    width: 6em;
    height: 3em;
    `;

export function PostSettingsModal() {
    return (
        <SettingsModalDiv>
            <PostSettingsButton />
            <PostSettingsButton setType="Save" icon="SaveIcon.svg" on />
        </SettingsModalDiv>
    );
}