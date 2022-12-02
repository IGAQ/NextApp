import{ BsSliders} from 'react-icons/bs';
import {useContext } from 'react';
import { UserActionsHandlersContext } from '../../../../../lib/contexts';
import styled from 'styled-components';

const Hover = styled.div`
    cursor: pointer;
    `;

export function FilterIcon(){
    const {handleOpenFilter}  = useContext(UserActionsHandlersContext);
    return(
        <Hover>
            <BsSliders size = {25} onClick = {handleOpenFilter}/>
        </Hover>
    );
}