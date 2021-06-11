import React, { useState, useEffect, useRef } from 'react'
import { Button, Card, } from "react-bootstrap"
import { useHistory, Link } from "react-router-dom"
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
  const history = useHistory()
  const leaveGame = () => {
    history.push("/")
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
    <>
      <Card>
        <Card.Body>
          {
            game.current && game.current.game_over() ? <div> 
              <h1>Game Over! Play again?</h1>
              <Button variant="link" onClick={resetGame}>Yes</Button>
              <Button variant="link" onClick={leaveGame}>No</Button> 
            </div>: <span></span>
          }
          <ChessBoard 
            position={fen}
            onDrop={onDrop}
          /> 
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
      <Link to="/">Leave</Link>
    </div>
    </>
  );
}
