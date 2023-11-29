import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function ChatFriends() {
  const { userFriends } = useContext(AuthContext);
  console.log(userFriends);

  return (
    <div>
      <div className="flex justify-between">
        <button>Friend List</button>
        <button>Friend Request</button>
      </div>
      <div>
        {userFriends.map((friend) => (
          <p key={friend.friendUserId}>{friend.friendName}</p>
        ))}
      </div>
    </div>
  );
}

export default ChatFriends;
