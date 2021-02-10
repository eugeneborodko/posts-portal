import Link from 'next/link'

import Layout from './../../components/layout'

const Post = ({ post }) => {
  return (
    <Layout>
      <div className="container">
        <h1>Post {post.id}</h1>
        <p>{post.text}</p>
        <Link href={'/posts'}>
          <a>Back to posts</a>
        </Link>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/get-content/posts')
  const posts = await res.json()

  const paths = posts.map((post) => ({
    params: {
      id: post.id.toString(),
    },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/post/${params.id}`)
  const post = await res.json()

  return { props: { post } }
}

export default Post
