import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { NavLink } from 'react-router-dom';

function Header() {
  const { user } = useContext(AuthContext);

  return (
    <header className="container mx-auto flex flex-row justify-between mb-6">
      <p className="inline-block">Welcome {user?.userId}</p>
      <nav className="flex gap-4">
        <NavLink to="/chat">Chat</NavLink>
        <NavLink to="/findfriend">Find Friend</NavLink>
        <NavLink to="#">Profile</NavLink>
        <NavLink to="#">Sign Out</NavLink>
      </nav>
    </header>
  );
}

export default Header;
