import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { NavLink } from 'react-router-dom';

function Header() {
  const { user } = useContext(AuthContext);
  return (
    <header className="container mx-auto flex flex-row justify-between mb-6">
      <p className="inline-block">Welcome {user?.userId}</p>
      <nav className="flex gap-4">
        <NavLink href="#">Chat</NavLink>
        <NavLink href="#">Find Friend</NavLink>
        <NavLink href="#">Profile</NavLink>
        <NavLink href="#">Sign Out</NavLink>
      </nav>
    </header>
  );
}

export default Header;
