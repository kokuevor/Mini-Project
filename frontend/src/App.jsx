import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import GetStartedPage from './pages/GetStartedPage';
import HomePage from './pages/HomePage';
import MyRoomsPage from './pages/MyRoomsPage';
import Room from './pages/Room';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/get-started" element={<GetStartedPage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/my-rooms" element={<MyRoomsPage />} />
        {/* <Route path="/board" element={<BoardPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/logout" element={<LogoutPage />} /> */}

        <Route path="/group/:group_id/room" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
