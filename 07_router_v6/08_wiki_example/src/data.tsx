import React from 'react';
import {Link} from 'react-router-dom';

interface dataObj {
  title:string,
  content:JSX.Element
}

type dataType = Array<dataObj>

const data:dataType = [
  {title:'React(라이브러리)',content:
    <>
      <h3><span>1.</span> 개요</h3>
      <p>유저 인터페이스를 만드는 데 사용되는&nbsp;
        <Link to="/w/오픈 소스">오픈 소스</Link>&nbsp;
        <Link to="/w/자바스크립트">자바스크립트</Link>&nbsp;
        <Link to="/w/라이브러리">라이브러리</Link>.&nbsp;
        <Link to="/w/페이스북">페이스북</Link>에서 개발하였다.</p>
    </>
    },
  {title:'오픈 소스',content:
    <>
      <h3><span>1.</span> 개요</h3>
      <p>어떤 소프트웨어 프로그램을 개발하는 과정에 필요한 소스 코드나 설계도를 누구나 접근해서 열람할 수 있도록 공개하는 것. </p>
    </>
  },
  {title:'자바스크립트',content:
  <>
    <h3><span>1.</span> 개요</h3>
    <p>모질라 재단의 프로토타입기반의 프로그래밍 언어로, 스크립트 언어에 해당된다. 특수한 목적이 아닌 이상 모든 웹 브라우저에 인터프리터가 내장되어 있다. </p>
  </>
  },
  {title:'라이브러리',content:
  <>
    <h3><span>1.</span> 개요</h3>
    <p>소프트웨어 개발 시 사용되는 프로그램의 구성요소로, 공통으로 사용될 수 있는 특정한 기능(들)을 모듈화한 것이다. </p>
  </>
  },
  {title:'페이스북',content:
  <>
    <h3><span>1.</span> 개요</h3>
    <p>페이스북은 2004년 2월 4일 당시 21살이었던 하버드 대학교 학생 마크 저커버그와 에두아르도 세버린이 학교 기숙사에서 사이트를 개설하며 창업했다.</p>
  </>
  }
]

export default data;