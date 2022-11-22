import { FlexBox } from '../../styles/globals';
import { Banner } from '../../components/Atoms/Common/Banner';
import {LoginForm} from '../../components/Organisms/Auth/LoginForm';
import {login} from '../../lib/auth';
import {useRouter} from 'next/router';

export default function Login() {
    const router = useRouter();
    const handleLogin = async ({username, password}) => {
        const result = await login(username, password);
        if (!result) {
            console.error('Login failed');
            return;
        }
        console.log('Login success');
        await router.push('/');
    };

    return (
        <FlexBox align='stretch' justify='center'>
            <Banner bannerBgColor='#A5CEFF' bannerTitle='Welcome back!' />
            <LoginForm onLogin={handleLogin} />
        </FlexBox>
    );
}