import { Text } from '../Text';
import { FlexBox } from '/styles/globals.js';
import styled from 'styled-components';
import { StyledSwitch } from '../Switch';


const SettingsText = styled(Text)`
color: #121212;
`;
const SettingsCont = styled.div`
background-color: white;
color: #121212;
padding: 0.5em 5% 0.5em 5%;
max-width: 50em;
min-width: 82%;
`;

export function SettingToggle({
    text = 'Personal Information',
}) {
    return (
        <SettingsCont style={{alignSelf: 'center'}}>
            <FlexBox margin='0.5em 5% 0.5em 5%' dir='row' justify='space-between'>
                <SettingsText text={text} size='1em' />
                <StyledSwitch />
            </FlexBox>
        </SettingsCont>
    );
}