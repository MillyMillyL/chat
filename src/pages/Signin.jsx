import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { logIn } = useContext(AuthContext);

  async function handleLogIn(e) {
    await logIn({ userId, password }, e);
    navigate('/chat');
  }

  return (
    <div>
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
        <input type="checkbox" checked />
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default Signin;
