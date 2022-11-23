import {IoClose} from 'react-icons/io5';
import styled from 'styled-components';

const CloseCont = styled.div`
z-index: 20;
margin: 0 25px 0;
`;

export function CloseButton(props){
    return(
        <CloseCont> 
            <IoClose size = {35} onClick = {props.onClick} />
        </CloseCont>
    );
}