import styled from 'styled-components';
import {Icon} from '../../Icon';

const SettingsIcons = styled(Icon)`
  background-position: unset;
  margin: 0.5rem;
`;

export function PostSettingsIcons({size=1}) {
    return (
        <SettingsIcons icon={'/ReportIcon.svg'} size={size}/>
    );
}