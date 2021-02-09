import Link from 'next/link'

import Layout from './../components/layout'

const Posts = ({ posts }) => {
  return (
    <Layout>
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>Posts page</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={'/post/[id]'} as={`/post/${post.id}`}><a>{post.title}</a></Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3001/api/get-content/posts')
  const posts = await res.json()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts
    }
  }
}

export default Posts
