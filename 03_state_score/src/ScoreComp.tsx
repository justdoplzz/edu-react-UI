import React from 'react';
import './ScoreComp.scss';

export default class ScoreComp extends React.Component<{},{
  left_midbox : number,
  left_smbox : number,
  left_name : string,
  right_midbox : number,
  right_smbox : number,
  right_name : string
}>{
  constructor(props:{}){
    super(props);
    this.state = {
      left_midbox : 0,
      left_smbox : 0,
      left_name : 'HOME',
      right_midbox : 0,
      right_smbox : 0,
      right_name : 'AWAY'
    }
  }

  btnPlusClickFn = (e) => {
    const {className} = e.target;
    this.setState(
      current => ({
        ...current,
        [className] : current[className] + 1
      })
    )
  }

  btnMinusClickFn = (e) => {
    const {className} = e.target;
    this.setState(
      current => ({
        ...current,
        [className] : current[className] - 1
      })
    )
  }

  inputChangeFn = (e) => {
    const {name,value} = e.target;
    this.setState(
      current => ({
        ...current,
        [name] : value
      })
    )
  }

  render(){
    return (
      <>
        <div className="bigbox">
          <ul className="points">
            <li className="midbox" id="left_midbox">{this.state.left_midbox}</li>
            <li className="smbox" id="left_smbox">{this.state.left_smbox}</li>
            <li className="smbox" id="right_smbox">{this.state.right_smbox}</li>
            <li className="midbox" id="right_midbox">{this.state.right_midbox}</li>
          </ul>
          <div className="pcontainer">
            <p className="left">{this.state.left_name}</p>
            <p className="right">{this.state.right_name}</p>
          </div>
        </div>
        <fieldset className="inputs">
          <div className="buttons">
            <div className="leftbutton">
              <button className="left_midbox" onClick={this.btnPlusClickFn}>+</button>
              <button className="left_midbox" onClick={this.btnMinusClickFn}>-</button>
            </div>
            <div className="centerbuttons">
              <div className="leftcenterbutton">
                <button className="left_smbox" onClick={this.btnPlusClickFn}>+</button>
                <button className="left_smbox" onClick={this.btnMinusClickFn}>-</button>
              </div>
              <div className="rightcenterbutton">
                <button className="right_smbox" onClick={this.btnPlusClickFn}>+</button>
                <button className="right_smbox" onClick={this.btnMinusClickFn}>-</button>
              </div>
            </div>
            <div className="rightbutton">
              <button className="right_midbox" onClick={this.btnPlusClickFn}>+</button>
              <button className="right_midbox" onClick={this.btnMinusClickFn}>-</button>
            </div>
          </div>
          <div className="inputcontainer">
            <input name="left_name" type="text" value={this.state.left_name} onChange={this.inputChangeFn} />
            <input name="right_name" type="text" value={this.state.right_name} onChange={this.inputChangeFn}/>
          </div>
        </fieldset>
      </>
    )
  }
}


