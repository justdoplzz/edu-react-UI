import React, { useRef, useState } from 'react';

export default function UseRefCRUD(){

  const [numbers,setNumbers] = useState([{             // useState로 선언하고 초기값에 배열을 넣었다
    id : 1,
    number : Math.round(Math.random() * 100)
  }]);

  const nextId = useRef(2);                        // state값이 바뀔 때 재렌더링이 되는데 값을 유지 하려고 nextId를 useRef로 선언

  const createFn = () => {
    setNumbers(current => ([
      ...current,                                     // ...로 현재 id값을 가져온다. 
      {                                               // ...current, { } 객체에 값을 업데이트
        id: nextId.current,                           // id: nextId.current를 하면서 nextId 객체의 current 속성을 참조하여 현재의 값을 가져오게 된다. 그래서 고유한 ID를 할당 할 수 있다.
        number : Math.round(Math.random() * 100)
      }
    ]))

    setTimeout(() => {nextId.current++});            // 비동기적으로 nextId의 값을 증가, 데이터 항목을 추가할 때의 예측 가능한 동작을 보장
  }

  return(
    <div className="wrap">
        <p>
          <button onClick={createFn}>create</button>
        </p>
        <table>
          <thead>
            <tr>
              <th>ID</th><th>Number</th>
            </tr>
          </thead>
          <tbody>
            {numbers.map(item => (                        // map으로 반복문을 돌려서 id와 number를 순차적으로 출력
              <tr key={item.id}>
                <td>{item.id}</td><td>{item.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>

  )
}

