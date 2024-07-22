import "./Login.css";
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';



export function Login() {
    return (
        <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
            <div className="form_container p-5 rounded bg-white">
                <form>
                    <h3 className="text-center">Sign In</h3>
                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter Email" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter Password" />
                    </div>
                    <div className="mb-2">
                        <input type="checkbox" className="custom-control custom-checkbox" id="check" />
                        <label htmlFor="check" className="custom-input-label ms-2">
                            Remember Me
                        </label>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary">Sign in</button>
                    </div>
                    <div className="d-grid">
                        <GoogleLogin />
                    </div>
                    
                    <p className="text-right mt-2">
                        <a href="">Forgot Password?</a><Link to="/signup" className="ms-2">Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}