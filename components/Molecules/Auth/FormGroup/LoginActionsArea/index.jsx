import {Text} from '../../../../Atoms/Common/Text';
import {Spacer} from '../../../../Atoms/Common/Spacer';
import {Button} from '../../../../Atoms/Common/Buttons/Button';

export function LoginActionsArea({ onLogin, onForgotPassword }) {
    return (
        <>
            <Text text='Forgot Password?' size='0.8em' padding='0em 0em 0em 14rem' onClick={onForgotPassword}></Text>
            <Spacer axis='vertical' size={30}/>
            <Button size='long' label='Login' onClick={onLogin}/>
        </>
    );
}