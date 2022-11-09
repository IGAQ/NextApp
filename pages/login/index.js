import { FlexBox, Wrapper } from '../../styles/globals';
import { Button } from '../../components/Atoms/Button';
import { UserTextInput } from '../../components/Atoms/UserTextInput'
import { Spacer } from '../../components/Atoms/Spacer';
import { Banner } from '../../components/Atoms/Banner';
import { Text } from '../../components/Atoms/Text';

export default function Login() {
    return (
        <Wrapper align='stretch' justify='center'>
            <Banner bannerBgColor='#A5CEFF' bannerTitle='Welcome back!' />
            <FlexBox align='center' bgColor='white'>
                <FlexBox align='flex-start' bgColor='white'>
                    <Spacer axis='vertical' size={40} />
                    <UserTextInput type='text' label='Username' placeholder='Username' />
                    <Spacer axis='vertical' size={20} />
                    <UserTextInput type='password' label='Password' placeholder='Password' />
                    <Text text='Forgot Password?' size='0.8em' padding='0em 0em 0em 14rem'></Text>
                    <Spacer axis='vertical' size={30} />
                    <Button size='long' label='Login' />
                </FlexBox>
            </FlexBox>
        </Wrapper>
    )
}