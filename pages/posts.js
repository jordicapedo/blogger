import LayoutPosts from '../components/layout-posts'
import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Post({ allPostsData }) {
  return (
    <LayoutPosts>
      <Head>
        <title>Jordi's Blog</title>
      </Head>
      <section className="">
        <h1 className="text-2xl font-bold mb-4">Blog</h1>
        <ul className="text-xs md:text-base">
          {allPostsData.map(({ id, date, title }) => (
            <li className="flex items-center justify-between gap-5" key={id}>
              <Link href={`/posts/${id}`}>
                <a className="no-underline hover:underline">{title}</a>
              </Link>
              <br />
              <small className="">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </LayoutPosts>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
