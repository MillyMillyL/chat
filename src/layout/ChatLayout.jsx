import { useEffect } from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

import { useLoginQuery } from '../queries/useLoginQuery';
// import { refreshToken } from '../utils/httpFetch';

function ChatLayout() {
  // const { setUser } = useContext(AuthContext);
  const { refreshLogin } = useLoginQuery();
  useEffect(() => {
    refreshLogin();
  }, [refreshLogin]);

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
