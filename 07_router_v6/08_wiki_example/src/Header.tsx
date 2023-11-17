import React from 'react';
import './scss/Header.scss';
import akalive from './img/akalive.svg';

export default function Header(){
  return(
    <>
      <header>
        <div className="wrap">
          <div className="left">
            <h1>나무위키</h1>
            <ul>
              <li><span className="iconify" data-icon="ion-md-compass" data-inline="false"></span>최근 변경</li>
              <li><span className="iconify" data-icon="ion-md-text" data-inline="false"></span>최근 토론</li>
              <li><span className="iconify" data-icon="ion-ios-cube" data-inline="false"></span>특수 기능</li>
              <li><img src={akalive} alt="아카라이브" />아카</li>
            </ul>
          </div>
          <div className="right">
            <button><span className="iconify" data-icon="ion-ios-shuffle" data-inline="false"></span></button>
            <input placeholder="Search"></input>
            <button><span className="iconify" data-icon="ion-ios-search" data-inline="false"></span></button>
            <button><span className="iconify" data-icon="ion-ios-arrow-round-forward" data-inline="false"></span></button>
            <div><span className="iconify" data-icon="ion-ios-person" data-inline="false"></span></div>
          </div>
        </div>
      </header>
    </>
  )
}