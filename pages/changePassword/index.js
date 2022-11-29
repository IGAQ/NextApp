import { FlexBox } from '../../styles/globals';
import { Button } from '../../components/Atoms/Common/Buttons/Button';
import { UserTextInput } from '../../components/Atoms/Common/Inputs/UserTextInput';
import { Spacer } from '../../components/Atoms/Common/Spacer';
import { BackArrow } from '../../components/Atoms/Common/Buttons/BackArrow';
import { PostTitle } from '../../components/Molecules/Post/PostTitle';
import {ModalAlert} from '../../components/Organisms/Common/Modals/ModalAlert';
import {useState} from 'react';
import * as authService from '../../lib/authService';
import {useRouter} from 'next/router';
import {useUser} from '../../lib/hooks/useUser';
import {PageLoader} from '../../components/Atoms/Common/Loader';

export default function ChangePassword() {
    const router = useRouter();
    const [, userAuthLoaded] = useUser({redirectTo: '/login'});

    const [previousPassword, setPreviousPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirm, setNewPasswordConfirm] = useState('');

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (newPassword !== newPasswordConfirm) {
            setError('Passwords do not match');
            return;
        }
        try {
            await authService.changePassword({previousPassword, newPassword});
            setSuccess(true);
        } catch (error) {
            setError(error);
        }
    };

    return !userAuthLoaded ? (
        <PageLoader/>
    ) : (
        <FlexBox align='stretch' justify='center'>
            {error && (
                <ModalAlert
                    onClick={() => setError(null)}
                    title='Error'
                    content={error}
                    moreText='Please try again.'
                />
            )}
            {success && (
                <ModalAlert
                    onClick={async () => await router.push('/')}
                    title='Success'
                    content={'Password changed!'}
                    enableMoreText={false}
                    buttonText={'Let\'s go'}
                />
            )}
            <BackArrow />
            <FlexBox align='center' bgColor='white'>
                <PostTitle title='Change Password' />
                <FlexBox align='flex-start' bgColor='white'>
                    <Spacer axis='vertical' size={40} />
                    <UserTextInput type='text' label='Current Password' value={previousPassword} onChange={(e) => setPreviousPassword(e.target.value)} placeholder='Password' />
                    <Spacer axis='vertical' size={20} />
                    <UserTextInput type='password' label='New Password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder='At least 8 characters' />
                    <Spacer axis='vertical' size={20} />
                    <UserTextInput type='password' label='Confirm New Password' value={newPasswordConfirm} onChange={(e) => setNewPasswordConfirm(e.target.value)} placeholder='At least 8 characters' />
                    <Spacer axis='vertical' size={30} />
                    <Button size='long' color='white' backgroundColor='#E02947' label='Change Password' onClick={handleResetPassword} />
                </FlexBox>
            </FlexBox>
        </FlexBox>
    );
}