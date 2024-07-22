import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginSignupPage from './pages/LoginSignupPage';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/get-started" element={<LoginSignupPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
