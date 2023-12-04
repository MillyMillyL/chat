import { createContext, useState, useCallback } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [userFriends, setUserFriends] = useState(null);
  const [chatFriend, setChatFriend] = useState(null);
  const [chatContent, setChatContent] = useState(null);

  async function logIn(userData) {
    const { userId, password } = userData;
    try {
      // Make a POST request to your authentication endpoint
      const res = await fetch('/api/User/SignIn', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          password,
          keepLoggedIn: true,
        }),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setUser(data.data);
      alert('Logged in');
    } catch (error) {
      // Handle errors, such as incorrect credentials
      console.error('Error during authentication:', error);
    }
    setIsAuthenticated(true);
  }

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

  const currentChatContent = chatContent
    ?.filter(
      (message) =>
        message?.fromUserId === chatFriend || message?.toUserId === chatFriend,
    )
    .slice()
    .sort((a, b) => a.sendAt - b.sendAt);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        logIn,
        fetchUserFriends,
        userFriends,
        chatFriend,
        setChatFriend,
        fetchChatContent,
        chatContent,
        currentChatContent,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
