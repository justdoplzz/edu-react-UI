import React from 'react';

export default function Home(){
  const pStyle = {marginTop:'20px'}

  return(
    <div style={{padding:'40px'}}>
      <h2>리액트 Hook 예제</h2>
      <p style={pStyle}>각각의 목차는 Hook의 종류를 보여주고 있습니다</p>
      <p style={pStyle}>State는 useState Hook 예제를 담고 있습니다.</p>
      <p style={pStyle}>Ref는 useRef Hook 예제를 담고 있습니다.</p>
    </div>
  )
}

