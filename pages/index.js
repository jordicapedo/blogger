import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section className="">
        <p className="text-[#3f3f46]">
          Jordi is a developer based in Barcelona with a passion for create and
          building digital stuff. He is currently learning Frontend
          technologists like Nextjs, React, Chakra UI and Tailwind. He is also a
          big fan of the open-source community and is always trying to learn new
          things. When he is not coding, he is usually training calisthenics or
          listing/making music.
        </p>
      </section>
      <section>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </section>
    </Layout>
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
