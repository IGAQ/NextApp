import styled from 'styled-components';
import {Icon} from '../../Common/Icons/Icon';
import {iconsPaths} from '../../../../lib/constants/iconsPaths';

const SettingsIcons = styled(Icon)`
  background-position: unset;
  margin: 0.5rem;
`;

export function PostSettingsIcons({size=1, icon}) {
    return (
        <SettingsIcons icon={icon} size={size}/>
    );
}