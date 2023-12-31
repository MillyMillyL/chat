import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Home() {
  const { user } = useAuth();

  return (
    <div className="container flex flex-col justify-center items-center">
      <h1>Welcome to Chat, {user?.userId ? user?.userId : 'Please Login'}</h1>
      <nav className="mt-6 flex gap-6">
        {!user && <NavLink to="/signin">SignIn</NavLink>}
        {!user && <NavLink to="/signup">SignUp</NavLink>}
        {user && <NavLink to="/chat">Chat</NavLink>}
        {user && <NavLink to="/findfriend">Find Friend</NavLink>}
      </nav>
    </div>
  );
}

export default Home;
