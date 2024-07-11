import React from "react";
import "./App.css";

function Square(props) {
  
  handleClick(i) {
    if (this.findWinner(squares) | squares[i]) {
      return;
    }
    const squares = state.squares.slice();
    squares[i] = this.state.xIsNext ? "X" : "O"; // javascript's ternary operation condition ? ifTrue : ifFalse
    this.setState({squares: squares, xIsNext: !this.state.xIsNext});
  }

  handleRestartClick(){
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true
    });
  }

  return <button className="square"
    onClick={() => {props.onClick()}}>
        {props.value}
    </button>; // this.props.value กับ value ตรง line 19 คือตัวเดียวกัน โดย props นั้น read only, cannot edit

}

class Board extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null), //array with size 9 โดยที่ข้างในเป็นช่องว่าง (null) ทั้งหมด
      xIsNext: true // player's turn
    }
  }

  renderSquare(i) {
    return <Square value={pthis.state.squares[i]} onClick={() => this.handleClick(i)}/>; //value นี้แหละ เรียกว่า props
  }

  findWinner(squares) {
    const goals = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];
    for (let i = 0; i < goals.length; i++) {
    const [a, b, c] = goals[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
    return squares[a];
    }
    }
    return null;
  }
  
  render() {
    const winner = this.findWinner(this.state.squares);
    let status;
    if(winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.state.xIsNext? "X" : "O"}`;
    }

    const status = `Next player: ${this.state.xIsNext ? "X" : "O"}`;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <br/>
        <button onClick={() => this.handleRestartClick()}>Restart</button>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
function App() {
  return (
    <>
      <Game />
    </>
  );
}

export default App;
