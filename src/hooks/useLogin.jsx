import { useContext } from 'react';
import loginContext from '../context/LoginContext';

const useLogin = () => {
  const context = useContext(loginContext);
  if (!context) {
    throw new Error('useLogin must be used within LoginProvider');
  }
  return context;
};

export default useLogin;
