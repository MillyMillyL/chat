import { createContext, useState, useCallback } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [chatFriend, setChatFriend] = useState(null);
  const [chatContent, setChatContent] = useState(null);

  const fetchChatContent = useCallback(async () => {
    try {
      const res = await fetch('api/ChatMessage/GetUserChatMessage', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: user.token,
        },
      });
      const data = await res.json();

      setChatContent(data.data);
    } catch (error) {
      alert(error);
    }
  }, [user?.token]);

  const [friendLiveChatContent, setFriendLiveChatContent] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        chatFriend,
        setChatFriend,
        fetchChatContent,
        chatContent,
        friendLiveChatContent,
        setFriendLiveChatContent,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
