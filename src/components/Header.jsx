import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { NavLink, useNavigate } from 'react-router-dom';
import { useLogout } from '../queries/useLogout';

function Header() {
  const { user } = useContext(AuthContext);
  const { LogOut } = useLogout();
  const navigate = useNavigate();

  function handleSignOut(e) {
    console.log('lougout event started');
    e.preventDefault();
    LogOut();
    navigate('/');
  }

  return (
    <header className="container mx-auto flex flex-row justify-between mb-6">
      <p className="inline-block">Welcome {user?.userId}</p>
      <nav className="flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/chat">Chat</NavLink>
        <NavLink to="/findfriend">Find Friend</NavLink>
        <NavLink to="#">Profile</NavLink>
        <button onClick={handleSignOut}>Sign Out</button>
      </nav>
    </header>
  );
}

export default Header;
