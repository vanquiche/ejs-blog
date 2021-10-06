import React from 'react';
import SectionTitle from './SectionTitle';
import Heart from '../images/heartIcon2.png';
import Fade from 'react-reveal';
import * as style from '../styles/styles.module.css';

export default function WhyJSslide2() {
  return (
    <section className={style.card} style={{ backgroundColor: '#F07676' }}>
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
          fill='#DE8ED1'
          stroke='#DE8ED1'
        />
      </svg>
      <div className={style.pageContent}>
        <Fade right>
          <SectionTitle styleName={style.wjs_slide2}>
            beginner friendly
          </SectionTitle>
          <p>
            If you’re an absolute beginner, javascript is the perfect language
            to go from <small>zero</small> to <b>hero</b>. Since JS is flexible,
            forgiving, and supported by a large community, you’ll spend more
            time writing code, and less time problem solving. Before you know
            it, you’ll be an expert <i>faster</i> than you can{' '}
            <code>console log</code> “I{' '}
            <span style={{ display: 'inline-block' }}>
              <img className={style.heartIcon} src={Heart} alt='heart icon' />
            </span>{' '}
            javascript!”.
          </p>
        </Fade>
      </div>
    </section>
  );
}
