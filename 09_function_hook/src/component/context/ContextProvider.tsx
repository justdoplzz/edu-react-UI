import React, { useState } from 'react';

export const MainContext = React.createContext(null);  //context 생성

export default function ContextProvider({children}){   // 컴포넌트   ContextProvider는 중첩된 컴포넌트에 props를 주는 역할
  const [n, setN] = useState(0);
  const state = {n, setN}

  return (
    <MainContext.Provider value={state}>
      {children}                                       {/**컴포넌트로 만들어서 children으로 랜더링 */}
    </MainContext.Provider >
  )
}