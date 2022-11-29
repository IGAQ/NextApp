import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" type="image/x-icon" href="/IGAQLogo.svg" />
                <link
                    rel="preload"
                    href="../fonts/AmaticSC-Bold.ttf"
                    as="font"
                    crossOrigin=""
                    type="font/ttf"
                />
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    );
}

