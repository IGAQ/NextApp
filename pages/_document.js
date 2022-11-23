import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    rel="preload"
                    href="../fonts/AmaticSC-Bold.ttf"
                    as="font"
                    crossOrigin=""
                    type="font/ttf"
                />
            </Head>
            <body>
                <Main />
                <NextScript/>
            </body>
        </Html>
    );
}

