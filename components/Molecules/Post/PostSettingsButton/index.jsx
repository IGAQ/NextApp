import {PostSettingsIcons} from '../../../Atoms/Post/PostSettingsIcons';
import {PostSettingsText} from '../../../Atoms/Post/PostSettingsText';
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

export function PostSettingsButton({setType, icon, onOpen, ...otherPropsForDiv}) {
    return (
        <SettingsButtonDiv onClick={onOpen} {...otherPropsForDiv}>
            <PostSettingsIcons icon={icon}/>
            <PostSettingsText setType={setType}/>
        </SettingsButtonDiv>
    );
}