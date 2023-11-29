import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="container flex flex-col justify-center items-center">
      <h1>Welcome to Chat</h1>
      <nav className="mt-6 flex gap-6">
        <NavLink to="/signin">SignIn</NavLink>
        <NavLink to="/signup">SignUp</NavLink>
      </nav>
    </div>
  );
}

export default Home;
