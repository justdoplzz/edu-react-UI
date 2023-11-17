import React, { useState } from 'react';

export default function UseState(){

  const [n,setN] = useState(0); // useState로 n을 관리 

  const plusFn = () => {  // 이벤트 핸들러 함수
    setN(n => n + 1)
  }

  const minusFn = () => {  // 이벤트 핸들러 함수
    setN(n => n - 1)
  }

  return(
    <div className="wrap">
      <p>
        <button onClick={minusFn}>-1</button>
        <span>{n}</span>
        <button onClick={plusFn}>+1</button>
      </p>
    </div>
  )
}

