import '../styles/globals.css';
import {MobileNav} from '../components/Organisms/Common/MobileNav/MobileNav';
import {useRouter} from 'next/router';
import {Spacer} from '../components/Atoms/Common/Spacer';
import {PageLoader} from '../components/Atoms/Common/Loader';
import {WebNav} from '../components/Organisms/Common/WebNav';
import Router from 'next/router';
import React from 'react';
import {StickyDiv2} from '../styles/globals';

function MyApp({Component, pageProps}) {
    const r = useRouter();
    function showBottomNav() {
        if (
            r.pathname === '/login' ||
            r.pathname === '/signup' ||
            r.pathname === '/newQueery'
        ) {
            return false;
        } else {
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

    const [showNav, setShowNav] = React.useState(false);
    const [mobile, setMobile] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1100) {
                setMobile(true);
            } else {
                setMobile(false);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    React.useEffect(() => {
        const handlePage = () => {
            if (
                r.pathname === '/login' ||
                r.pathname === '/signup' ||
                r.pathname === '/newQueery' ||
                r.pathname === '/newStory' ||
                r.pathname === '/dashboard' ||
                r.pathname === '/'
            ) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }
        };
        handlePage();
        return () => handlePage();
    }, [r.pathname]);

    return (
        <>
            {loading ? (
                <PageLoader />
            ) : (
                <>
                    {showNav && !mobile && (
                        <>
                            <WebNav />
                            <Spacer axis="vertical" size={70} />
                            <Component {...pageProps} />
                        </>
                    )}
                    {showNav && mobile && (
                        <>
                            <Component {...pageProps} />
                            <Spacer axis="vertical" size={55} />
                            <MobileNav />
                        </>
                    )}

                    {!showNav && (
                        <>
                            <Component {...pageProps} />
                        </>
                    )}
                    {/* {<showBottomNav && MobileNav/>} */}
                </>
            )}
        </>
    );
}

export default MyApp;
