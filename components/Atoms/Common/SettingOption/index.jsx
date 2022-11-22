import { Text } from "../Text"
import { FlexBox } from '/styles/globals.js';
import styled from "styled-components";
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';
import { useRouter } from 'next/router';

const RightArrow = styled(ArrowRightAltSharpIcon)`
color: #121212;
`

const SettingsText = styled(Text)`
color: ${props => props.settingsTextColor || '#121212'};
font-weight: ${props => props.settingsWeight || '400'}
`
const SettingsCont = styled.div`
background-color: white;
color: black;
&:hover {
    background-color: #F5F5F5;
}
padding: 0.5em 5% 0.5em 5%;
`

export function SettingOption({
    text = 'Personal Information',
    settingsTextColor = '#121212',
    settingsWeight = '400',
    settingspush = '/',
}) {

    const r = useRouter();

    return (
        <SettingsCont onClick={() => r.push(settingspush)}>
            <FlexBox margin='0.5em 5% 0.5em 5%' dir='row' justify='space-between'>
                <SettingsText settingsWeight={settingsWeight} settingsTextColor={settingsTextColor} text={text} size='1em' />
                <RightArrow />
            </FlexBox>
        </SettingsCont>
    )
}