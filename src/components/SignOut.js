import React, { useState } from "react"
import { Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"


export default function SignOut() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try { 
      await logout()
      history.push("/login")
    } catch {
      // setError("Failed to log out")
    }
  }

  return currentUser && (
      <div className="w-100 text-center mt-2">
        {error && <Alert variant="danger">{error}</Alert>}

        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
  );
};
