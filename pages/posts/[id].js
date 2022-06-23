import LayoutPost from '../../components/layoutPost'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'

export default function Post({ postData }) {
  return (
    <LayoutPost>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="prose">
        <h1 className="text-2xl font-bold mb-2">{postData.title}</h1>
        <div className="mb-6">
          <Date dateString={postData.date} />
        </div>
        <ReactMarkdown>{postData.contentHtml}</ReactMarkdown>
      </article>
    </LayoutPost>
  )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
