import { createContext, useState } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [chatFriend, setChatFriend] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        chatFriend,
        setChatFriend,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
