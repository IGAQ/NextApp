import {FlexBox} from '../../styles/globals';
import {Banner} from '../../components/Atoms/Common/Banner';
import {LoginForm} from '../../components/Organisms/Auth/LoginForm';
import {login} from '../../lib/authService';
import {useRouter} from 'next/router';
import {useUser} from '../../lib/hooks/useUser';
import { PageLoader } from '../../components/Atoms/Common/Loader';
import {useState} from 'react';
import {ModalAlert} from '../../components/Organisms/Common/Modals/ModalAlert';

export default function Login() {
    const [, userAuthLoaded] = useUser({redirectTo: '/', redirectIfFound: true});
    const router = useRouter();

    const [error, setError] = useState(null);

    const handleLogin = async ({username, password}) => {
        const result = await login(username, password);
        if (!result) {
            setError('Invalid username or password');
            console.error('Login failed');
            return;
        }
        console.log('Login success');
        await router.push('/');
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