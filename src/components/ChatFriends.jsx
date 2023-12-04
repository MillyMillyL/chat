import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';

function ChatFriends() {
  const { userFriends } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('friendsTab');
  const { chatFriend, setChatFriend } = useContext(AuthContext);

  return (
    <div>
      <div className="flex justify-around">
        <button
          className={`${
            activeTab === 'friendsTab' ? 'bg-green-500 text-white' : ''
          }`}
          onClick={() => setActiveTab('friendsTab')}
        >
          Friend List
        </button>
        <button
          className={`${
            activeTab === 'friendRequestsTab' ? 'bg-green-500 text-white' : ''
          }`}
          onClick={() => setActiveTab('friendRequestsTab')}
        >
          Friend Request
        </button>
      </div>
      {activeTab === 'friendsTab' && (
        <ul className="p-4 flex flex-col">
          {userFriends !== null &&
            userFriends.map((friend) => (
              <li
                key={friend.friendUserId}
                className={`cursor-pointer p-1 ${
                  chatFriend === friend.friendUserId
                    ? 'font-bold order-1'
                    : 'order-2'
                }`}
                onClick={() => setChatFriend(friend?.friendUserId)}
              >
                {chatFriend === friend.friendUserId && (
                  <IoChatbubbleEllipsesOutline className="inline mr-2" />
                )}
                {friend.friendName}
              </li>
            ))}
        </ul>
      )}
      {activeTab === 'friendRequestsTab' && <div>Friend requests</div>}
    </div>
  );
}

export default ChatFriends;
