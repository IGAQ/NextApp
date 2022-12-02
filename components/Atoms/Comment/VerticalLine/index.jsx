import styled from 'styled-components';

export const VerticalLine = styled.span`
  ${props => props.isLeft ? `border-left: ${props.borderLine ?? '1px solid #89B7EC9C'}`: `border-right: ${props.borderLine ?? '1px solid #89B7EC9C'}`};
  padding-right: ${props => props.paddingRight ?? '24'}px; 
  margin-right: ${props => props.marginRight ?? '0'};
`;