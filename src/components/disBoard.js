import React from "react"
import { Card } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function DisBoard() {
  const { currentUser } = useAuth()
 


  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">{currentUser.email}</h2>
          <Link to="/chess-game" className="btn btn-success w-100 mt-3">
            Let's Play ♟
          </Link>
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
          Update Profile
        </Link>
        </Card.Body>
      </Card>

    </>
    
  )
};
