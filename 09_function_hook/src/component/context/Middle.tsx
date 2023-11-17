import React, { useContext } from 'react';
import {MainContext} from './ContextProvider';

function Left(){
  const context = useContext(MainContext)
  const minusFn = () => {
    context.setN(current => (current - 1))
  }

  return (
    <button onClick={minusFn}>-1</button>
  )
}

function Right(){
  const context = useContext(MainContext)
  const plusFn = () => {
    context.setN(current => (current + 1))
  }

  return (
    <button onClick={plusFn}>+1</button>
  )
}

function Circle(){
  const context = useContext(MainContext)
  return (
    <span>{context.n}</span>
  )
}


export default function HookyMiddle(){
  return (
    <div className="wrap">
      <p>
        <Left />
        <Circle />
        <Right />
      </p>
    </div>
  )
}

