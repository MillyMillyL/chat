import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Outlet, useLocation, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

import { useLoginQuery } from '../queries/useLoginQuery';

function ChatLayout() {
  const { refreshLogin, refreshLoginMutate } = useLoginQuery();
  const { isLoggedIn, user } = useAuth();
  const location = useLocation();

  const [tokenRefreshed, setTokenRefreshed] = useState(false);

  console.log(isLoggedIn === false && tokenRefreshed == false, 'auth test');

  if (isLoggedIn === false && tokenRefreshed == false) {
    setTokenRefreshed(true);
    refreshLogin();
    return;
  }

  console.log(refreshLoginMutate, 'refreshLoginMutate');

  // if (user === null) return <div>loading......</div>;
  if (refreshLoginMutate.isPending) return <div>loading......</div>;

  return user?.token ? (
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
