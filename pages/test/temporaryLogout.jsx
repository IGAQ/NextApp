import Link from 'next/link';
import {useEffect, useState} from 'react';
import * as auth from '../../lib/auth';

export default function TemporaryLogout() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async function () {
            if (isLoading) {
                await auth.logout();
                setIsLoading(false);
            }
        })();
    }, [isLoading]);

    return (
        <div style={styles.div}>
            <h1 style={styles.headerTag}>Temporary Logout Page</h1>
            {
                isLoading ?
                    (
                        <p style={styles.loggingStatusStyles}>Logging out... 🤔</p>
                    )
                    :
                    (
                        <p style={styles.loggingStatusStyles}>Logged out 😭</p>
                    )
            }
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