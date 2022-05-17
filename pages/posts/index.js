import Layout from '../../components/template/Layout'
import axios from '../../lib/client'
import Link from 'next/link'

export async function getServerSideProps() {
  const { data } = await axios.get('posts')
  return {
    props: {
      data,
    },
  }
}

export default function Post({ data }) {
  return (
    <Layout>
      <div className="grid gap-5 md:grid-cols-3">
        {data.map((post) => (
          <div key={post.id} className={`rounded-md border border-gray-800 bg-gray-900 p-5 shadow shadow-black/10`}>
            <Link href={'posts/1'}>
              <a>{post.title}</a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}
