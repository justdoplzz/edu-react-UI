import React from 'react';
import {Route, Routes, Link, useParams, useSearchParams} from 'react-router-dom';

import Address from './Address';
import Tel from './Tel';

export default function About(){
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');
  const up = useParams();

  return(
    <>
      <div style={{padding:'40px'}}>
        <h2>{up.parameter}에 대하여</h2>
        <p style={{marginTop:'20px'}}>안녕하세요</p>
        <p style={{marginTop:'20px'}}>저는 다람쥐 헌 쳇바퀴에 타고파</p>
      </div>
      <ul>
        <li><Link to="address?page=1">주소 보기</Link></li>
        <li><Link to="tel?page=2">전화번호 보기</Link></li>
      </ul>
      <Routes>
        <Route path="address" element={<Address />}></Route>
        <Route path="tel" element={<Tel />}></Route>
      </Routes>
      <p>- {page} 페이지 -</p>
    </>
  )
}

