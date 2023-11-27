import { createContext, useState } from 'react';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  async function logIn(userData, e) {
    e.preventDefault();
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

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, logIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
