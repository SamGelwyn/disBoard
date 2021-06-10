import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function DisBoard() {
  const [error, setError] = useState("")
  const { currentUser } = useAuth()
  const history = useHistory()


  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">{currentUser.email}</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Link to="/chess-game" className="btn btn-primary w-100 mt-3">
            Let's Play
          </Link>
        </Card.Body>
      </Card>
    </>
    
  )
};
