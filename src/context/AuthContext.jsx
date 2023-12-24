import { createContext, useState } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [chatFriend, setChatFriend] = useState(null);

  const [friendLiveChatContent, setFriendLiveChatContent] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        chatFriend,
        setChatFriend,
        friendLiveChatContent,
        setFriendLiveChatContent,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
