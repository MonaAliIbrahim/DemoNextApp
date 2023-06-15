import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import classes from './index.module.css';

export default function index({ product }) {
  return (
    <Fragment>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
      </Head>
      <div className={classes.details}>
        <h2>{product.title}</h2>
        <Image
          src={product.thumbnail}
          alt='Product Image'
          priority={true}
          width={350}
          height={350}
        />
        <p>
          <span>Description : </span>{product.description}
        </p>
        <p>
          <span>Brand : </span>{product.brand}
        </p>
        <p>
          <span>Category : </span>{product.category}
        </p>
        <p>
          <span>Rating : </span>{product.rating.toFixed(1)}
        </p>
        <p>
          <span>Price : </span>{product.price} $
        </p>
      </div>
    </Fragment>
  )
}

export async function getStaticPaths() {

  let products = await fetch('https://dummyjson.com/products').then(res => res.json()).then(data => data.products);

  return {
    fallback: false,
    paths: products.map(product => ({
      params: { productId: product.id.toString() },
    })
    ),
  }
}

export async function getStaticProps(context) {

  let id = context.params.productId;
  let product = await fetch(`https://dummyjson.com/products/${id}`).then(res => res.json()).then(data => data);

  return {
    props: {
      product
    }
  }
}