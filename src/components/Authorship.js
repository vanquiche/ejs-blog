import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Authorship({meta}) {
  const style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: '30px',
    fontSize: '0.95rem'
  }
  return (
    <div style={style}>
      {/* author, publishing date, read-time */}
      <p>
        <FontAwesomeIcon style={{marginRight: '10px'}} icon={faUser} />
        {`${meta.author}`}
      </p>
      <p>
        <FontAwesomeIcon style={{marginRight: '10px'}} icon={faPen} />
        {`${meta.published}`}
      </p>
      <p>
        <FontAwesomeIcon style={{marginRight: '10px'}} icon={faClock} />
        15mins
      </p>
    </div>
  );
}
