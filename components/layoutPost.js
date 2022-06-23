import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const name = 'Jordi Capellades'
export const siteTitle = 'Jordi Capellades'

export default function Layout({ children }) {
  return (
    <div className="container mt-24 mx-auto flex flex-col items-center justify-center">
      <Head>
        <title>Jordi Capellades</title>
        <link rel="icon" href="https://emojicdn.elk.sh/🦁" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="mb-10">
        {children}
        <div className="mt-10">
          <Link href="/posts">
            <a className="font-bold text-sky-600 hover:underline">
              ← Back to posts
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
