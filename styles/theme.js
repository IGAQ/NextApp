import { createTheme } from "@mui/material/styles";

const theme = createTheme({
        
        typography:{
                fontFamily: [
                        'Heebo',
                        'sans-serif',
                ].join(','),

                // h1:{
                //         fontSize: '2.5rem',
                //         // custom breakpoint 
                //         //'@media (min-width:600px)': {
                //         //         fontSize: '3rem',
                //         // }
                // }
        },

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


});//end of theme 

// theme = responsiveFontSizes(theme);
export default theme;