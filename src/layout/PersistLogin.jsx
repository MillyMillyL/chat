import { useEffect, useState } from 'react';
import { useLoginQuery } from '../queries/useLoginQuery';
import useAuth from '../hooks/useAuth';
import { Outlet } from 'react-router-dom';

function PersistLogin() {
  const [isLoading, setIsLoading] = useState(true);
  const { refreshLogin } = useLoginQuery();
  const { user } = useAuth();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      await refreshLogin();
    };
    !user?.token ? verifyRefreshToken() : setIsLoading(false);
  }, [refreshLogin, user]);

  useEffect(() => {
    console.log(`isLoading: ${isLoading}`);
    console.log(`auth: ${JSON.stringify(user?.token)}`);
  }, [isLoading]);
  return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
}

export default PersistLogin;
