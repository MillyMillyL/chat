import useAuth from '../hooks/useAuth';
import { useUsers } from '../queries/useUsers';

function Profile() {
  const { user } = useAuth();
  const users = useUsers();
  console.log(users);
  const userInfo = users?.filter((userI) => userI.userId === user.userId);
  console.log(userInfo);
  return (
    <form className="container  mx-auto">
      <div>
        <label>Name:</label>
        <input type="text" value={user.userId} onChange={() => {}} />
      </div>
      <div>
        <label>Gender:</label>
        <select value={userInfo.gender} onChange={() => {}}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label>State:</label>
        <input type="text" value={userInfo.state} onChange={() => {}} />
      </div>
      <div>
        <label>City:</label>
        <input type="text" value={userInfo.city} onChange={() => {}} />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" value={userInfo.address} onChange={() => {}} />
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="text" value={userInfo.phoneNumber} onChange={() => {}} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={userInfo.email} onChange={() => {}} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={userInfo.password} onChange={() => {}} />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default Profile;
