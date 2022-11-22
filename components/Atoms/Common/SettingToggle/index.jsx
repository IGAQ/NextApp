import { Text } from "../Text"
import { FlexBox } from '/styles/globals.js';
import styled from "styled-components";
import { StyledSwitch } from "../Switch";


const SettingsText = styled(Text)`
color: #121212;
`
const SettingsCont = styled.div`
background-color: white;
color: #121212;
padding: 0.5em 5% 0.5em 5%;
`

export function SettingToggle({
    text = 'Personal Information',
}) {
    return (
        <SettingsCont>
            <FlexBox margin='0.5em 5% 0.5em 5%' dir='row' justify='space-between'>
                <SettingsText text={text} size='1em' />
                <StyledSwitch />
            </FlexBox>
        </SettingsCont>
    )
}