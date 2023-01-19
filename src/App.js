
import { useState, useEffect } from 'react';
function Clock(){
  const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <span className='clock'>
      {date.toLocaleTimeString()}:PM
    </span>
  );
}
export default Clock;







// import React from "react";
// import Clock from "./clock";


// class Square extends React.Component{
//     render(){
//         return(
//             <button className="square">

//             </button>
            
//         )
//     }
// }


// class Board extends React.Component{
//     renderSquare(i){
//         return<Square/>
//     }
//     render (){
//         const status = "Следующий игрок: X ";
//         return (
//             <div>
                
//                 <div className="status">{status}</div>
//                 <div className="board-row">
//                     {this.renderSquare(0)}
//                     {this.renderSquare(1)}
//                     {this.renderSquare(2)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(3)}
//                     {this.renderSquare(4)}
//                     {this.renderSquare(5)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(6)}
//                     {this.renderSquare(7)}
//                     {this.renderSquare(8)}
//                 </div>
//             </div>
//         )
//     }
// }


// class  Game extends React.Component{
//     render(){
//         return (
//             <div className="game">
//                 <div className="game-board">
//                     <Board />
//                     <Clock />
//                 </div>
//                 <div className="game-info">
//                     <div></div>
//                     <ol></ol>
//                 </div>
//             </div>
//         );
//     }
// }


// export default Game ;



//--------------------------------------------



