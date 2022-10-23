import { PostSettingsButton } from '../../Molecules/PostSettingsButton';
import styled from 'styled-components';

const SettingsModalDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: #FFFFFF;
    postion: absolute;
    top: 0;
    right: 0;
    `;

export function PostSettingsModal() {
    return (
        <SettingsModalDiv>
            <PostSettingsButton />
            <PostSettingsButton setType="Save" icon="SaveIcon.svg" />
        </SettingsModalDiv>
    );
}