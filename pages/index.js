import Layout from '../components/template/Layout'
import axios from '../lib/client'
import Link from 'next/link'
import FreeListings from '../components/ads/FreeListings'

export default function Home() {
  return (
    <Layout>
      <FreeListings />

      {/*<div>{JSON.stringify(data, null, 2)}</div>*/}
    </Layout>
  )
}
