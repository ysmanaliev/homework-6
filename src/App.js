
import Car from './Car';
import Fruit from './Fruit'
function App() {
	
const fruits=
	{
	name:"Mango",
	color:"Yellow"
	}

return (
	<div className="App">
	<Fruit fruits={fruits} />
  <hr></hr>
  <Car />
	</div>
);
}

export default App;


































// // import { useState, useEffect } from 'react';
// // function Clock(){
// //   const [date, setDate] = useState(new Date());
  
// //   function refreshClock() {
// //     setDate(new Date());
// //   }
// //   useEffect(() => {
// //     const timerId = setInterval(refreshClock, 1000);
// //     return function cleanup() {
// //       clearInterval(timerId);
// //     };
// //   }, []);
// //   return (
// //     <span className='clock'>
// //       {date.toLocaleTimeString()}:PM
// //     </span>
// //   );
// // }
// // export default Clock;







// import React from "react";
// import Clock from "./clock";


// function Square (props){
    
//         return(
//             <button className="square" onClick={props.onClick}>
//               {props.value}
//             </button>
            
//         )
//     }


// class Board extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//           squares: Array(9).fill(null),
//           xIsNext: true, 
//         }
//     }

//     handleClick(i){
//       const squares = this. state.squares.slice.slice();
//       if (calculateWinner(squares)|| squares[i]){
//         return;
//       }
//       squares:[i] = this.state.xIsNext ? "X" : "O";
//       this. setState({
//         squares: squares,
//         xIsNext: ! this.state.xIsNext,
//       })
//     }

//     renderSquare (i){
//       return(
//         <Square
//         value= {this.state.squares[i]}
//         onClick={() =>this.handleClick(i)}
//         />
//       )
//     }


//     render (){
//         const status = "Следующий игрок: X " + (this. state.xIsNext ? "X": "O");
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
// function calculateWinner (squares){
//   const lines = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6],
//   ];
// for (let i= 0; i < length; i++){
//   const [a,b,c] = lines[i];
//   if (squares [a] && squares[a]===squares [b] && squares[b]===squares[c] && squares[c])
  
//   }
  
// }

// export default Game ;



// //--------------------------------------------



