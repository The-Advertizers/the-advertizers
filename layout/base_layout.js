import Head from "next/head";

export default function BaseLayout({children}) {
    return (
        <>
            <Head>
                <title>The Advertizers</title>
                <link rel="icon" href={'/img/mini.png'} type="image/png"/>

                {/* PRELOAD FONTS */}

                <link
                    rel="preload"
                    href={"/fonts/Lemon-Light.otf"}
                    as="font"
                    crossOrigin=""
                />

                <link
                    rel="preload"
                    href={"/fonts/Lemon.otf"}
                    as="font"
                    crossOrigin=""
                />

                <link
                    rel="preload"
                    href={"/fonts/Lemon-Mid.otf"}
                    as="font"
                    crossOrigin=""
                />

                <link
                    rel="preload"
                    href={"/fonts/Lemon-Bold.otf"}
                    as="font"
                    crossOrigin=""
                />

                <link
                    rel="preload"
                    href="https://fonts.gstatic.com/s/productsans/v5/HYvgU2fE2nRJvZ5JFAumwegdm0LZdjqr5-oayXSOefg.woff2"
                    as="font"
                    crossOrigin=""
                />
            </Head>
            <main>{children}</main>
        </>
    );
}