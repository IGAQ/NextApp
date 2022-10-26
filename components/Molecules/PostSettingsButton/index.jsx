import { PostSettingsIcons } from '../../Atoms/PostSettingsIcons';
import { PostSettingsText } from '../../Atoms/PostSettingsText';
import styled from 'styled-components';

const SettingsButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    // border: .2px solid #D3D3D3;
    width: 100%;
    box-shadow: 0px 0px 5px #D9D9D9;
    border-radius: 5px;
    `;

export function PostSettingsButton({ setType, icon, ...otherPropsForDiv }) {
    return (
        <SettingsButtonDiv {...otherPropsForDiv}>
            <PostSettingsIcons icon={icon} />
            <PostSettingsText setType={setType} />
        </SettingsButtonDiv>
    );
}