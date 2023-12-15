import { NavLink, useRouteLoaderData } from 'react-router-dom';

function Home() {
  const userId = useRouteLoaderData('root');
  console.log(userId);
  return (
    <div className="container flex flex-col justify-center items-center">
      <h1>${userId ? userId : null}, Welcome to Chat</h1>
      <nav className="mt-6 flex gap-6">
        <NavLink to="/signin">SignIn</NavLink>
        <NavLink to="/signup">SignUp</NavLink>
      </nav>
    </div>
  );
}

export default Home;
