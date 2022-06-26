import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from '../components/navbar'

export default function Home({ allPostsData }) {
  return (
    <>
      <Navbar />
      <Layout home>
        <Head>
          <title>Jordi Capellades</title>
        </Head>
        <section className="">
          <p className="">
            Hi! 👋 I'm a developer based in{' '}
            <a
              className="decoration-[#e11d48] text-[#e11d48] font-bold"
              target="_blank"
              href="https://www.google.es/maps/place/Barcelona/@41.3926467,2.0701495,12z/data=!3m1!4b1!4m5!3m4!1s0x12a49816718e30e5:0x44b0fb3d4f47660a!8m2!3d41.3873974!4d2.168568"
            >
              Barcelona
            </a>{' '}
            with a passion for create and building digital stuff. I'm currently
            learning Frontend technologists like Next, React and Tailwind.
          </p>
          <p className="">
            I'm also a big fan of the open-source community and I'm always
            trying to learn new things. You can also find me on{' '}
            <a
              className="decoration-[#e11d48] text-[#e11d48] font-bold"
              href="https://twitter.com/CodesJordi"
              target="_blank"
              title="Twitter"
            >
              Twitter
            </a>{' '}
            and{' '}
            <a
              className="decoration-[#e11d48] text-[#e11d48] font-bold"
              href="https://github.com/jordicapedo"
              target="_blank"
              title="Github"
            >
              Github
            </a>
            .
          </p>
          <p className="">
            When I'm not coding, I'm usually training calisthenics or
            listing/making music.
          </p>
        </section>
        <section>
          <h2 className="text-lg font-bold mb-4">Work:</h2>
          <ul>
            <li>Notes app</li>
            <li>Clone Spotify</li>
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-bold mb-4">Personal projects:</h2>
          <ul>
            <li>My personal website</li>
            <li>Notes, a minimalism note app</li>
            <li>Spotofu, a spotify clone with Next and Tailwind</li>
          </ul>
        </section>
        <section></section>
      </Layout>
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
