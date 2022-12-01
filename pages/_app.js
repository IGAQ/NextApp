import '../styles/globals.css';
import {MobileNav} from '../components/Organisms/Common/MobileNav/MobileNav';
import {useRouter} from 'next/router';
import {Spacer} from '../components/Atoms/Common/Spacer';
import {PageLoader} from '../components/Atoms/Common/Loader';
import {WebNav} from '../components/Organisms/Common/WebNav';
import Router from 'next/router';
import React, {useEffect, useState} from 'react';
import {StickyDiv2 } from '../styles/globals';
import {usePusher} from '../lib/hooks/usePusher';
import {PusherChannelType, PusherEventTypes} from '../lib/constants/pusherEventTypes';
import {eventService} from '../lib/services/eventService';
import {useUser} from '../lib/hooks/useUser';
import {notificationService} from '../lib/services/notificationService';

function MyApp({Component, pageProps}) {
    const r = useRouter();
    const [user, userAuthLoaded] = useUser();

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

    const isReady = usePusher(user, [{
        channelName: PusherChannelType.IGAQ_Notification,
        requiredAuth: true,
        bindingsCallback: (igaqNotificationChannel) => {
            igaqNotificationChannel.bind('pusher:subscription_succeeded', () => {
                console.log('bind was successful');
            });
            igaqNotificationChannel.bind('pusher:error', (e) => {
                console.log('pusher:error', e);
            });

            igaqNotificationChannel.bind(PusherEventTypes.UserReceivesNotification, (data) => {
                console.log(PusherEventTypes.UserReceivesNotification, data);
                notificationService.push({
                    username: data.username,
                    avatar: data.avatar,
                    message: data.composedMessage,
                    stashToken: data.stashToken,
                });
            });
        },
    }]);

    const [notificationBadge, setNotificationBadge] = useState(0);
    useEffect(() => {
        if (r.pathname === '/notifications') {
            setNotificationBadge(0);
        }
        const updateNotificationBadgeNumber = (newValue) => {
            setNotificationBadge(newValue);
        };
        eventService.on('update-notification-badge-number', updateNotificationBadgeNumber);

        const incrementNotificationBadgeNumber = () => {
            setNotificationBadge((prevState) => prevState + 1);
        };
        eventService.on('increment-notification-badge-number', incrementNotificationBadgeNumber);

        const decrementNotificationBadgeNumber = () => {
            setNotificationBadge((prevState) => prevState - 1);
        };
        eventService.on('decrement-notification-badge-number', decrementNotificationBadgeNumber);

        return () => {
            eventService.off('update-notification-badge-number', updateNotificationBadgeNumber);
            eventService.off('increment-notification-badge-number', incrementNotificationBadgeNumber);
            eventService.off('decrement-notification-badge-number', decrementNotificationBadgeNumber);
        };
    }, []);

    return (
        <>
            {loading ? (
                <PageLoader />
            ) : (
                <>
                    {showNav && !mobile && (
                        <>
                            <WebNav notificationBadge={notificationBadge} />
                            <Spacer axis="vertical" size={70} />
                            <Component {...pageProps} />
                        </>
                    )}
                    {showNav && mobile && (
                        <>
                            <Component {...pageProps} />
                            <Spacer axis="vertical" size={55} />
                            <MobileNav notificationBadge={notificationBadge} />
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
