import React from 'react';
import './scss/ScoreTable.scss';


export default function ScoreTable(props){

  return(
    <div className="tableWindow">
      <h2>Score</h2>
      <table>
        <tbody>
          <tr>
            <td>1</td><td>{props.yourname}</td><td>3874125</td>
          </tr>
          <tr>
            <td>2</td><td>Lorem</td><td>3865114</td>
          </tr>
          <tr>
            <td>3</td><td>Ipsum</td><td>3814514</td>
          </tr>
          <tr>
            <td>4</td><td>Dolor</td><td>3754121</td>
          </tr>
          <tr>
            <td>5</td><td>Sit</td><td>3721245</td>
          </tr>
          <tr>
            <td>6</td><td>Amet</td><td>3644121</td>
          </tr>
          <tr>
            <td>7</td><td>Kim</td><td>3611450</td>
          </tr>
          <tr>
            <td>8</td><td>Cheol</td><td>3554512</td>
          </tr>
          <tr>
            <td>9</td><td>Su</td><td>3512451</td>
          </tr>
          <tr>
            <td>10</td><td>Tim</td><td>3494212</td>
          </tr>
        </tbody>
      </table>
      <button onClick={window.close}>Close</button>
    </div>
  )
}

