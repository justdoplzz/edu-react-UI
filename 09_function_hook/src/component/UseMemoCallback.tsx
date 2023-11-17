import React, { useState, useCallback, useMemo } from 'react';


// useCallback은 함수가 변경되지 않도록 하며 재랜더링될 때 불필요한 함수가 다시 실행되는것을 방지한다.
// 매개변수로 콜백함수를 받고, 두 번째 매개변수로 배열을 전달 받는다.



export function HookyList(props){
  const [dataArray,setDataArray] = useState([
    {"id":1,"name":"Brotherton","english":"78","active":false},
    {"id":2,"name":"Phetteplace","english":"77","active":false},
    {"id":3,"name":"MacFadyen","english":"69","active":false},
    {"id":4,"name":"Tennock","english":"61","active":false},
    {"id":5,"name":"Lippitt","english":"52","active":false}
  ]);

  const submitFn = useCallback(() => {
    setDataArray(current => ([
      ...current,
      {
        id : current[current.length-1].id + 1,   // id값 생성 : current의 길이 (현재는 5)에서 -1을 하면 마지막 인덱스 번호에 + 1 을 한다.
        ...props.newAdd,                         // ? 
        active : false
      }
    ]))
      console.log('함수 선언이 업데이트 되었습니다.')
    },[props]
  )

  const onSelect = (id) => {
    setDataArray(current => (current.map(
        item => {
          (item.id === id) && (item = { ...item, active: !item.active });  // ...item을 복사하고 active값을 true로 변경
          return item
        }
    )))
  }

// Cabllback hook은 return이 없지만 Memo는 return을 한다.
// 평균을 계산한 값을 출력한다.

  const averaging = useMemo(() => {
      const selects = dataArray.filter(item => item.active);  //active가 true인 값만 지정.
      let sum = 0;
      for(const item of selects){          // 선택된 true값 들 중에 english값을 파싱하여 합친다
        sum += parseInt(item.english)
      }
      console.log('평균 점수 계산이 작동되었습니다')
      return isNaN(sum/selects.length) ? 0 : sum/selects.length  // 합쳐진 값을 갯수만큼 나누어서 평균 계산
    },[dataArray])

  return(
      <>
        <p><button onClick={submitFn}>등록</button></p>
        <p>선택된 사람들의 평균 영어점수 : {averaging}</p>
        <table>
          <thead>
            <tr>
              <th>이름</th>
              <th>영어점수</th>
            </tr>
          </thead>
          <tbody>
            {dataArray.map(item => (
              <tr key = {item.id} onClick={()=>{onSelect(item.id)}} className = {item.active ? 'on' : ''}>  {/** item.active가 true면 className이 on인 css가 적용 */}
                <td>{item.name}</td>
                <td>{item.english}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
  )
}

export default function UseMemoCallback(){
  const [inputs,setInputs] = useState({  
    name:'',
    english:''
  })

  const onChangeFn = (e) => {                 // 이벤트 핸들러 
    const {name,value} = e.target;

    setInputs(current => ({
      ...current,
      [name] : value
    }))
  }



  return(
    <div className="wrap">
        <p>
          <label>이름
            <input type="text" onChange={onChangeFn} name="name" value={inputs.name} />       {/** 입력한 name이 저장됨 */}
          </label>
        </p>
        <p>
          <label>영어점수
            <input type="text" onChange={onChangeFn} name="english" value={inputs.english}/>
          </label>
        </p>
        <HookyList newAdd={inputs} />
      </div>
  )
}