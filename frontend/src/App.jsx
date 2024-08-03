import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import GetStartedPage from './pages/GetStartedPage';
import HomePage from './pages/HomePage';
import MyRoomsPage from './pages/MyRoomsPage';
import Room from './pages/Room';
import BoardPage from './pages/BoardPage'

function App() {
  const user_id = sessionStorage.getItem('user_id');
  const authToken = sessionStorage.getItem('authToken');

  return (
    <BrowserRouter>
      <Routes>
        {!user_id || !authToken ? (
          <>
            <Route path="/" element={<LandingPage />} />
            <Route path="/get-started" element={<GetStartedPage />} />
            <Route path="*" element={<Navigate to="/get-started" />} />
          </>
        ) : (
          <>
            <Route path="/home" element={<HomePage />} />
            <Route path="/my-rooms" element={<MyRoomsPage />} />
            <Route path="/board" element={<BoardPage />} />
            {/* <Route path="/settings" element={<SettingsPage />} /> */}
            {/* <Route path="/logout" element={<LogoutPage />} /> */}
            {/* <Route path="/profile" element={<ProfilePage />} /> */}
            <Route path="/group/:group_id/room" element={<Room />} />
            <Route path="*" element={<Navigate to="/home" />} />
            <Route path="/get-started" element={<Navigate to="/home" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App
