import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import * as style from '../styles/styles.module.css';

export default function Authorship({meta, time}) {
  if (!meta) return null;
  return (
    <div className={style.authorship}>
      {(meta.author !== null) && <p>
        <FontAwesomeIcon style={{marginRight: '10px'}} icon={faUser} />
        {`${meta.author}`}
      </p>}
      {(meta.published !== null) && <p>
        <FontAwesomeIcon style={{marginRight: '10px'}} icon={faPen} />
        {`${meta.published}`}
      </p>}
        {(meta.time !== null) && <p> <FontAwesomeIcon style={{marginRight: '10px'}} icon={faClock} />
        {`${time}mins`}
      </p>}
    </div>
  );
}
