import * as React from 'react';
import Deck from '../components/Deck';
import WhyJSslide1 from '../components/WhyJS-slide1';
import WhyJSslide2 from '../components/WhyJS-slide2';
import WhyJSslide3 from '../components/WhyJS-slide3';
import WhyJSslide4 from '../components/WhyJS-slide4';
import Landing from '../components/Landing';
import GetStarted from '../components/GetStarted';
import * as style from '../styles/styles.module.css';
import '../styles/global.css';
import LatestPost from '../components/LatestPost';

// markup
const IndexPage = () => {
  const pages = [
    <WhyJSslide1 />,
    <WhyJSslide2 />,
    <WhyJSslide3 />,
    <WhyJSslide4 />,
  ];
  return (
    <main className={style.mainWrapper}>
      <Landing />
      <Deck slides={pages} />
      <GetStarted />
      <LatestPost />
    </main>
  );
};

export default IndexPage;
