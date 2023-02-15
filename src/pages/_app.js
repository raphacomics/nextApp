import Head from 'next/head'
import Layout from '@/components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Rapha Next App</title>
      </Head>
      <Layout>

        <Component {...pageProps} />
      </Layout>
    </>
  )

}
