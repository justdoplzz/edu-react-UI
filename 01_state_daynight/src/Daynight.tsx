import React from 'react';
import './Daynight.scss';

class Daynight extends React.Component<{},{night:boolean}>{
  constructor(props:{}){
    super(props)
    this.state = {
      night:false
    }
  }
  
  buttonClick = () => {
    this.setState(current => ({
      ...current,
      night:!current.night
    }))
  }

  render(){
    return(
      <div className={"body " + (this.state.night ? "night" : "")}>
        <div className="wrap" style={{width:'500px',margin:'0 auto'}}>
          <h2>Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate temporibus earum fuga enim animi doloremque necessitatibus explicabo perspiciatis obcaecati excepturi assumenda, impedit aspernatur voluptate ratione tenetur. Vel similique quasi nulla recusandae dolore officia odio ducimus, ipsum, qui molestiae quisquam impedit. Quaerat eligendi ut quibusdam cupiditate recusandae perspiciatis vitae nesciunt dignissimos! Suscipit eaque, velit id praesentium nobis iure nesciunt dicta amet explicabo magnam adipisci, ad voluptatibus tempora delectus, odit vero molestiae. Ipsum tempore repudiandae aperiam voluptatum porro sint iure quaerat quia molestias eveniet reprehenderit corporis ex, suscipit optio alias atque eum delectus repellendus dicta itaque! Autem odio officia modi blanditiis debitis?</p>
          <button onClick={this.buttonClick}>Day/Night</button>
        </div>
      </div>
    )
  }
}

export default Daynight;