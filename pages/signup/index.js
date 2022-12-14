import {FlexBox} from '../../styles/globals';
import {Banner} from '../../components/Atoms/Common/Banner';
import {RegisterForm} from '../../components/Organisms/Auth/RegisterForm';
import {register} from '../../lib/services/authService';
import {useState} from 'react';
import {ModalAlert} from '../../components/Organisms/Common/Modals/ModalAlert';
import {useRouter} from 'next/router';
import {useUser} from '../../lib/hooks/useUser';
import {PageLoader} from '../../components/Atoms/Common/Loader';
import {getRecaptchaToken} from '../../lib/utils';
import {UserActionsEnum} from '../../lib/constants/userInteractions';
import {Spacer} from '../../components/Atoms/Common/Spacer';

export default function Signup() {
    const router = useRouter();
    const [, userAuthLoaded] = useUser({redirectTo: '/', redirectIfFound: true});

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleRegister = async ({username, password, email}) => {
        try {
            const recaptchaToken = await getRecaptchaToken(UserActionsEnum.SignUp, process.env.NEXT_PUBLIC_RECAPTCHA_KEY);
            await register(username, email, password, recaptchaToken);
            setSuccess(true);
        } catch (error) {
            const errorMessage = error.response.data.message;
            if (Array.isArray(errorMessage)) {
                setError(errorMessage[0]);
            } else {
                setError(errorMessage);
            }
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
                    onClick={() => router.push('/CustomProfile')}
                    title='Success'
                    content={'You have successfully registered!'}
                    moreText='Welcome to the community!'
                    buttonText='Explore!'
                />
            )}
            <Banner bannerTitle='Join our safe space!'/>
            <Spacer size={20} />
            <RegisterForm onRegister={handleRegister}/>
        </FlexBox>
    );
}