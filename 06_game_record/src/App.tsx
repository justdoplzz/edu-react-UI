import React from 'react';
import './scss/App.scss';

import Container from './Container';
import ScoreTable from './ScoreTable';

const yourname = prompt('이름을 입력해주세요')

function App() {
  return (
    <>
      <Container>
        <ScoreTable yourname={yourname}/>
      </Container>
    </>
  );
}

export default App;
