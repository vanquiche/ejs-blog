import React from 'react';
import SectionTitle from './SectionTitle';
import Cube from '../images/3d-cube.png';
import Fade from 'react-reveal';
import * as style from '../styles/styles.module.css';

export default function WhyJSslide3() {
  return (
    <section className={style.card} style={{ backgroundColor: '#DE8ED1' }}>
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
          fill='#6BB1D9'
          stroke='#6BB1D9'
        />
      </svg>
      <div className={style.pageContent}>
        <Fade right>
          <SectionTitle styleName={style.wjs_slide3}>
            JAVASCRIPT IS EVERYWHERE
          </SectionTitle>
          <p>
            Javascript started its humble beginnings in the web browser,
            performing simple tasks. <i>Fast-forward</i> to today, and JS has
            grown up, graduated, had some kids, and accomplished some{' '}
            <b>amazing</b> things. Mobile apps? No problem. Write code once,
            deploy to multiple platforms. Tired of flat two-dimensional designs?
            Yep, with JS it’s easy to incorporate{' '}
            <span style={{ display: 'inline-block' }}>
              <img className={style.cubeIcon} src={Cube} alt='3d cube' />
            </span>
            3d graphics to your website. It’s safe to say that the future is
            here and it’s running on javascript.
          </p>
        </Fade>
      </div>
    </section>
  );
}
