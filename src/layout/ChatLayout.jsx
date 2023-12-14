import { useContext, useEffect } from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { refreshToken } from '../utils/httpFetch';

function ChatLayout() {
  const { user, setUser } = useContext(AuthContext);
  console.log('chatLayout', user);
  useEffect(() => {
    async function refreshLogin() {
      const res = await refreshToken();
      console.log(res, 'res');
      if (res.ok) {
        let result = await res.json();
        let token = result.data.token;
        let userId = result.data.userId;
        setUser({ token, userId });
      }
    }
    refreshLogin();
  }, [setUser]);

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default ChatLayout;
