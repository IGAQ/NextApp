import{ BsSliders} from 'react-icons/bs';
import {useContext } from 'react';
import { UserActionsHandlersContext } from '../../../../../lib/contexts';

export function FilterIcon(){
    const {handleOpenFilter}  = useContext(UserActionsHandlersContext);
    return(
        <>
            <BsSliders size = {25} onClick = {handleOpenFilter}/>
        </>
    );
}