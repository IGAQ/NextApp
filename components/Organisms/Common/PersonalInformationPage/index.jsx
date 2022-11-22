import { FlexBox } from '../../../../styles/globals';
import { BackArrow } from '../../../../components/Atoms/Common/Buttons/BackArrow';
import { PostTitle } from '../../../../components/Molecules/Post/PostTitle';
import { Text } from '../../../../components/Atoms/Common/Text';
import { PersonalInfoBox } from '../../../../components/Atoms/Common/PersonalInfoBox';



export function PersonalInformationPage() {
    return (
        <>
            <BackArrow />
            <PostTitle title='Personal Information' />

            <FlexBox margin='0.5em 5% 0.5em 5%' dir='row' justify='space-between'>
                <Text
                    text='Login Details'
                    size='1.2em'
                    weight='600'
                ></Text>
            </FlexBox>

            <PersonalInfoBox
                infoheading='Username'
                infodetail='IGAQuser' />

            <PersonalInfoBox
                infoheading='Email Address'
                infodetail='IGAQ@email.com' />
        </>
    )
}