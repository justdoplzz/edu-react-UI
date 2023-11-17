import React, { useState, useRef, useEffect } from 'react';
import banner01 from '../img/banner01.png'
import banner02 from '../img/banner02.png'
import banner03 from '../img/banner03.png'

export default function UseEffect(){
  const [pState,setPState] = useState(`${(Math.round(Math.random()*100))}`); //useState로 임의의 수를 생성하고 관리

  const ulRef:React.MutableRefObject<HTMLUListElement> = useRef();
  const slideId:React.MutableRefObject<NodeJS.Timeout> = useRef();

  useEffect(() => {
    let i = 0;                                                       //useEffect에서 DidMount부분
    const lis = Array.apply(null,ulRef.current.children);   // dom컬렉션을 배열로 저장

    const slideFn = () => {
      // ?
      if(i === lis.length) i = 0;
      i++;
      lis[i-1].style.opacity = '0'
      lis[i === lis.length ? 0 : i].style.display = 'block'
      //

      setTimeout(() => {
        lis[i === lis.length ? 0 : i].style.opacity = '1'
      })
      setTimeout(() => {
        lis[i-1].style.display = 'none'
      },600);
    }

    slideId.current = setInterval(slideFn,2000)

    return(() => {
      clearInterval(slideId.current)
    })
  },[])

  useEffect(() => {
    console.log('값이 업데이트 되었습니다')
  },[pState])

  const updateNum = () => {
    setPState(current => current = `${(Math.round(Math.random()*100))}`)
  }

  return(
    <div className="wrap">
      <ul style={{marginBottom:'30px',width:'500px',height:'100px'}} ref={ulRef} className="slide">
        <li><a href="./"><img src={banner01} alt="1번 배너" /></a></li>
        <li><a href="./"><img src={banner02} alt="2번 배너" /></a></li>
        <li><a href="./"><img src={banner03} alt="3번 배너" /></a></li>
      </ul>
      <p>{pState}<button onClick={updateNum} style={{marginLeft:'10px'}}>값 수정</button></p>
    </div>
  )
}

