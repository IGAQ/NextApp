import {FlexBox} from '../../../../styles/globals';
import {useState} from 'react';
import {InputArea} from '../../../Molecules/Auth/FormGroup/InputArea';
import {LoginActionsArea} from '../../../Molecules/Auth/FormGroup/LoginActionsArea';
import { useRouter } from 'next/router';

// type onSubmitType = ({username: string, password: string}) => void;

export function LoginForm({onLogin}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const r = useRouter();

    const handleForgotPassword = async () => {
        console.log('Forgot password');
    };

    return (
        <FlexBox align='center' bgColor='white' padding="0px 0px 50px 0px">
            <FlexBox align='flex-start' bgColor='white'>
                <InputArea type='text' label='Username' topSpacerSize={40}
                    onChangeValue={(username) => setUsername(username)} placeholder='Username'/>
                <InputArea type='password' label='Password' topSpacerSize={20}
                    onChangeValue={(password) => setPassword(password)} placeholder='Password'/>
                <LoginActionsArea onLogin={() => onLogin({username, password})} onForgotPassword={handleForgotPassword}/>
            </FlexBox>
            <FlexBox onClick={()=> r.push('/signup')} align='flex-start' bgColor='white' margin='10px'>
                Sign up instead?
            </FlexBox>
        </FlexBox>
    );
}