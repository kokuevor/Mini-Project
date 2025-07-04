import { useState } from 'react';
import PropTypes from 'prop-types';
import { api } from '../utils/api';
// import { useNavigate, Navigate } from 'react-router-dom';

export function Login({ handleClick }) {
    const [username, setUsername] = useState('');  // Changed to username as per your form
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    // const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        try {
            const response = await api.login({ username, password });
            const { authToken, user_id } = response.data;

            localStorage.setItem('user_id', user_id);
            localStorage.setItem('authToken', authToken);
            localStorage.setItem('username', username);

            console.log('Login successful');
            window.location.href = '/home';
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <a href="#" className="forgot-password">Forgot your password?</a>
                </div>
                <button type="submit" className="login-button">Login</button>
                {error && <p className="error-message">{error}</p>}
            </form>
            <p className="create-account">
                Don&apos;t have an account? <a href="" onClick={(e) => { e.preventDefault(); handleClick('signup'); }}>Create Account</a>
            </p>
        </div>
    );
}


export function Signup({ handleClick }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    // const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        try {
            await api.register({ username, email, password });
            alert('Account Created Successful');
            window.location.href = '/home';
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div className="login-form">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <a href="#" className="forgot-password">Forgot your password?</a>
                </div>
                <button type="submit" className="login-button">Register</button>
                {error && <p className="error-message">{error}</p>}
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