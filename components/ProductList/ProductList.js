import classes from './ProductList.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductList({ products }) {
  return (
    <ul className={classes.list}>
      {products.slice(0, 10).map(item => {
        return (
          <li key={item.id} className={classes.item}>
            <div className={classes.imgContainer}>
              <Image
                src={item.thumbnail}
                width={350}
                height={300}
                alt='Product Image'
                loading='lazy'
              // fill={true}
              />
            </div>
            <span className={classes.title}>{item.title}</span>
            <span>{item.price} $</span>
            <Link className={classes.btn} href={`/${item.id}`}>Show More</Link>
          </li>
        )
      })
      }
    </ul>
  )
}
