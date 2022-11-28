import { createTheme, ThemeProvider } from '@mui/material/styles';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const FlexBox = styled.div`
display:flex;
${props => props.flex && `flex: ${props.flex}`};
justify-content:${props => props.justify || 'center'};
align-items:${props => props.align || 'center'};
flex-direction:${props => props.dir || 'column'};
flex: ${props => props.flex || '0'};
background: ${props => props.bgColor || 'none'};
border-radius: ${props => props.borderRadius || '0px'}; 
padding:${props => props.padding || '0'};
margin:${props => props.margin || '0'};
box-shadow:${props => props.boxShadow || 'none'};
gap:${props => props.gap};
flex-wrap:${props => props.flexWrap};
min-width:${props => props.minWidth};
max-width:${props => props.maxWidth};
border-left: ${props => props.borderLeft};
`;

export const ModalBackdrop = styled.div`
background-color: #3F3924C9;
  z-index: 9;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0%;
  left: 0%;
overflow: ${props => props.overflow || 'hidden'};
`;

export const Background = styled.div`
background-color: ${props => props.color || '#DFEEFF'};
height: ${props => props.height};
`;
