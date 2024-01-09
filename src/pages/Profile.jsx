import useAuth from '../hooks/useAuth';
import { useUserInfo } from '../queries/useUserInfo';

function Profile() {
  const { user } = useAuth();
  const userInfo = useUserInfo();
  console.log(userInfo);

  return (
    <form className="container  mx-auto">
      <div>
        <label>
          User Id:
          <input
            name="userId"
            type="text"
            value={user.userId}
            onChange={() => {}}
          />
        </label>
      </div>
      <div>
        <label htmlFor="name">User Name:</label>
        <input
          id="name"
          type="text"
          value={userInfo?.name}
          onChange={() => {}}
        />
      </div>
      <div>
        <label>Gender:</label>
        <select value={userInfo?.gender} onChange={() => {}}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label>State:</label>
        <input type="text" value={userInfo?.state} onChange={() => {}} />
      </div>
      <div>
        <label>City:</label>
        <input type="text" value={userInfo?.city} onChange={() => {}} />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" value={userInfo?.address} onChange={() => {}} />
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="text" value={userInfo?.phoneNumber} onChange={() => {}} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={userInfo?.email} onChange={() => {}} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={userInfo?.password} onChange={() => {}} />
      </div>
      <div>
        <label>New Password:</label>
        <input type="password" value={userInfo?.password} onChange={() => {}} />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default Profile;
