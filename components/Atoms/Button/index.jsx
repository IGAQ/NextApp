
import styled from 'styled-components';

const StyledButton = styled.button`
border: none;
outline: none;
border-radius: 0.5em;
background-color: ${props => props.backgroundColor || '#FF758C'};
color: ${props => props.color || '#FFF'};
padding: ${props => props.padding || '0.75em 1.25em'};
width: ${props =>props.size == 'short' ? '3rem' : props.size == 'long' ? '20em': '3em'};
min-width: 2rem
font-family: 'Heebo', sans-serif;
font-weight: 600;
`;

export const Button = ({ length, bgColor, padding, color, label, ...props }) => {
    return (
        <StyledButton

            {...props}
        >
            {label}
        </StyledButton>
    );
};