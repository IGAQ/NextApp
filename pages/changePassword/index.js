import { FlexBox } from '../../styles/globals';
import { Button } from '../../components/Atoms/Common/Buttons/Button';
import { UserTextInput } from '../../components/Atoms/Common/Inputs/UserTextInput';
import { Spacer } from '../../components/Atoms/Common/Spacer';
import { BackArrow } from '../../components/Atoms/Common/Buttons/BackArrow';
import { PostTitle } from '../../components/Molecules/Post/PostTitle';

export default function ChangePassword() {
    return (
        <FlexBox align='stretch' justify='center'>
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
        </FlexBox>
    );
}