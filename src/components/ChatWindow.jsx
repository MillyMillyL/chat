import { useContext, useEffect } from 'react';
import ChatChat from './ChatChat';
import ChatFriends from './ChatFriends';
import { AuthContext } from '../context/AuthContext';
// import useFriends from '../queries/useFriends';

function ChatWindow() {
  const { fetchUserFriends, fetchChatContent } = useContext(AuthContext);

  useEffect(() => {
    fetchUserFriends();
  }, [fetchUserFriends]);

  useEffect(() => {
    fetchChatContent();
  }, [fetchChatContent]);

  return (
    <div className="container grid grid-cols-3 mx-auto">
      <ChatChat />
      <ChatFriends />
    </div>
  );
}

export default ChatWindow;
