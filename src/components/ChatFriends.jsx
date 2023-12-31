import { useState } from 'react';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { useFriends } from '../queries/useFriends';
import useAuth from '../hooks/useAuth';

function ChatFriends() {
  const { userFriends } = useFriends();
  const [activeTab, setActiveTab] = useState('friendsTab');
  const { chatFriend, setChatFriend } = useAuth();

  // function getFriendChatContent(friendId) {
  //   const friendChatContent = chats
  //     ?.filter(
  //       (message) =>
  //         message?.fromUserId === friendId || message?.toUserId === friendId,
  //     )
  //     .slice()
  //     .sort((a, b) => a.sendAt - b.sendAt);

  //   console.log(friendChatContent);

  //   setFriendChats(friendChatContent);
  // }

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
            userFriends?.map((friend) => (
              <li
                key={friend.friendUserId}
                className={`cursor-pointer p-1 ${
                  chatFriend === friend.friendUserId
                    ? 'font-bold order-1'
                    : 'order-2'
                }`}
                onClick={() => {
                  setChatFriend(friend?.friendUserId);
                }}
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
