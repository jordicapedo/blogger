import Layout from '../components/layout'
import Intro from '../components/section-intro'
import Works from '../components/section-works'
import Personal from '../components/section-personal'
import Footer from '../components/footer'
import { getSortedPostsData } from '../lib/posts'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Layout home>
        <Head>
          <title>Jordi Capellades</title>
        </Head>
        <Intro />
        <Works />
        <Personal />
      </Layout>
      <Footer />
    </>
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
