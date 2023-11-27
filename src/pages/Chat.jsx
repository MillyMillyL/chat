import { useContext } from 'react';
import ChatWindow from '../components/ChatWindow';
import { AuthContext } from '../context/AuthContext';

function Chat() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <header className="container mx-auto flex flex-row justify-between">
        <p className="inline-block">Welcome {user?.userId}</p>
        <div className="flex gap-4">
          <a href="#">Chat</a>
          <a href="#">Find Friend</a>
          <a href="#">Profile</a>
          <a href="#">Sign Out</a>
        </div>
      </header>
      <ChatWindow />
    </>
  );
}

export default Chat;
