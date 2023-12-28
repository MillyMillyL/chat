import ChatChat from '../components/ChatChat';
import ChatFriends from '../components/ChatFriends';

function Chat() {
  return (
    <div className="container grid grid-cols-3 mx-auto">
      <ChatChat />
      <ChatFriends />
    </div>
  );
}

export default Chat;
