import { useFriends } from '../queries/useFriends';
import { useUsers } from '../queries/useUsers';

function FindFriend() {
  const users = useUsers();
  const { userFriends } = useFriends();

  function isFriend(userId) {
    if (userFriends.some((friend) => friend.friendUserId === userId))
      return true;

    return false;
  }

  const friendStatus = (userId) => {
    const status = userFriends.find(
      (friend) => friend.friendUserId === userId,
    ).friendStatus;

    return status;
  };

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
          {users?.map((user) => (
            <tr key={user.userId}>
              <td className="px-4 py-2">{user.userId}</td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">
                {user.gender === 0
                  ? 'NotSet'
                  : user.gender === 1
                    ? 'Male'
                    : user.gender === 2
                      ? 'Female'
                      : user.gender === 3
                        ? 'Unknown'
                        : 'Unknown Gender'}
              </td>
              <td className="px-4 py-2">{user.province}</td>
              <td className="px-4 py-2">{user.city}</td>
              <td className="px-4 py-2">
                {/* need to optimize the status check */}
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
