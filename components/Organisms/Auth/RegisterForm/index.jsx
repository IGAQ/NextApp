import {FlexBox} from '../../../../styles/globals';
import {Spacer} from '../../../Atoms/Common/Spacer';
import {UserTextInput} from '../../../Atoms/Common/Inputs/UserTextInput';
import {Button} from '../../../Atoms/Common/Buttons/Button';
import {useState} from 'react';
import {InputArea} from '../../../Molecules/Auth/FormGroup/InputArea';
import {RegisterActionsArea} from '../../../Molecules/Auth/FormGroup/RegisterActionsArea';

export function RegisterForm({onRegister}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

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
        </FlexBox>
    );
}