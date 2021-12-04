import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import * as style from '../styles/styles.module.css';

export default function Authorship({meta, time}) {

  return (
    <div className={style.authorship}>
      <p>
        <FontAwesomeIcon style={{marginRight: '10px'}} icon={faUser} />
        {`${meta.author}`}
      </p>
      {(meta.published !== null) && <p>
        <FontAwesomeIcon style={{marginRight: '10px'}} icon={faPen} />
        {`${meta.published}`}
      </p>}
      <p>
        <FontAwesomeIcon style={{marginRight: '10px'}} icon={faClock} />
        {`${time}mins`}
      </p>
    </div>
  );
}
