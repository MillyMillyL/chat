import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

function FindFriend() {
  const { user } = useContext(AuthContext);
  const [friendList, setFriendList] = useState([]);
  console.log(friendList);

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
          {friendList.map((friend) => (
            <tr key={friend.userId}>
              <td className="px-4 py-2">{friend.userId}</td>
              <td className="px-4 py-2">{friend.name}</td>
              <td className="px-4 py-2">{friend.name}</td>
              <td className="px-4 py-2">{friend.name}</td>
              <td className="px-4 py-2">{friend.name}</td>
              <td className="px-4 py-2">
                <button>Add Friend</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FindFriend;
