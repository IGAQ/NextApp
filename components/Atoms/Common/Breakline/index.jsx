import styled from 'styled-components';

export const Breakline = styled.hr`
  border-top: 0.5px solid #eecccc;
  border-bottom: none;
  width: ${props => props.width || '100%'};
  margin: ${props => props.margin || '0 0 15px 0'};
`;