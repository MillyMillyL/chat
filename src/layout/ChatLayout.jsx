import Header from '../components/Header';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function ChatLayout() {
  const { user } = useAuth();
  const location = useLocation();

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
