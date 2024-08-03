import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faUsers,
    faChalkboard,
    faCog,
    faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';
import { api } from "../utils/api";
import { useState } from "react";

const Sidebar = ({ activeItem }) => {
    const [error, setError] = useState(null);

    const handleLogout = async () => {
        try {
            await api.logout();

            sessionStorage.removeItem('user_id')
            sessionStorage.removeItem('authToken')
            console.log('Logout successful');
            window.location.href = '/get-started';
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        }
    };

    const logoutPrompt = () => {
        if (window.confirm("Do you really want to leave?")) {
            handleLogout();
        }
    }

    return (
        <aside className="sidebar">
            <div className="logo">
                <span>LO</span>
                <span>GO</span>
            </div>
            <nav className="nav-menu">
                <a href="/home" className={`nav-item ${activeItem === 'home' ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={faHome} size="xl" />
                    <span className="sidebar-label">Home</span>
                </a>
                <a href="/my-rooms" className={`nav-item ${activeItem === 'my-rooms' ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={faUsers} size="xl" />
                    <span>My Rooms</span>
                </a>
                <a href="/board" className={`nav-item ${activeItem === 'board' ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={faChalkboard} size="xl" />
                    <span>Board</span>
                </a>
                <a href="/settings" className={`nav-item ${activeItem === 'settings' ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={faCog} size="xl" />
                    <span>Settings</span>
                </a>
            </nav>
            <a onClick={logoutPrompt} className="logout" style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faSignOutAlt} size="xl" />
                <span>Logout</span>
            </a>
            {error && alert({ error })}
        </aside>
    );
};

Sidebar.propTypes = {
    activeItem: PropTypes.string.isRequired,
}

export default Sidebar;
