import LoginProvider from './LoginProvider';

function CombinedContextProvider({ children }) {
  return <LoginProvider>{children}</LoginProvider>;
}

export default CombinedContextProvider;
