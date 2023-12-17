import { createContext, useState, useCallback } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userFriends, setUserFriends] = useState(null);
  const [chatFriend, setChatFriend] = useState(null);
  const [chatContent, setChatContent] = useState(null);

  const fetchUserFriends = useCallback(async () => {
    try {
      const res = await fetch('/api/UserFriend/GetUserFriends', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: user.token,
        },
        body: JSON.stringify({
          userId: 'aaa',
          blocked: false,
        }),
      });
      const data = await res.json();

      setUserFriends(data.data);
    } catch (error) {
      alert(error);
    }
  }, [user?.token]);

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

  function getFriendChatContent(friendId) {
    const friendChatContent = chatContent
      ?.filter(
        (message) =>
          message?.fromUserId === friendId || message?.toUserId === friendId,
      )
      .slice()
      .sort((a, b) => a.sendAt - b.sendAt);

    setFriendLiveChatContent(friendChatContent);
  }

  const [friendLiveChatContent, setFriendLiveChatContent] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        // isAuthenticated,
        user,
        setUser,
        fetchUserFriends,
        userFriends,
        chatFriend,
        setChatFriend,
        fetchChatContent,
        chatContent,
        friendLiveChatContent,
        setFriendLiveChatContent,
        getFriendChatContent,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
