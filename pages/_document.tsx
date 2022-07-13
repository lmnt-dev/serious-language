import Document, { Head, Html, Main, NextScript } from "next/document";

export default class _Document extends Document {
  render() {
    return (
      <Html className="min-h-screen">
        <Head>
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="min-h-screen body-font font-poppins">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
