import React from 'react';
import {useParams} from 'react-router-dom';

export default function About(){
  const up = useParams();
  console.log('useParams', up)

  return(
    <>
      <div style={{padding:'40px'}}>
        <h2>{up.parameter}에 대하여</h2>
        <p style={{marginTop:'20px'}}>안녕하세요</p>
        <p style={{marginTop:'20px'}}>저는 다람쥐 헌 쳇바퀴에 타고파</p>
      </div>
    </>
  )
}

