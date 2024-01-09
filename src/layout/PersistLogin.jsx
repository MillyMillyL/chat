import { useEffect, useState } from 'react';
import { useLoginQuery } from '../queries/useLoginQuery';
import useAuth from '../hooks/useAuth';
import { Outlet } from 'react-router-dom';

function PersistLogin() {
  const [isLoading, setIsLoading] = useState(true);
  const { refreshLogin } = useLoginQuery();
  const { user, persist } = useAuth();

  useEffect(() => {
    const verifyRefreshToken = () => {
      refreshLogin();
    };

    !user?.token ? verifyRefreshToken() : setIsLoading(false);
  }, [refreshLogin, user]);

  return (
    <>
      {!persist ? <Outlet /> : isLoading ? <p>Loading aaaa...</p> : <Outlet />}
    </>
  );
}

export default PersistLogin;
