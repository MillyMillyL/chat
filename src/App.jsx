import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import FindFriend from './pages/FindFriend';
// import Chat from './pages/Chat';
import Chat from './pages/Chat';
import Home from './pages/Home';
import ChatLayout from './layout/ChatLayout';
// import { useContext } from 'react';
// import { AuthContext } from './context/AuthContext';
// import Header from './components/Header';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        index
        element={<Home />}
        id="root"
        loader={() => {
          let user = 'aaa';
          return user;
        }}
      />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<ChatLayout />}>
        <Route path="/chat" element={<Chat />} />
        <Route path="/findfriend" element={<FindFriend />} />
      </Route>
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
