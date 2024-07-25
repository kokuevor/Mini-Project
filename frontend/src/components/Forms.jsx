import PropTypes from 'prop-types';

export function Login({ handleClick }) {
    return (
        <div className="login-form">
            <h2>Login</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter password" />
                    <a href="#" className="forgot-password">Forgot your password?</a>
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
            <p className="create-account">
                Don&apos;t have an account? <a href="" onClick={(e) => { e.preventDefault(); handleClick('signup'); }}>Create Account</a>
            </p>
        </div>
    )
}

export function Signup({ handleClick }) {
    return (
        <div className="login-form">
            <h2>Create Account</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="fullname">Fullname</label>
                    <input type="fullname" id="fullname" name="fullname" placeholder="Enter fullname" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter password" />
                    <a href="#" className="forgot-password">Forgot your password?</a>
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
            <p className="create-account">
                Already have an account? <a href="" onClick={(e) => { e.preventDefault(); handleClick('login'); }}>Login</a>
            </p>
        </div>
    )
}

Login.propTypes = {
    handleClick: PropTypes.func,
};

Signup.propTypes = {
    handleClick: PropTypes.func,
}