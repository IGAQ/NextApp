import { useRouter } from 'next/router';
import styled from 'styled-components';

const StyledButton = styled.button`
margin: -1.5em 0 0 0; 
background-color: ${props => props.backgroundColor || '#ffffffed'};
width: ${props => props.width || '100%'};
outline: none; 
border: none;
padding: 1em 0 0 0;
font-family: 'Heebo', sans-serif;
color: #747474;
`;


export function ContentButton({onClick = () => {}}) {

    const r = useRouter();
    
    return (

        <StyledButton onClick={onClick}>READ MORE</StyledButton>

    );
}