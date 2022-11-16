import { FlexBox, Wrapper } from '../../styles/globals';
import { Button } from '../../components/Atoms/Button';
import { UserTextInput } from '../../components/Atoms/UserTextInput'
import { Spacer } from '../../components/Atoms/Spacer';
import { BackArrow } from '../../components/Atoms/BackArrow';
import { PostTitle } from '../../components/Molecules/PostTitle';

export default function ChangePassword() {
    return (
        <Wrapper align='stretch' justify='center'>
            <BackArrow />
            <FlexBox align='center' bgColor='white'>
                <PostTitle title='Change Password' />
                <FlexBox align='flex-start' bgColor='white'>
                    <Spacer axis='vertical' size={40} />
                    <UserTextInput type='text' label='Current Password' placeholder='Password' />
                    <Spacer axis='vertical' size={20} />
                    <UserTextInput type='password' label='New Password' placeholder='At least 8 characters' />
                    <Spacer axis='vertical' size={20} />
                    <UserTextInput type='password' label='Confirm New Password' placeholder='At least 8 characters' />
                    <Spacer axis='vertical' size={30} />
                    <Button size='long' color='white' backgroundColor='#E02947' label='Change Password' />
                </FlexBox>
            </FlexBox>
        </Wrapper>
    )
}