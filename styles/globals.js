import styled from 'styled-components';
import { ThemeProvider, createTheme } from '@mui/material/styles';


export const FlexBox = styled.div`
display:flex;
justify-content:${props => props.justify || 'center'};
align-items:${props => props.align || 'center'};
flex-direction:${props=>props.dir || 'column'};
flex: ${props=> props.flex || '0'}
`

//Reusuable Wrapper for all the pages
export const Wrapper = styled(FlexBox)`
width:100vw;
height:100vh;
`

export const navTheme =  createTheme({
components:{
        BottomNavigationAction: {
                styleOverrides:{
                        root:{
                                // color: '#131313',
                                '&. Mui-selected': {
                                        color: '#FF758C'
                                }
                        }
                }
        }
        
}
});