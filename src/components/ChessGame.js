import React, { useState, useEffect, useRef } from 'react'
import ChessBoard from 'chessboardjsx'
import Chess from 'chess.js'

// const container = {
//   marginTop: "2rem",
//   display: "flex",
//   justifyContent: "space-around",
//   alignItem: "center"
// }


export default function ChessGame() {

  const [fen, setFen] = useState("start")

  const resetGame = () => {
    game.current.clear();
    game.current.reset();
    setFen("start")
  }

  let game = useRef(null);

  useEffect(() => {
    game.current = new Chess();
  },[])

  
  const onDrop = ({sourceSquare, targetSquare}) =>{
      let move = game.current.move({
        from: sourceSquare,
        to: targetSquare
      })
      // check for valid move
      if (move === null) return; 
      // provide the fen string
      setFen(game.current.fen())
    }

  return (
    <div className="Game">
      <header className="Game-header">
        {
          game.current && game.current.game_over() ? <div> <h1>Game Over</h1><button onClick={resetGame}>Play Again</button> </div>: <span></span>
        }
      </header>
      <ChessBoard position={fen}
      onDrop={onDrop}/> 
    </div>
  );
}
