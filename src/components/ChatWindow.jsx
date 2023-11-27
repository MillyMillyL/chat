import ChatChat from './ChatChat';
import ChatFriends from './ChatFriends';

function ChatWindow() {
  return (
    <div className="container grid grid-cols-3 mx-auto">
      <ChatChat />
      <ChatFriends />
    </div>
  );
}

export default ChatWindow;
