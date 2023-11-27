import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
function ChatLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default ChatLayout;
