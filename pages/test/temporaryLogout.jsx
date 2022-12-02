import Link from 'next/link';
import {useEffect, useState} from 'react';
import * as auth from '../../lib/services/authService';
import { Button } from '../../components/Atoms/Common/Buttons/Button';
import { WinkLogo } from '../../components/Atoms/Common/Logo';
import { FlexBox } from '../../styles/globals';
import { useRouter } from 'next/router';

export default function TemporaryLogout() {
    const [isLoading, setIsLoading] = useState(true);
    const r = useRouter();

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
            <h1 style={styles.headerTag}>You have been logged out!</h1>
            {
                isLoading ?
                    (
                        <>
                            <WinkLogo />
                            <FlexBox>Logging Out... </FlexBox>
                        </>
                    )
                    :
                    (
                        <>
                            <WinkLogo />
                            <FlexBox>Come Back Soon!</FlexBox>
                        </>
                    )
            }
            <Button onClick={() => r.push('/login')} label='Login'/>
        </div>
    );
}

const styles = {
    div: {
        margin: 'auto',
        marginTop: '5%',
        borderRadius: '5px',
        maxWidth: '600px',
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