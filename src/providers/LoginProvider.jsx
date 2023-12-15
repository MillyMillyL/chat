import { useReducer } from 'react';
import { loginReducer } from '../reducers/loginReducer';
import loginContext from '../context/LoginContext';

const LoginProvider = ({ children }) => {
  const loginInitialState = { isAuthenticated: false, user: null };

  const [loginState, loginDispatch] = useReducer(
    loginReducer,
    loginInitialState,
  );

  return (
    <loginContext.Provider value={(loginState, loginDispatch)}>
      {children}
    </loginContext.Provider>
  );
};

export default LoginProvider;
