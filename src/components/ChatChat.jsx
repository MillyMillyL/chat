import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { IoCheckmark } from 'react-icons/io5';
import { IoCheckmarkDone } from 'react-icons/io5';

function ChatChat({ friendChats }) {
  const { user, chatFriend, friendLiveChatContent, setFriendLiveChatContent } =
    useContext(AuthContext);
  const [message, setMessage] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('api/ChatMessage/SendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: user.token,
        },
        body: JSON.stringify({ toUserId: chatFriend, message: message }),
      });
      const data = await res.json();

      setFriendLiveChatContent([...friendLiveChatContent, data.data]);
      setMessage('');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="col-span-2 border flex flex-col p-2">
      <ul className="min-h-[10rem] max-h-[70vh] overflow-y-auto ">
        {friendChats?.map((message) =>
          message.fromUserId === user.userId ? (
            <li key={message.id} className="text-right mb-3">
              <p>{message.sendAt} (you)</p>
              <p>{message.message}</p>
              {message.isSent & message.isRead ? (
                <IoCheckmarkDone className="text-green-500 inline-block" />
              ) : message.isSent ? (
                <IoCheckmark className="inline-block text-gray-500" />
              ) : null}
            </li>
          ) : (
            <li key={message.id} className="mb-3">
              <p>
                {chatFriend} {message.sendAt}
              </p>
              <p>{message.message}</p>
            </li>
          ),
        )}
      </ul>
      <form>
        <input
          className="block w-full border border-gray-500 p-4 rounded-lg "
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={
            chatFriend ? 'Type your message' : 'Click a friend to start chat'
          }
          disabled={!chatFriend}
        ></input>
        <button
          className="block w-full border border-slate-500 mt-4 rounded-lg py-1 bg-slate-400 text-white font-bold hover:bg-slate-500 transition"
          type="submit"
          onClick={sendMessage}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ChatChat;
