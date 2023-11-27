import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Chat from './pages/Chat';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/signin" Component={Signin} />
          <Route path="/signup" Component={Signup} />
          <Route path="/chat" Component={Chat} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
