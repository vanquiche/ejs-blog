import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import * as style from '../styles/styles.module.css'

export default function Layout({children}) {
  const styles = {
    backgroundColor: '#F2EFDC',

  };
  return (
    <div style={styles}>
      <Navbar />
      <main className={style.layoutBody}>{children}</main>
      <Footer />
    </div>
  );
}
