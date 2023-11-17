import React, { useRef } from 'react';
import pexel from '../pexels-2813368.mp4'


// useRef는 비디오 객체에 접근하거나 값이 재랜더링되더라도 값을 유지하게 한다.

export default function UseRef(){

  const videoRef:React.MutableRefObject<HTMLVideoElement> = useRef();  //video 요소에 엑세스하고 제어하기 위한 useRef Hook

  const pauseFn = () => {          // 이벤트 핸들러 함수
    videoRef.current.pause();
  }

  const playFn = () => {           // 이벤트 핸들러 함수
    videoRef.current.play();
  }

  return(
    <div className="wrap">  
      <video autoPlay muted loop ref={videoRef}>           {/** video 자동재생, 무음, 반복, 참고객체 */}
        <source src={pexel} />                             {/** pexels 영상 */}
      </video>
      <p>
        <button onClick={pauseFn}>Pause</button>
        <button onClick={playFn}>Play</button>
      </p>
      <a href="https://www.pexels.com/video/drone-footage-of-a-couple-holding-hands-walking-in-the-beach-2813368/">Video by Fikret Ceylan from Pexels</a>
    </div>
  )
}

