import { useContext } from 'react';
import { NavLink, useRouteLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Home() {
  const userId = useRouteLoaderData('root');
  const { user } = useContext(AuthContext);

  return (
    <div className="container flex flex-col justify-center items-center">
      <h1>
        {userId ? userId : null}, {user?.userId} Welcome to Chat
      </h1>
      <nav className="mt-6 flex gap-6">
        <NavLink to="/signin">SignIn</NavLink>
        <NavLink to="/signup">SignUp</NavLink>
      </nav>
    </div>
  );
}

export default Home;
