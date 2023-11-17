import React from 'react';

interface cltype{
  cl:string;
}

function Smallcomp({cl}:cltype){
  return (
    <div style={{color : cl}}> {cl}색입니다.</div>
  );
}

export default Smallcomp;