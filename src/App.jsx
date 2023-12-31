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
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* public */}
      <Route index element={<Home />} id="root" />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      {/* protected */}
      <Route element={<ChatLayout />}>
        <Route path="/chat" element={<Chat />} />
        <Route path="/findfriend" element={<FindFriend />} />
      </Route>
    </Route>,
  ),
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
