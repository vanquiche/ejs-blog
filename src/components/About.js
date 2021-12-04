import React from 'react';
import * as style from '../styles/styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faLaugh } from '@fortawesome/free-solid-svg-icons';
import SectionTitle from './SectionTitle';
import { Slide } from 'react-reveal';

export default function About() {
  return (
    <section
      id='mission'
      className={style.aboutCard}
      style={{ backgroundColor: '#897085' }}
    >
      <div className={style.mission}>
        <Slide bottom>
          <SectionTitle
            fontColor='whitesmoke'
            position='center'
            styleName={style.featuredTitle}
          >
            Mission
          </SectionTitle>
        </Slide>
        <Slide bottom>
          <p>
            If you’ve just started your Javascript journey then you’re probably
            feeling scared, overwhelmed, and like an impostor. Relax, those
            feelings are part of the process, every programmer was once exactly
            where you are. If you’re still shaking in your slippers then don’t
            worry I’m here to help. <br />
            Everything Javascript is your number one resource to jump-start your
            education. You’ll find everything you’ll need to get started and
            none of the filler, from plain ol’ JS to Node plus everything in
            between.
          </p>
        </Slide>
        <Slide bottom>
          <div className={style.iconWrapper}>
            <div className={style.iconContainer}>
              <FontAwesomeIcon icon={faLightbulb} />
              <p>easy to understand content</p>
            </div>

            <div className={style.iconContainer}>
              <FontAwesomeIcon icon={faClock} />
              <p>always brief and to the point</p>
            </div>

            <div className={style.iconContainer}>
              <FontAwesomeIcon icon={faAward} />
              <p>quality content worthy of your time</p>
            </div>

            <div className={style.iconContainer}>
              <FontAwesomeIcon icon={faLaugh} />
              <p>fun to read from beginning to end</p>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
}
