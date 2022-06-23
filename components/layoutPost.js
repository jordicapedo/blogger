import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import Link from 'next/link'

const name = 'Jordi Capellades'
export const siteTitle = 'Jordi Capellades'

export default function Layout({ children, home, posts }) {
  return (
    <div className={styles.container}>
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
      <main className="mb-10">{children}</main>
      <div className="">
        <Link href="/posts">
          <a className="font-bold text-sky-600 hover:underline">
            ← Back to posts
          </a>
        </Link>
      </div>
    </div>
  )
}
