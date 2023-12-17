import { useContext, useState } from 'react';
import { useLoginQuery } from '../queries/useLoginQuery';
import { AuthContext } from '../context/AuthContext';

function Signin() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(AuthContext);

  // const { logIn } = useContext(AuthContext);
  const { login } = useLoginQuery();

  function handleLogIn(e) {
    e.preventDefault();

    const user = login(
      { userId, password },
      {
        onSettled: () => {
          setUserId('');
          setPassword('');
        },
      },
    );

    console.log(user);
    setUser(user);
  }

  return (
    <div className="container mx-auto">
      <h1>Please Sign In</h1>
      <form onSubmit={handleLogIn}>
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
        {/* <input type="checkbox" checked /> */}
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default Signin;
