import { createContext, useState } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [chatFriend, setChatFriend] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        chatFriend,
        setChatFriend,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
