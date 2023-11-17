import React, { useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';

export default function Member(){
  const up = useParams();
  const un = useNavigate();

  useEffect(function(){
    if(up.name === undefined){
      alert('잘못된 경로로 접근하였습니다.')
      // un(-1)
      un('/',{replace:true})
    }
  },[un,up.name])

  return(
    <div style={{padding:'40px'}}>
      { up.name && <p style={{marginTop:'20px'}}>{up.name}의 회원 정보</p> }
    </div>
  )
}

