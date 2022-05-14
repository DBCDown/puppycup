import Layout from '../components/template/Layout'
import axios from '../lib/client'
import Link from 'next/link'

export async function getServerSideProps() {
  const { data } = await axios.get('posts')
  return {
    props: {
      data,
    },
  }
}

export default function Home({ data }) {
  return (
    <Layout>
      <div>HOME</div>
      <div className="grid grid-cols-3 gap-5">
        {data.map((post) => (
          <div key={post.id} className={`rounded-md border border-gray-200 bg-white p-5 shadow shadow-black/10`}>
            <Link href={'post'}>
              <a>{post.title}</a>
            </Link>
          </div>
        ))}
      </div>

      <div>{JSON.stringify(data, null, 2)}</div>
    </Layout>
  )
}
