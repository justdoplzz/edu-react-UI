import React from 'react';

import Greetings from './Greetings';
import Bigcomp from './Bigcomp';
import Smallcomp from './Smallcomp';

export default function NestedComp(){

  const color0 = 'LightGreen'

  return(
    <>
      <Greetings _name="리액트" addition="It's nice to see you!" clickEvent={(nm)=>{alert(nm)}}/>
      <Bigcomp>
        <Smallcomp cl='LightPink'></Smallcomp>
        <Smallcomp cl={color0}></Smallcomp>
      </Bigcomp>
    </>
  )
}
