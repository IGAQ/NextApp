import { FlexBox, Wrapper } from '../../styles/globals';
import { Button } from '../../components/Atoms/Button';
import { UserTextInput } from '../../components/Atoms/UserTextInput'
import { Spacer } from '../../components/Atoms/Spacer';
import { Banner } from '../../components/Atoms/Banner';

export default function Signup() {
    return (
        <Wrapper align='stretch' justify='center'>
            <Banner bannerTitle='Join our safe space!' />
            <FlexBox align='center' bgColor='white'>
                <FlexBox align='flex-start' bgColor='white'>
                    <Spacer axis='vertical' size={40} />
                    <UserTextInput type='text' label='Username' placeholder='Username' />
                    <Spacer axis='vertical' size={20} />
                    <UserTextInput type='text' label='Email' placeholder='example@address.com' />
                    <Spacer axis='vertical' size={20} />
                    <UserTextInput type='password' label='Password' placeholder='Password' />
                    <Spacer axis='vertical' size={30} />
                    <Button size='long' label='Signup' />
                </FlexBox>
            </FlexBox>
        </Wrapper>
    )
}