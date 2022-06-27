import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Layout home>
        <Head>
          <title>Jordi Capellades</title>
        </Head>
        <section className="">
          <p className="">
            Hi! 👋 I'm a developer based in{' '}
            <a
              className="link"
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
              className="link"
              href="https://twitter.com/CodesJordi"
              target="_blank"
              title="Twitter"
            >
              Twitter
            </a>{' '}
            and{' '}
            <a
              className="link"
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
            <li>
              Frontend and User tester in{' '}
              <a
                className="link"
                href="https://www.sporttips.com/"
                target="_blank"
              >
                Sporttips
              </a>{' '}
              App.
            </li>
            <li>
              Develop a SPA for{' '}
              <a
                className="link"
                href="https://www.sabaparking.co.uk/"
                target="_blank"
              >
                SABA (uk)
              </a>{' '}
              workers using Vue and Bootstrap.
            </li>
            <li>
              Worked at{' '}
              <a className="link" href="https://www.fhios.es/" target="_blank">
                FHIOS
              </a>{' '}
              from 2020 to 2022. I was in charge of the Frontend for some of the
              projects.
            </li>
            <li>
              Worked at Edittec from 2018 to 2020 as a Full-stack development
              using HTML, JS, CSS, MySQL and PHP. Also, I used drupal at the
              level of site-building.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-bold mb-4">Personal projects:</h2>
          <ul>
            <li>My personal website</li>
            <li>
              <a
                className="link"
                href="https://motes.jordicapellades.dev/"
                target="_blank"
              >
                Motes
              </a>
              , a minimalism note app
            </li>
            <li>A Spotify clone with Next and Tailwind</li>
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
