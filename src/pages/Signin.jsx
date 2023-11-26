import { useState } from 'react';

function Signin() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  // console.log(userId);
  // console.log(password);

  return (
    <div>
      <h1>Please Sign In</h1>
      <form onSubmit={handleSignin}>
        <input
          type="text"
          placeholder="User Id"
          onChange={(e) => setUserId(e.target.value)}
          value={userId}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input type="checkbox" />
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default Signin;
