import { useState } from 'react';
import { useLoginQuery } from '../queries/useLoginQuery';
import useAuth from '../hooks/useAuth';

function Signin() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useLoginQuery();
  const { setIsLoggedIn } = useAuth();

  function handleLogIn(e) {
    e.preventDefault();

    login(
      { userId, password },
      {
        onSettled: () => {
          setUserId('');
          setPassword('');
          setIsLoggedIn(true);
        },
      },
    );
  }

  return (
    <div className="container mx-auto">
      <h1>Please Sign In</h1>
      <form onSubmit={handleLogIn}>
        <input
          type="text"
          placeholder="User Id"
          name="userId"
          onChange={(e) => setUserId(e.target.value)}
          value={userId}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {/* <input type="checkbox" checked /> */}
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default Signin;
