import { useEffect } from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

import { useLoginQuery } from '../queries/useLoginQuery';
import { useFriends } from '../queries/useFriends';

function ChatLayout() {
  const { refreshLogin } = useLoginQuery();
  const { userFriends } = useFriends();
  useEffect(() => {
    refreshLogin();
    console.log(userFriends);
  }, [refreshLogin, userFriends]);

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
