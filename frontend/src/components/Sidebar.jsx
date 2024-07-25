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

const Sidebar = ({ activeItem }) => {
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
            <a href="#" className="logout">
                <FontAwesomeIcon icon={faSignOutAlt} size="xl" />
                <span>Logout</span>
            </a>
        </aside>
    );
};

Sidebar.propTypes = {
    activeItem: PropTypes.string.isRequired,
}

export default Sidebar;
