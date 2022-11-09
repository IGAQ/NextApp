import * as auth from '../../lib/auth';
import { useUser } from '../../lib/hooks/useUser';
import {useEffect, useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

export default function TemporaryLogin() {
    const r = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [user, userAuthLoaded] = useUser();

    useEffect(() => {
        (async function () {
            if (isLoading) {
                if (userAuthLoaded && !!(user?.userId)) {
                    setIsLoggedIn(true);
                    setIsLoading(false);
                } else {
                    if (userAuthLoaded) {
                        const result = await auth.login('ilia', 'ilia');
                        if (result) {
                            r.reload();
                        } else {
                            setIsLoading(false);
                            console.error('Login failed', result);
                        }
                    }
                }
            }
        })();
    }, [isLoading, userAuthLoaded]);

    // auth.logout()

    const LogginStatus = () => {
        const P = (props) => <p {...props} style={styles.loggingStatusStyles} />;
        if (isLoading) {
            return <P>Loading... 🤔</P>;
        }
        if (isLoggedIn) {
            return <P>Logged in <br /> Hi, { user.username } 😀</P>;
        }
        return <P>Can&apos;t log in 😭</P>;
    };

    return (
        <div style={styles.div}>
            <h1 style={styles.headerTag}>Temporary Login Page</h1>
            <LogginStatus/>
            <Link href='/'><a style={styles.backLink}>Go Back</a></Link>
        </div>
    );
}

const styles = {
    div: {
        margin: 'auto',
        marginTop: '5%',
        borderRadius: '5px',
        maxWidth: '600px',
        backgroundColor: '#1d1d1d',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    headerTag: {
        padding: '1rem',
        borderRadius: '0.5rem',
        textAlign: 'center',
        color: 'pink',
    },
    loggingStatusStyles: {
        padding: '1rem',
        fontSize: '1.5rem',
        color: 'pink',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    backLink: {
        color: 'white',
        borderRadius: '0.5rem',
        backgroundColor: 'pink',
        width: 'fit-content',
        textDecoration: 'none',
        textAlign: 'center',
        padding: '0.2rem 1.5rem',
        margin: '1rem',
        fontSize: '1.5rem',
    },
};