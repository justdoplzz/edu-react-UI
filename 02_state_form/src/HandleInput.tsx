import React from 'react';


class SingleInput extends React.Component<{},{inputChange:string}>{
  constructor(props:{}){
    super(props);
    this.state = {
      inputChange : '이 값은 바꿀 수 있습니다.',
    }
  }

  changeFunction = (e:React.ChangeEvent<HTMLInputElement>) => {
    this.setState(current => ({
      ...current,
      inputChange : e.target.value
    }))
  }


  render(){
    return(
      <>
        <input style={{border:'1px solid #333'}} value="이 값은 바꿀 수 없습니다."/>
        <input value={this.state.inputChange} onChange={this.changeFunction} />
      </>
    )
  }
}





interface inputsType {
  input1 : string,
  input2 : string,
  input3 : string,
  input4 : string,
}

class MultipleInput extends React.Component<{},{inputs:inputsType}>{
  constructor(props:{}){
    super(props);
    this.state = {
      inputs : {
        input1 : '바꿀 수 있는 값 1',
        input2 : '바꿀 수 있는 값 2',
        input3 : '바꿀 수 있는 값 3',
        input4 : '바꿀 수 있는 값 4'
      }
    }
  }

  changeInputsFunction = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name,value} = e.target;
    this.setState(current => ({
      ...current,
      inputs : {
        ...current.inputs,
        [name] : value
      }
    }))
  }


  render(){
    return(
      <>
        <input name="input1" value={this.state.inputs.input1} onChange={this.changeInputsFunction}/>
        <input name="input2" value={this.state.inputs.input2} onChange={this.changeInputsFunction}/>
        <input name="input3" value={this.state.inputs.input3} onChange={this.changeInputsFunction}/>
        <input name="input4" value={this.state.inputs.input4} onChange={this.changeInputsFunction}/>
      </>
    )
  }
}


interface HTMLTextAreaElement {
  value:string
}


class TextareaInput extends React.Component<{},{textareaValue:string}>{
  constructor(props:{}){
    super(props);
    this.state = {
      textareaValue : '여기는 긴 문장으로써 텍스트 에어리어를 채우게 되며 이렇게 길게 쓴 것을 스테이트로 연결하면 값을 바꿀 수 있습니다. '
    }
  }

  changeTextareaFunction = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState(current => ({
      ...current,
      textareaValue : e.target.value
    }))
  }


  render(){
    return(
      <>
        <textarea value={this.state.textareaValue} onChange={this.changeTextareaFunction} style={{width:'177px',height:'200px',resize:'none',outline:'none'}} />
      </>
    )
  }
}



function HandleInput(){
  return(
    <>
      <SingleInput />
      <h4>여러 개의 값을 바꿀 수도 있습니다.</h4>
      <MultipleInput />
      <h4>다음은 텍스트 에어리어입니다.</h4>
      <TextareaInput />
    </>
  )
}


export default HandleInput;
