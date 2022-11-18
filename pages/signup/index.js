import {Wrapper} from '../../styles/globals';
import {Banner} from '../../components/Atoms/Common/Banner';
import {RegisterForm} from '../../components/Organisms/Auth/RegisterForm';
import {register} from '../../lib/auth';

export default function Signup() {
    const handleRegister = async ({username, password, email}) => {
        const result = await register(username, password, email);
        console.log(result);
    };

    return (
        <Wrapper align='stretch' justify='center'>
            <Banner bannerTitle='Join our safe space!'/>
            <RegisterForm onRegister={handleRegister}/>
        </Wrapper>
    );
}