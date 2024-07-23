// Sidebar.js
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faUsers,
    faChalkboard,
    faCog,
    faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="logo">
                <span>LO</span>
                <span>GO</span>
            </div>
            <nav className="nav-menu">
                <a href="#" className="nav-item active">
                    <FontAwesomeIcon icon={faHome} size="xl" />
                    <span className="sidebar-label">Home</span>
                </a>
                <a href="#" className="nav-item">
                    <FontAwesomeIcon icon={faUsers} size="xl" />
                    <span>My Rooms</span>
                </a>
                <a href="#" className="nav-item">
                    <FontAwesomeIcon icon={faChalkboard} size="xl" />
                    <span>Board</span>
                </a>
                <a href="#" className="nav-item">
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

export default Sidebar;
