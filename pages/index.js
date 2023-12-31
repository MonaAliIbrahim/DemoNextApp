import Head from 'next/head'
import ProductList from '../components/ProductList/ProductList'

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Demo Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductList products={products} />
    </div>
  )
}

export async function getServerSideProps() {

  let products = await fetch('https://dummyjson.com/products').then(res => res.json()).then(data => data.products)

  return {
    props: {
      products
    }
  }
}