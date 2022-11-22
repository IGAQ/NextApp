import { FlexBox } from '../../../../styles/globals';
import { Text } from '../../../../components/Atoms/Common/Text';
import styled from "styled-components";

const PersonalInfoHeading = styled(Text)`
color: ${props => props.settingsTextColor || '#121212'};
font-weight: ${props => props.settingsWeight || '500'}
`

const PersonalInfoDetails = styled(Text)`
color: ${props => props.settingsTextColor || '#121212'};
font-weight: ${props => props.settingsWeight || '400'}
`

const PersonalInfoCont = styled.div`
background-color: white;
color: black;
&:hover {
    background-color: #F5F5F5;
}
padding: 0.5em 5% 0.5em 5%;
`

export function PersonalInfoBox({
    infoheading = 'Username',
    infodetail = 'igaquser'
}) {

    return (
        <PersonalInfoCont>
            <FlexBox margin='0.5em 5% 0.5em 5%' dir='row' justify='space-between'>
                <PersonalInfoHeading
                    text={infoheading}
                    size='1em'
                    weight='500' />
            </FlexBox>
            <FlexBox margin='0.5em 5% 0.5em 5%' dir='row' justify='space-between'>
                <PersonalInfoDetails
                    text={infodetail}
                    size='1em' />
            </FlexBox>
        </PersonalInfoCont>
    )
}