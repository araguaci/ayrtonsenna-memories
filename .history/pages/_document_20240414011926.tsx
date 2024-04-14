import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <meta name="description" content="Um tributo ao melhor piloto de todos os tempos." />
          <meta property="og:site_name" content="www.artesdosul.com" />
          <meta
            property="og:description"
            content="Um tributo ao melhor piloto de todos os tempos."
          />
          <meta property="og:title" content="In Memoriam Ayrton Senna" />
          <meta name="twitter:card" content="https://res.cloudinary.com/dw8gudamo/image/upload/c_limit,w_1280/c_limit,w_1920/f_webp/q_auto/v1/ayrtonsenna/ayrtonsenna_15_jmtdnv?_a=BAVAr0By0" />
          <meta name="twitter:title" content="In Memoriam Ayrton Senna" />
          <meta
            name="twitter:description"
            content="Um tributo ao melhor piloto de todos os tempos."
          />
        </Head>
        <body className="bg-main antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
