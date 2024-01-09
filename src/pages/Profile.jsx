import { useEffect, useState } from 'react';
import { useUserInfo } from '../queries/useUserInfo';
import { useUpdateUserInfo } from '../queries/useUpdateUserInfo';
import useAuth from '../hooks/useAuth';

function Profile() {
  const { user } = useAuth();
  const { userInfo, isLoading, isError, error } = useUserInfo();
  const updateUserInfo = useUpdateUserInfo();
  const [newUserInfo, setNewUserInfo] = useState({
    userId: '',
    password: '',
    newPassword: '',
    name: '',
    gender: 0,
    province: '',
    city: '',
    address: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    if (!isLoading && userInfo)
      setNewUserInfo((prev) => ({ ...prev, ...userInfo }));
  }, [isLoading, userInfo]);

  function handleChange(e) {
    const { name, value } = e.target;
    setNewUserInfo((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateUserInfo({ user, newUserInfo });
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-center">Edit Profile</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>{error.message}</p>
      ) : (
        <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
          <label>
            User Id:
            <input
              name="userId"
              type="text"
              value={newUserInfo.userId}
              onChange={handleChange}
            />
          </label>

          <label>
            User Name:
            <input
              name="name"
              type="text"
              value={newUserInfo.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Gender:
            <select
              value={newUserInfo.gender}
              onChange={handleChange}
              name="gender"
            >
              <option value={1}>Male</option>
              <option value={2}>Female</option>
              <option value={0}>Not Set</option>
            </select>
          </label>

          <label>
            State:
            <input
              type="text"
              name="province"
              value={newUserInfo.province}
              onChange={handleChange}
            />
          </label>

          <label>
            City:
            <input
              type="text"
              value={newUserInfo.city}
              onChange={handleChange}
              name="city"
            />
          </label>

          <label>
            Address:
            <input
              type="text"
              value={newUserInfo.address}
              onChange={handleChange}
              name="address"
            />
          </label>

          <label>
            Phone Number:
            <input
              name="phone"
              type="text"
              value={newUserInfo.phone}
              onChange={handleChange}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              value={newUserInfo.email}
              onChange={handleChange}
              name="email"
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              value={newUserInfo.password}
              onChange={handleChange}
              name="password"
            />
          </label>

          <label>
            New Password:
            <input
              type="password"
              value={newUserInfo.password}
              onChange={handleChange}
              name="newPassword"
            />
          </label>

          <button type="submit">Save Changes</button>
        </form>
      )}
    </div>
  );
}

export default Profile;
