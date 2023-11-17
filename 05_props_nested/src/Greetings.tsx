import React from 'react';

interface GreetingsProps{
  _name: string;
  emoji: string;
  addition?: string;
  clickEvent:(_name:string)=>void;
}

export default function Greetings(props:GreetingsProps){
  const {_name,emoji,addition,clickEvent} = props;
  return(
    <>
      <div>Hello, {_name}! {emoji}</div>
      {addition && <div>{addition}</div>}
      <div style={{marginBottom:'20px'}}><button onClick={()=>{clickEvent(_name)}}>Click here</button></div>
    </>
  );

}

Greetings.defaultProps = {
  emoji : '😀',  
}
