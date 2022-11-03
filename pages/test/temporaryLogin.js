import * as auth from '../../lib/auth';
import { useUser } from '../../lib/hooks/useUser';
import {useEffect, useState} from 'react';
import Link from 'next/link';

export default function TemporaryLogin() {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const user = useUser();

    console.debug('test ', user);

    useEffect(() => {
        (async function () {
            const result = await auth.login('john', 'john');
            console.debug('result', result);
            setIsLoggedIn(!!result);
            setIsLoading(false);
        })();
    }, []);

    // auth.logout()

    const LogginStatus = () => {
        const P = (props) => <p {...props} style={styles.loggingStatusStyles} />;
        if (isLoading) {
            return <P>Loading... 🤔</P>;
        }
        if (isLoggedIn) {
            return <P>Logged in 😀</P>;
        }
        return <P>Not logged in 😭</P>;
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