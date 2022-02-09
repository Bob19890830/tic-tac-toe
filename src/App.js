import './App.css';
import {useState} from 'react';

function App() {

  const Square = (props) => {

    return(
      <button className ="square" onClick={() => props.onClick('X')}>
        {props.value}
      </button>
    )
  }

  const Board = (props) => {

    const [squares, setSquare] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState(true);

    const handleClick = (i) => {

      const Squares = squares.slice();
      if(calculateWinner(squares) || squares[i]){
        return;
      }
      
      Squares[i] = player? 'X': 'O';
      setSquare(Squares);
      setPlayer(!player);
    }

    const renderSquare = (i) => {
      return (
      <Square value={squares[i]} 
       onClick={() => handleClick(i)}
      />);
    }

    let status;
    const winner = calculateWinner(squares);

    if(winner){
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (player? 'X' : 'O');
    }

    return(
      <div>
        <div className='status'>{status}</div>
        <div className='board-row'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className='board-row'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className='board-row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    )
  }

  const Game = () => {
    return(
      <div className='gmae'>
        <div className='game-board'>
          <Board />
        </div>
        <div className='game-info'>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div className="App">
      <header className="App-header">
        <Game />
      </header>
    </div>
  );
}

export default App;
