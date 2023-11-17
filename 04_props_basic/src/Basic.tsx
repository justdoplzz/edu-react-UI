import React from 'react';

interface helloParams{
  name:string
}

function HelloComp(props:helloParams){
  return <>
    <div style={{padding:'50px'}}>안녕하세요 {props.name}!</div>
  </>
}

HelloComp.defaultProps = {
  name: ''
}

export default function Basic (){
  return (
    <>
      <HelloComp name="react" />
      <HelloComp />
    </>
  )
}
