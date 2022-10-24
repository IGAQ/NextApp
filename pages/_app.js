import '../styles/globals.css';
import { MobileNav } from '../components/Organisms/MobileNav/MobileNav';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
    const r = useRouter();
    function showBottomNav(){
        if (router.pathname === '/login' || router.pathname === '/newQueery'){
            return false; 
        }
        else{
            return true;
        }
    } 

    return ( 
        <>
            <Component {...pageProps} />
            {/* {<showBottomNav && MobileNav/>} */}
            <MobileNav/>
        </>
    );
}

export default MyApp;
