import { useState } from 'react';
// import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useLoginQuery } from '../queries/useLoginQuery';

function Signin() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // const { logIn } = useContext(AuthContext);
  const { data: loggedUser, login, isLoggingin } = useLoginQuery();
  console.log(loggedUser, login, isLoggingin);

  function handleLogIn(e) {
    e.preventDefault();
    login(
      { userId, password },
      {
        onSettled: () => {
          setUserId('');
          setPassword('');
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
        <button disabled={isLoggingin}>Sign In</button>
      </form>
    </div>
  );
}

export default Signin;
