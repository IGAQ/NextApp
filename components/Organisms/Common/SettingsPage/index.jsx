import { FlexBox } from '../../../../styles/globals';
import { BackArrow } from '../../../../components/Atoms/Common/Buttons/BackArrow';
import { PostTitle } from '../../../../components/Molecules/Post/PostTitle';
import { Text } from '../../../../components/Atoms/Common/Text';
import { SettingOption } from '../../../../components/Atoms/Common/SettingOption';
import { SettingToggle } from '../../../../components/Atoms/Common/SettingToggle';



export function SettingsPage() {
    return (
        <>
            <BackArrow />
            <PostTitle title='Settings' />
            <FlexBox margin='0.5em 5% 0.5em 5%' dir='row' justify='space-between'>
                <Text
                    text='Account'
                    size='1.2em'
                    weight='600'
                ></Text>
            </FlexBox>

            <SettingOption settingspush='/personalInformation' text='Personal Information' />
            <SettingOption settingspush='/changePassword' text='Change Password' />
            <SettingOption settingspush='/' text='Log Out' settingsWeight='600' settingsTextColor='#ff758c' />

            <FlexBox margin='0.5em 5% 0.5em 5%' dir='row' justify='space-between'>
                <Text
                    text='Notifications'
                    size='1.2em'
                    weight='600'
                ></Text>
            </FlexBox>
            <SettingToggle text='Enable push notifications' />

            <FlexBox margin='0.5em 5% 0.5em 5%' dir='row' justify='space-between'>
                <Text
                    text='Accessibility'
                    size='1.2em'
                    weight='600'
                ></Text>
            </FlexBox>

            <SettingToggle text='Dark Mode' />

            <FlexBox margin='0.5em 5% 0.5em 5%' dir='row' justify='space-between'>

                <Text
                    text='Other'
                    size='1.2em'
                    weight='600'
                ></Text>
            </FlexBox>

            <SettingOption settingspush='/help' text='Help Centre' />
        </>
    )
}