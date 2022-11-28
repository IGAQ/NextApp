import styled from 'styled-components';

export const VerticalLine = styled.span`
  ${props => props.isLeft ? `border-left: ${props.borderLine ?? "1px solid black"}`: `border-right: ${props.borderLine ?? "1px solid black"}`};
  padding-right: ${props => props.paddingRight ?? "24"}px;
  margin-right: ${props => props.marginRight ?? "0"};
`;