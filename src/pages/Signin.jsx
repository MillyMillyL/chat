import { useState } from 'react';
// import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import useLogin from '../hooks/useLogin';
import { useLoginQuery } from '../queries/useLoginQuery';

function Signin() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // const { logIn } = useContext(AuthContext);
  const { loginState, loginDispatch } = useLogin();
  const { data, isloading, error } = useLoginQuery({ userId, password });
  console.log(loginState, loginDispatch);

  async function handleLogIn(e) {
    e.preventDefault();
    loginDispatch('login');
    navigate('/chat');
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
