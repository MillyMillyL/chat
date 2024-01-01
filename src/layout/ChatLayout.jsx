import { useState } from 'react';
import Header from '../components/Header';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

import { useLoginQuery } from '../queries/useLoginQuery';

function ChatLayout() {
  //check if logged in and refresh loggin when refresh page
  const { refreshLogin } = useLoginQuery();
  const { isLoggedIn, user } = useAuth();
  const location = useLocation();

  const [tokenRefreshed, setTokenRefreshed] = useState(false);

  if (isLoggedIn === false && tokenRefreshed == false) {
    setTokenRefreshed(true);
    refreshLogin(); //if error, navigate to signin, if success,setUser
    return;
  }

  if (!user) return <div>loading......</div>;

  return user ? (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
}

export default ChatLayout;
