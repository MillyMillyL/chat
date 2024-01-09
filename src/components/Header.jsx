import { NavLink, useNavigate } from 'react-router-dom';
import { useLogout } from '../queries/useLogout';
import useAuth from '../hooks/useAuth';

function Header() {
  const { user } = useAuth();
  const { LogOut } = useLogout();
  const navigate = useNavigate();

  function handleSignOut(e) {
    e.preventDefault();
    LogOut();
    navigate('/');
  }

  return (
    <header className="container mx-auto flex flex-row justify-between mb-6">
      <p className="inline-block">Welcome {user?.name || user?.userId}</p>
      <nav className="flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/chat">Chat</NavLink>
        <NavLink to="/findfriend">Find Friend</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <button onClick={handleSignOut}>Sign Out</button>
      </nav>
    </header>
  );
}

export default Header;
