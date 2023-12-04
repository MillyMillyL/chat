import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function ChatChat() {
  const { currentChatContent, user, chatFriend } = useContext(AuthContext);
  console.log(currentChatContent, user, chatFriend);
  return (
    <div className="col-span-2 border flex flex-col">
      <ul className="min-h-[10rem] ">
        {currentChatContent.map((message) =>
          message.fromUserId === user.userId ? (
            <li key={message.id} className="text-right">
              <p>{message.sendAt} (you)</p>
              <p>{message.message}</p>
            </li>
          ) : (
            <li key={message.id}>
              <p>
                {chatFriend} {message.sendAt}
              </p>
              <p>{message.message}</p>
            </li>
          ),
        )}
      </ul>
      <textarea
        rows="5"
        className="w-[95%] border mx-auto "
        placeholder="enter message"
        defaultValue="Enter your message"
      ></textarea>
      <button>Send</button>
    </div>
  );
}

export default ChatChat;
