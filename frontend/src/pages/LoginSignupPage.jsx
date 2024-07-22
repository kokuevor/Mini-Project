// import './styles/LoginSignupPage.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../components/Login';
import { Signup } from '../components/Signup';


export default function LoginSignupPage() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
            </Routes>

        </BrowserRouter>
    )
}