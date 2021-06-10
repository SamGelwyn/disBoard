import './App.css';
import ChessGame from './components/ChessGame'
import React from "react"
import Signup from "./components/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import DisBoard from "./components/disBoard"
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile"
import SignOut from "./components/SignOut"
import ChatRoom from "./components/ChatRoom"

export default function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
      <AuthProvider>
        <header>
          <h1>disBoard</h1>
          <nav>

            <SignOut />

          </nav>
        </header>

        <div className="w-100" style={{ maxWidth: "600px" }}>
          <Router>

              <Switch>
                <PrivateRoute exact path="/" component={DisBoard} />
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <PrivateRoute path="/chess-game" component={ChessGame} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
              </Switch>

          </Router>
        </div>
        <div classname="w-100" style={{display: 'inline-block',
          maxWidth: '300px'}}>
          <ChatRoom />
        </div>
      </AuthProvider>
    </Container>
  );
}