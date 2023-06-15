import { Fragment } from "react";
import AppHeader from "../AppHeader/AppHeader";
import classes from './MasterLayout.module.css';

export default function MasterLayout(props) {
  return (
    <Fragment>
      <AppHeader />
      <main className={classes.main}>
        {props.children}
      </main>
      <footer className={classes.footer}>
        <p></p>
      </footer>
    </Fragment>
  )
}
