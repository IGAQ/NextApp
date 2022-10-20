import '../styles/globals.css';
import '@fontsource/heebo';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
    return ( 
    // <ThemeProvider theme = {theme}>
        <Component {...pageProps} />
    // <CssBaseline />
    // </ThemeProvider>
    );
}

export default MyApp;
