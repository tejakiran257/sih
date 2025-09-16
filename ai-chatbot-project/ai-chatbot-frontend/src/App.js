import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Chat from './pages/Chat';
import ProfilePage from './pages/Profile';
import ChatHistory from './pages/ChatHistory';
import Navbar from './pages/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/history" element={<ChatHistory />} />
      </Routes>
    </Router>
  );
}
export default App;