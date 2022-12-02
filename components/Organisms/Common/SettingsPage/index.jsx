import { FlexBox } from '../../../../styles/globals';
import { BackArrow } from '../../../../components/Atoms/Common/Buttons/BackArrow';
import { PostTitle } from '../../../../components/Molecules/Post/PostTitle';
import { Text } from '../../../../components/Atoms/Common/Text';
import { SettingOption } from '../../../../components/Atoms/Common/SettingOption';
import { SettingToggle } from '../../../../components/Atoms/Common/SettingToggle';
import { Spacer } from '../../../Atoms/Common/Spacer';



export function SettingsPage() {
    return (
        <>
            <BackArrow />
            <PostTitle title='Settings' />
            
            <FlexBox bgColor = 'white' align = 'stretch' >
                <FlexBox  align = 'flex-start' bgColor = '#DFEEFF'>
                    <FlexBox padding = '0 5%'dir='row' justify='space-between' maxWidth = '50em' bgColor = '#DFEEFF'>
                        <Text
                            text='Account'
                            size='1.2em'
                            weight='600'
                        ></Text>
                    </FlexBox>
                </FlexBox>
                    
                <SettingOption settingspush='/personalInformation' text='Personal Information' />
                <SettingOption settingspush='/changePassword' text='Change Password' />
                <SettingOption settingspush='/' text='Log Out' settingsWeight='600' settingsTextColor='#ff758c' />
            </FlexBox>
            
            <Spacer size = {35}/>
            <FlexBox maxWidth = '50em' margin='0.5em 5% 0.5em 5%' dir='row' justify='space-between'>
                <Text
                    text='Notifications'
                    size='1.2em'
                    weight='600'
                ></Text>
            </FlexBox>
            <FlexBox bgColor = 'white' align = 'stretch'>
                <SettingToggle text='Enable push notifications' />
            </FlexBox>
            <Spacer size = {35}/>
            <FlexBox margin='0.5em 5% 0.5em 5%' dir='row' justify='space-between'>
                <Text
                    text='Accessibility'
                    size='1.2em'
                    weight='600'
                ></Text>
            </FlexBox>
            <FlexBox bgColor = 'white' align = 'stretch'>
                <SettingToggle text='Dark Mode' />
            </FlexBox>
            <Spacer size = {35}/>
            <FlexBox align = 'stretch' margin='0.5em 5% 0.5em 5%' dir='row' justify='space-between'>
                <Text
                    text='Other'
                    size='1.2em'
                    weight='600'
                ></Text>
            </FlexBox>
            <FlexBox bgColor = 'white'>
                <SettingOption settingspush='/help' text='Help Centre' />
            </FlexBox>
            <Spacer size = {100}/>

        </>
    );
}