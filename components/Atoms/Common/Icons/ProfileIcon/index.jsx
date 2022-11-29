import {Avatar} from '@mui/material';
import styled from 'styled-components';
import {badgesPaths} from '../../../../../lib/constants/badgesPaths';

const AvatarDiv = styled.div`
  border-radius: 100%;
  padding: 5px;
  background-image: url(${props => props.bgimage || badgesPaths.flags.pride});
  width: fit-content;
  display: flex;
  flex: 0 0 auto;
  margin-right: ${props => props.marginRight || '.5rem'};
`;

export function ProfileIcon({
    AvaPic = badgesPaths.avatars.default,
}) {
    return (
        <AvatarDiv>
            <Avatar src={AvaPic}/>
        </AvatarDiv>
    );
}