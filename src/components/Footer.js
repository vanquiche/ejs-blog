import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBehance } from '@fortawesome/free-brands-svg-icons';
import * as style from '../styles/styles.module.css';

export default function Footer() {
  return (
    <footer className={style.footerWrapper}>
      <div className={style.footerContainer}>
        <form className={style.newsletterForm}>
          <p className={style.signUp}>
            Before you go, consider signing up for the newsletter to stay in
            touch. <br />I don’t share your info and you can opt-out anytime.
          </p>
          <div className={style.formContainer}>
            <input
              className={style.formTextfield}
              type='email'
              placeholder='sayhello@email.com'
            />
            <input className={style.btn} type='submit' value='sign-up' />
          </div>
        </form>
        {/* ko-fi */}
        <div className={style.kofi}>
          <p>
            Think I did a fantastic job? <br />Tell me “you’re awesome” by buying me a
            drink @ ko-fi
          </p>
        </div>
        {/* social */}
        <div className={style.social}>
          <p>Follow me to see what I’m up to!</p>
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faPinterest} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faBehance} />
        </div>
        <div className={style.footerCC}>
          <small>&#169; Copyright 2021 everythingjs. All Rights Reserved</small>
        </div>
      </div>
    </footer>
  );
}
