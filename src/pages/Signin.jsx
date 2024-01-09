import { useEffect, useRef, useState } from 'react';
import { useLoginQuery } from '../queries/useLoginQuery';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

function Signin() {
  const userIdRef = useRef();
  const errRef = useRef();

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const { login, isLoginError, loginError } = useLoginQuery();

  useEffect(() => {
    userIdRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [userId, password]);

  useEffect(() => {
    if (isLoginError) setErrMsg(loginError.message);
  }, [isLoginError, loginError]);

  async function handleLogIn(e) {
    e.preventDefault();

    login(
      { userId, password },
      {
        onSuccess: () => {
          toast.success(`${userId}, You are logged in`);
        },
        onSettled: () => {
          setUserId('');
          setPassword('');
        },
        onError: () => {
          errRef.current.focus();
        },
      },
    );
  }

  return (
    <section className="container max-w-[420px] min-h-[400px] mx-auto flex flex-col justify-start p-[1rem] bg-gray-300">
      <p
        ref={errRef}
        className={errMsg ? 'text-red-500' : 'offscreen'}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>Sign In</h1>
      <form
        onSubmit={handleLogIn}
        className="flex flex-col justify-evenly flex-grow pb-[1rem]"
      >
        <label htmlFor="username">User Name:</label>
        <input
          id="username"
          type="text"
          onChange={(e) => setUserId(e.target.value)}
          value={userId}
          className="border-1 w-full rounded-md"
          ref={userIdRef}
          autoComplete="off"
          required
        />
        <label htmlFor="pass">Password:</label>
        <input
          id="pass"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="border-1 w-full rounded-md"
          required
        />
        {/* <input type="checkbox" checked /> */}
        <button>Sign In</button>
      </form>
      <p>Need an account?</p>
      <Link to="/signup">Sign Up</Link>
    </section>
  );
}

export default Signin;
