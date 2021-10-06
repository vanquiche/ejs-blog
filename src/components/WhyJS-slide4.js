import React from 'react';
import SectionTitle from './SectionTitle';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal';
import * as style from '../styles/styles.module.css';

export default function WhyJSslide4() {
  const typeStrings = [
    'Python',
    'Java',
    'C#',
    'C++',
    'PHP',
    'Swift',
    'Ruby',
    'Perl',
    'Rust',
  ];
  return (
    <section className={style.card} style={{ backgroundColor: '#6BB1D9' }}>
      <div className={style.pageContent}>
        <Fade right>
          <SectionTitle styleName={style.wjs_slide4}>
            Smooth Transition
          </SectionTitle>
          <p style={{ textAlign: 'left' }}>
            In today’s ever-growing tech field it’s hard to decide what
            programming language is the best fit for you. Thankfully, Javascript
            adopts many of its concepts and syntax from other languages, making
            it the perfect stepping stone. Once you’ve mastered JS and are ready
            to mingle with{' '}
            <Typewriter
              className={style.typewriter}
              options={{
                strings: typeStrings,
                autoStart: true,
                loop: true,
              }}
            />
            <br />
            it will feel like chatting with an old friend.
          </p>
        </Fade>
      </div>
    </section>
  );
}
