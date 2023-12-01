import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

function FindFriend() {
  const { user, userFriends } = useContext(AuthContext);
  const [userList, setUserList] = useState([]);
  console.log(userList);
  console.log(userFriends);
  // const userFriendsIds = userFriends.map((friend) => friend.friendUserId);
  // console.log(userFriendsIds);

  //需优化，可能不需要两个function

  function isFriend(userId) {
    if (userFriends.some((friend) => friend.friendUserId === userId))
      return true;

    return false;
  }

  const friendStatus = (userId) => {
    const status = userFriends.find(
      (friend) => friend.friendUserId === userId,
    ).friendStatus;
    console.log(status);
    return status;
  };

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
          setUserList(data.data);
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
    <div className="container mx-auto">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr className="border-b">
            {[
              'User ID',
              'Name',
              'Gender',
              'Province',
              'City',
              'Friend Status',
            ].map((th) => (
              <th key={th} className="text-left py-2 px-4">
                {th}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.userId}>
              <td className="px-4 py-2">{user.userId}</td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">
                <button>
                  {isFriend(user.userId)
                    ? friendStatus(user.userId) === 2
                      ? 'Accepted'
                      : 'requested'
                    : 'Add Friend'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FindFriend;
