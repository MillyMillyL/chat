import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignUp } from '../queries/useSignUp';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PSW_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Signup() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const signUp = useSignUp();

  async function handleSignup(e) {
    e.preventDefault();

    signUp({ userId, password });
    navigate('/signin');
  }
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="userId"
          onChange={(e) => setUserId(e.target.value)}
          value={userId}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input type="password" placeholder="Repeat your password" />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
