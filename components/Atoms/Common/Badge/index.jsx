import styled from 'styled-components';

export const StyledCircle = styled.div`
  border-radius: 100%;
  background-color: #393939;
  width: 3rem;
  height: 3rem;
`;

export const ProfileBadge = styled.div`
  height: 5.5em;
  width: 5.5em;
  background-color: ${props => props.color || '#FFB6C3'} ;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;


export function Badge() {
    return (
        <StyledCircle/>
    );
}