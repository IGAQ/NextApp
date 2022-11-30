import {FlexBox} from '../../styles/globals';
import {Banner} from '../../components/Atoms/Common/Banner';
import {LoginForm} from '../../components/Organisms/Auth/LoginForm';
import {login} from '../../lib/services/authService';
import {useRouter} from 'next/router';
import {useUser} from '../../lib/hooks/useUser';
import { PageLoader } from '../../components/Atoms/Common/Loader';
import {useState} from 'react';
import {ModalAlert} from '../../components/Organisms/Common/Modals/ModalAlert';
import {getRecaptchaToken} from '../../lib/utils';
import {UserActionsEnum} from '../../lib/constants/userInteractions';

export default function Login() {
    const [, userAuthLoaded] = useUser({redirectTo: '/', redirectIfFound: true});
    const router = useRouter();

    const [error, setError] = useState(null);

    const handleLogin = async ({username, password}) => {
        const recaptchaToken = await getRecaptchaToken(UserActionsEnum.Login, process.env.NEXT_PUBLIC_RECAPTCHA_KEY);
        const result = await login(username, password, recaptchaToken);
        if (!result) {
            setError('Invalid username or password');
            console.error('Login failed');
            return;
        }
        console.log('Login success');
        await router.push('/');
    };

    const handleCaptchaChange = (value) => {
        console.log('captcha value', value);
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
            <Banner bannerBgColor='#DFEEFF' bannerTitle='Welcome back!'/>
            <LoginForm onLogin={handleLogin}/>

        </FlexBox>
    );
}