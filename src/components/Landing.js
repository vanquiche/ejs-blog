import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Link } from 'gatsby';
import Fade from 'react-reveal';
import Slide from 'react-reveal';
import * as style from '../styles/styles.module.css';

export default function Landing() {
  const links = [
    {
      text: 'why js?',
      section: 'whyJS',
    },
    {
      text: 'get started',
      section: 'getStarted',
    },
    {
      text: 'latest',
      section: 'latestPost',
    },

    {
      text: 'mission',
      section: 'mission',
    },

  ];
  return (
    <section
      id='landing'
      className={style.card}
      style={{ backgroundColor: '#E96767' }}
    >
      <Slide top>
        <nav className={style.navbar}>
          <ul>
            {links.map((link) => {
              return (
                <li>
                  <AnchorLink
                    title={link.text}
                    to={`/#${link.section}`}
                    className={style.navLink}
                    // stripHash
                  />
                </li>
              );
            })}
            <li>
              <Link to='/posts' className={style.navLink}>blog posts</Link>
            </li>
          </ul>
        </nav>
      </Slide>
      <div className={style.landingContent}>
        <Fade delay={5000}>
          <h1 className={style.landingHeader}>everything javascript</h1>
        </Fade>
        <Fade bottom>
          <h4 className={style.landingSubheading}>
            welcome friend, let's learn something new today.
          </h4>
        </Fade>
      </div>
    </section>
  );
}
