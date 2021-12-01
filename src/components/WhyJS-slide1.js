import React from 'react';
import SectionTitle from './SectionTitle';
import Slide from 'react-reveal';
import * as style from '../styles/styles.module.css';

export default function WhyJSslide1() {
  return (
    <div
      id='whyJS'
      className={style.card}
      style={{ backgroundColor: '#77ACA2' }}
    >
      <svg
        className={style.wave}
        width='100'
        height='1026'
        viewBox='0 0 100 1026'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M13 400.5C57.3021 182.91 86.0001 114 40.5001 1.00006H124V1025H40.5C124 768.5 -43.4999 678 13 400.5Z'
          fill='#F07676'
          stroke='#F07676'
        />
      </svg>
      <div className={style.pageContent}>
        <Slide left>
          <h5>you must be thinking...</h5>
          <div className={style.centerText}>
            <SectionTitle position='center' styleName={style.wjs_slide1}>
              why javascript?
            </SectionTitle>
          </div>
          <h5>swipe right to learn why.</h5>
        </Slide>
      </div>
    </div>
  );
}
