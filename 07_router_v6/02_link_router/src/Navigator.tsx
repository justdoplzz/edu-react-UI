import React from 'react';
import {Link} from 'react-router-dom';
import './scss/Navigator.scss';

export default function Navigator(){
  return(
    <div className="navi">
      <h2>목차</h2>
      <ul>
        <li>
          <Link to="/">홈페이지</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
    </div>
  )
}

