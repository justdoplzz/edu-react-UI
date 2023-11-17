import React from 'react';
import {Link} from 'react-router-dom';
import './Navigator.scss';

export default function Navigator(){
  return(
    <div className="navi">
      <h2>목차</h2>
      <ul>
        <li>
          <Link to="/">홈페이지</Link>
        </li>
        <li>
          <Link to="/useState">State</Link>
        </li>
        <li>
          <Link to="/useRef">Ref</Link>
        </li>
        <li>
          <Link to="/useRefCRUD">Ref_CRUD</Link>
        </li>
        <li>
          <Link to="/useEffect">Effect</Link>
        </li>
        <li>
          <Link to="/useMemo">Memo&Callback</Link>
        </li>
        <li>
          <Link to="/useContext">Context</Link>
        </li>
      </ul>
    </div>
  )
}

