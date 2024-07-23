import { Link } from "react-router-dom"

export function Signup() {
    return (
        <div className="login-form">
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="fullname">Fullname</label>
                    <input type="fullname" id="fullname" placeholder="Enter fullname" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter password" />
                    <a href="#" className="forgot-password">Forgot your password?</a>
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
            <p className="create-account">
                Already have an account? <Link to="/get-started/login">Login</Link>
            </p>
        </div>
    )
}