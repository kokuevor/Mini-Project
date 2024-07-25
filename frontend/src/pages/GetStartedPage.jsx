import './styles/GetStartedPage.css'
import { NavbarComponent } from '../components/Navbar';
// import { Route, Routes, Navigate } from "react-router-dom";
import { Login, Signup } from '../components/Forms';
// import { Signup } from '../components/Signup';
import { useState } from 'react';
import './styles/GetStartedPage.css';

export default function GetStartedPage() {
    const [activeComponent, setActiveComponent] = useState('login');

    const handleClick = (component) => {
        setActiveComponent(component);
    };

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
                {/* <Login /> */}
                {activeComponent === 'login' && <Login handleClick={handleClick} />}
                {activeComponent === 'signup' && <Signup handleClick={handleClick} />}
            </div>
        </div>
    )
}


