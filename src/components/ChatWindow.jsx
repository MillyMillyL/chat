import { useContext, useEffect } from 'react';
import ChatChat from './ChatChat';
import ChatFriends from './ChatFriends';
import { AuthContext } from '../context/AuthContext';

function ChatWindow() {
  const { fetchUserFriends } = useContext(AuthContext);

  useEffect(() => {
    fetchUserFriends();
  }, [fetchUserFriends]);

  return (
    <div className="container grid grid-cols-3 mx-auto">
      <ChatChat />
      <ChatFriends />
    </div>
  );
}

export default ChatWindow;
