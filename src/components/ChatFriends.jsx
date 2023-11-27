import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

function ChatFriends() {
  const { user } = useContext(AuthContext);
  const [friendList, setFriendList] = useState([]);

  useEffect(
    function () {
      const fetchUsers = async () => {
        try {
          const res = await fetch('/api/User/SearchFriend', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: user.token,
            },
            body: JSON.stringify({
              searchKeyword: '',
            }),
          });
          const data = await res.json();
          setFriendList(
            data.data.filter((friend) => friend.userId !== user.userId),
          );
        } catch (error) {
          alert(error);
        } finally {
          console.log('finished fetching users');
        }
      };
      fetchUsers();
    },
    [user.token, user.userId],
  );

  return (
    <div>
      <div className="flex justify-between">
        <button>Friend List</button>
        <button>Friend Request</button>
      </div>
      <div>
        {friendList.map((friend) => (
          <p key={friend.userId}>{friend.userId}</p>
        ))}
      </div>
    </div>
  );
}

export default ChatFriends;
