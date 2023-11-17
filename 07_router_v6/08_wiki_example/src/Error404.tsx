import React from 'react';
import { useNavigate } from 'react-router-dom';
import error404 from './img/error404.png';
import './scss/Error404.scss'

export default function Error404(props){
  const un = useNavigate();
  return(
    <div className="error404">
      <img src={error404} alt="error404" />
      <button onClick={()=>un(-1)}>뒤로 가기</button>
    </div>
  )
}