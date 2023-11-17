import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './scss/App.scss';

import Navigator from './Navigator';
import Home from './Home';
import UseState from './component/UseState';
import UseRef from './component/UseRef';
import UseRefCRUD from './component/UseRefCRUD';
import UseEffect from './component/UseEffect';
import UseMemoCallback from './component/UseMemoCallback';
import ContextProvider from './component/context/ContextProvider';
import Middle from './component/context/Middle'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigator />
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/useState" element={<UseState />} />
            <Route path="/useRef" element={<UseRef />} />
            <Route path="/useRefCRUD" element={<UseRefCRUD />} />
            <Route path="/useEffect" element={<UseEffect />} />
            <Route path="/useMemo" element={<UseMemoCallback />} />
            <Route path="/useContext" element={<Middle />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

