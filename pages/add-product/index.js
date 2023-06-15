import { Fragment } from "react"
import Head from "next/head"
import ProductForm from "../../components/ProductForm/ProductForm"

export default function index() {
  return (
    <Fragment>
      <Head>
        <title>Add a New Product</title>
        <meta
          name="description"
          content="Add your product and build great e-commerce app"
        />
      </Head>
      <ProductForm />
    </Fragment>
  )
}
