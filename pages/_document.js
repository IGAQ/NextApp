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
                {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                <script src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_KEY}`}></script>
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    );
}

