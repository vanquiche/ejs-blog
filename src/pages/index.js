import * as React from 'react';
import Deck from '../components/Deck';
import WhyJSslide1 from '../components/WhyJS-slide1';
import WhyJSslide2 from '../components/WhyJS-slide2';
import WhyJSslide3 from '../components/WhyJS-slide3';
import WhyJSslide4 from '../components/WhyJS-slide4';
import Landing from '../components/Landing';
import '../styles/global.css';

// markup
const IndexPage = () => {
  const pages = [
    <WhyJSslide1 />,
    <WhyJSslide2 />,
    <WhyJSslide3 />,
    <WhyJSslide4 />,
  ];
  return (
    <main>
      <Landing />
      <Deck slides={pages} />
    </main>
  );
};

export default IndexPage;
