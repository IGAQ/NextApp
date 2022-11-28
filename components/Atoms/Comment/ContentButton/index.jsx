import styled from 'styled-components';

const StyledButton = styled.button`
  margin: -1.5em 0 0 0;
  background-color: ${props => props.backgroundColor || '#ffffffed'};
  width: fit-content;
  outline: none;
  border: none;
  align-self: flex-end;
  padding: 0.35em 10px 0 35px;
  font-family: 'Heebo', sans-serif;
  color: #747474;
  font-weight: 500;

'&:hover': {
  color: #ff758c;
}
`;


export function ContentButton({onClick, buttonText='Show More'}) {
    return (
        <StyledButton onClick={onClick}>{buttonText}</StyledButton>
    );
}