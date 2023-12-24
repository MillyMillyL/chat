import { useState } from 'react';
import ChatChat from '../components/ChatChat';
import ChatFriends from '../components/ChatFriends';
import { useChat } from '../queries/useChat';

function Chat() {
  const { chats } = useChat();
  const [friendChats, setFriendChats] = useState(null);

  return (
    <div className="container grid grid-cols-3 mx-auto">
      <ChatChat friendChats={friendChats} />
      <ChatFriends chats={chats} setFriendChats={setFriendChats} />
    </div>
  );
}

export default Chat;
