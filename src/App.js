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

    const handleClick = (i) => {

      const Squares = squares.slice();
      Squares[i] = 'X';
      setSquare(Squares);
    }

    const renderSquare = (i) => {
      return (
      <Square value={squares[i]} 
       onClick={() => handleClick(i)}
      />);
    }

    const status = 'Next player: X';

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

  return (
    <div className="App">
      <header className="App-header">
        <Game />
      </header>
    </div>
  );
}

export default App;
