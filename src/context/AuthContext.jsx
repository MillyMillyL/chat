import { createContext, useState } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [chatFriend, setChatFriend] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [persist, setPersist] = useState(
    JSON.parse(localStorage.getItem('persist') || false),
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        chatFriend,
        setChatFriend,
        isLoggedIn,
        setIsLoggedIn,
        persist,
        setPersist,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
