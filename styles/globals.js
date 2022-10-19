import styled from 'styled-components';
import { ThemeProvider, createTheme } from '@mui/material/styles';


export const FlexBox = styled.div`
display:flex;
justify-content:${props => props.justify || 'center'};
align-items:${props => props.align || 'center'};
flex-direction:${props=>props.dir || 'column'};
flex: ${props=> props.flex || '0'};
background: ${props => props.bgColor||"none"};
border-radius: ${props => props.borderRadius||"none"}; 
padding:${props => props.padding||"none"};
margin:${props => props.margin||"none"};
`

export const Box = styled(FlexBox)`

background: ${props => props.bgColor||"#FFF8EC"};
border-radius: ${props => props.borderRadius||"25px"}; 
max-width: 75%;
max-width: ${props => props.maxWidth||"75%"};
min-width: ${props => props.minWidth||"150px"};
position: fixed;
position: ${props => props.position||"static"};
z-index: 4;
border:${props => props.border||"none"};
padding:${props => props.padding||"10px"};

//box shadow 
`;

//Reusuable Wrapper for all the pages
export const Wrapper = styled(FlexBox)`
width:100vw;
height:100vh;
`
export const ModalBackdrop = styled.div`
background-color: #3F3924C9;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  position: fixed;
overflow: ${props => props.overflow || "hidden"};
`;

// export const navTheme =  createTheme({
// components:{
//         BottomNavigationAction: {
//                 styleOverrides:{
//                         root:{
//                                 // color: '#131313',
//                                 '&. Mui-selected': {
//                                         color: '#FF758C'
//                                 }
//                         }
//                 }
//         }
        
// }
// });