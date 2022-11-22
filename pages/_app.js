import '../styles/globals.css';
import { MobileNav } from '../components/Organisms/Common/MobileNav/MobileNav';
import { useRouter } from 'next/router';
import { Spacer } from '../components/Atoms/Common/Spacer';
import { PageLoader } from '../components/Atoms/Common/Loader';
import Router from 'next/router';
import React from 'react';

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

    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        const start = () => {
            console.log('start');
            setLoading(true);
        };
        const end = () => {
            console.log('finished');
            setLoading(false);
        };
        Router.events.on('routeChangeStart', start);
        Router.events.on('routeChangeComplete', end);
        Router.events.on('routeChangeError', end);
        return () => {
            Router.events.off('routeChangeStart', start);
            Router.events.off('routeChangeComplete', end);
            Router.events.off('routeChangeError', end);
        };
    }, []);

    return ( 
        <>
            {loading ? (
                <PageLoader />
            ) : (
                <>
                    <Component {...pageProps} />
                    {/* {<showBottomNav && MobileNav/>} */}
                    <Spacer axis="vertical" size={55}/>
                    <MobileNav/>
                </>
            )}
        </>
    );
}

export default MyApp;
