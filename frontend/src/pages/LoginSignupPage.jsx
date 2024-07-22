import './styles/LoginSignupPage.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../components/Login';
import { Signup } from '../components/Signup';

import { NavbarComponent } from '../components/Navbar';
import './styles/LoginSignupPage.css'; // Make sure to create this CSS file

const LoginSignupPage = () => {
    return (
        <div className="login-page">
            <NavbarComponent />
            <div className="content">
                <div className="get-started">
                    <h1>Get Started</h1>
                    <p>
                        Welcome to our platform! Take a step towards accessing exciting features and personalized
                        experiences by logging in now. We value your presence and can&apos;t wait to offer you a seamless journey.
                    </p>
                </div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />}></Route>
                        <Route path="/signup" element={<Signup />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
};

export default LoginSignupPage;