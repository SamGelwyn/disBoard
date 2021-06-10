import { useAuth } from "../contexts/AuthContext";



export function ChatMessage(props) {
  const { text, uid } = props.message;
  const { currentUser } = useAuth()
  const messageClass = uid === currentUser.uid ? 'sent' : 'received';

  return (
    <>
    <div className={`message ${messageClass}`}>

      <p>{text}</p>
    </div>
  </>
  )
};