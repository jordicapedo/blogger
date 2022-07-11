import Document, { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '../components/navbar'

const name = 'Jordi Capellades'
export const siteTitle = 'Jordi Capellades'
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Public+Sans:wght@400;600&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="https://emojicdn.elk.sh/🌍" />
          <meta name="description" content="Jordi website" />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Navbar />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
