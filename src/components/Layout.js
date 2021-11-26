import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({children}) {
  const styles = {
    backgroundColor: '#F2EFDC',
    
  };
  return (
    <div style={styles}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}