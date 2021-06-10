import React, { useRef, useState } from 'react';
import { Form, Card, Button } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import firebase from "firebase/app"
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { ChatMessage } from "./ChatMessage";
import { FormControl } from 'react-bootstrap';

export default function ChatRoom() {
  const { currentUser } = useAuth()
  const focus = useRef();
  const messagesRef = db.collection('messages');
  const query = messagesRef.orderBy('createdAt').limitToLast(20);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid } = currentUser

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
    })

    setFormValue('');
    focus.current.scrollIntoView({ behavior: 'smooth' });
  }

  return currentUser && (
    <>
      <Card>
        <Card.Body>
        
          <main>

          {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

          <span ref={focus}></span>

          </main>

          <Form onSubmit={sendMessage}>
            <Form.Row>
              <Form.Group id="formMessage">

                <Form.Control value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Write Message Here..." />

              </Form.Group>

              <Button className="w-100" variant="primary" type="submit" disabled={!formValue}>🕊️</Button>

            </Form.Row>



          </Form>

        </Card.Body>
        
      </Card>
    </>
  )
};