import styled from 'styled-components';

export const StyledCircle = styled.div`
border-radius: 100%;
 background-color: #393939;
 width: 3rem;
 height: 3rem;
`;

export function Badge(){
    return(
        <StyledCircle/>
    );
}
       