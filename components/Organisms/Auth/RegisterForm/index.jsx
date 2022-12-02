import {FlexBox} from '../../../../styles/globals';
import {useState} from 'react';
import {InputArea} from '../../../Molecules/Auth/FormGroup/InputArea';
import {RegisterActionsArea} from '../../../Molecules/Auth/FormGroup/RegisterActionsArea';
import { useRouter } from 'next/router';

export function RegisterForm({onRegister}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const r = useRouter();

    return (
        <FlexBox align='center' bgColor='white' padding="0px 0px 50px 0px">
            <FlexBox align='flex-start' bgColor='white'>
                <InputArea type={'text'} label={'Username'} placeholder={'Username'} topSpacerSize={40}
                    onChangeValue={(v) => setUsername(v)}/>
                <InputArea type={'text'} label={'Email'} placeholder={'Email'} topSpacerSize={20}
                    onChangeValue={(v) => setEmail(v)}/>
                <InputArea type={'password'} label={'Password'} placeholder={'Password'} topSpacerSize={20}
                    onChangeValue={(v) => setPassword(v)}/>
                <RegisterActionsArea onSubmit={() => onRegister({username, password, email})}/>
            </FlexBox>
            <FlexBox onClick={() => r.push('/login')} align='flex-start' bgColor='white' margin='10px'>
                Login instead?
            </FlexBox>
        </FlexBox>
    );
}