import React from 'react';

interface bigcomptype{
  children:React.ReactNode;
}

function Bigcomp(props:bigcomptype){

  console.log(props.children)
  return(
    <div style={{border:'1px solid black',width:'300px'}}>
      {props.children[1]}
      {props.children}
    </div>
  )
}

export default Bigcomp;