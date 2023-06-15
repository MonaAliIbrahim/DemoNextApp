import Link from 'next/link';
import classes from './AppHeader.module.css';

export default function AppHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Products</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/add-product">Add New Product</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}