import {Spacer} from '../../../../Atoms/Common/Spacer';
import {Button} from '../../../../Atoms/Common/Buttons/Button';

export function RegisterActionsArea({onSubmit}) {
    return (
        <>
            <Spacer axis='vertical' size={30}/>
            <Button size='long' label='Signup' onClick={onSubmit}/>
        </>
    );
}