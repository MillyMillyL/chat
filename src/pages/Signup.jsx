import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSignUp } from '../queries/useSignUp';
import { IoMdInformationCircleOutline } from 'react-icons/io';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PSW_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function Signup() {
  const userRef = useRef();
  const errRef = useRef();

  const [userId, setUserId] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [validPsw, setValidPsw] = useState(false);
  const [pswFocus, setPswFocus] = useState(false);

  const [matchPsw, setMatchPsw] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const { signUp } = useSignUp();

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef?.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(userId);
    setValidName(result);
  }, [userId]);

  useEffect(() => {
    const result = PSW_REGEX.test(password);
    setValidPsw(result);
    const match = password === matchPsw;
    setValidMatch(match);
  }, [password, matchPsw]);

  useEffect(() => {
    setErrMsg('');
  }, [userId, password, matchPsw]);

  async function handleSignup(e) {
    e.preventDefault();
    //if button enabled with JS hack
    const v1 = USER_REGEX.test(userId);
    const v2 = PSW_REGEX.test(password);
    if (!v1 || !v2) {
      setErrMsg('Invalid entry');
      return;
    }

    const res = await signUp({ userId, password });

    if (res.code !== 2000) {
      setErrMsg(res.message);
    } else {
      setSuccess(true);
    }
  }

  return (
    <>
      {success ? (
        <section className="container max-w-[420px] min-h-[400px] mx-auto flex flex-col justify-start p-[1rem] bg-gray-300">
          <h1>Success!</h1>
          <Link to="/signin">Signin</Link>
        </section>
      ) : (
        <section className="container max-w-[420px] min-h-[400px] mx-auto flex flex-col justify-start p-[1rem] bg-gray-300">
          <p
            ref={errRef}
            className={errMsg ? 'text-red-500' : 'offscreen'}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign Up</h1>
          <form
            onSubmit={handleSignup}
            className="flex flex-col justify-evenly flex-grow pb-[1rem]"
          >
            {/* user ID */}
            <label htmlFor="userId">
              User ID:
              <span className={validName ? 'text-green-500' : 'hidden'}>
                Yes
              </span>
              <span
                className={validName || !userId ? 'hidden' : 'text-red-500'}
              >
                No
              </span>
            </label>
            <input
              className="border-1 w-full rounded-md"
              type="text"
              id="userId"
              onChange={(e) => setUserId(e.target.value)}
              value={userId}
              ref={userRef}
              autoComplete="off"
              required
              aria-invalid={validName ? 'false' : 'true'}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={
                userFocus && userId && !validName ? 'text-red-500' : 'offscreen'
              }
            >
              <IoMdInformationCircleOutline />
              4-24 characters. <br />
              Must begin with a letter. <br />
              Letters, numers, uderscores, hyphens allowed. <br />
            </p>
            {/* password */}
            <label htmlFor="password" className="block">
              Password:{' '}
              <span className={validPsw ? 'text-green-500' : 'hidden'}>
                Yes
              </span>
              <span
                className={validPsw || !password ? 'hidden' : 'text-red-500'}
              >
                No
              </span>
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="border-1 w-full rounded-md"
              required
              aria-invalid={validPsw ? 'false' : 'true'}
              aria-describedby="pswnote"
              onFocus={() => setPswFocus(true)}
              onBlur={() => setPswFocus(false)}
            />
            <p
              id="pswnote"
              className={pswFocus && !validPsw ? 'text-red-500' : 'offscreen'}
            >
              <IoMdInformationCircleOutline />
              8-24 characters. <br />
              Must include uppercase and lowercase letters, a number and a
              special character. <br />
              Allowed special characters:{' '}
              <span aria-label="exclamation mark">!</span>
              <span aria-label="at symbol">@</span>
              <span aria-label="hashtag">#</span>
              <span aria-label="dollar sign">$</span>. <br />
            </p>
            {/* repeat password */}
            <label htmlFor="conform_password" className="block">
              Password:{' '}
              <span
                className={validMatch && matchPsw ? 'text-green-500' : 'hidden'}
              >
                Yes
              </span>
              <span
                className={validMatch || !matchPsw ? 'hidden' : 'text-red-500'}
              >
                No
              </span>
            </label>
            <input
              type="password"
              id="conform_password"
              onChange={(e) => setMatchPsw(e.target.value)}
              required
              aria-invalid={validMatch ? 'false' : 'true'}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? 'text-red-500' : 'offscreen'
              }
            >
              <IoMdInformationCircleOutline />
              Must match the first password input field.
            </p>
            <button
              disabled={!validName || !validPsw || !validMatch ? true : false}
            >
              Sign Up
            </button>
          </form>
          <p>Already have an account?</p>
          <Link to="/signin">Sign in</Link>
        </section>
      )}
    </>
  );
}

export default Signup;
