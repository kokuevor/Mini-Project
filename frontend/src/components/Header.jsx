import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {

    const toggleDropdown = () => {
        console.log('Profile Clicked')
    };

    return (
        <header className="header">
            <div className="search-bar">
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" placeholder="Search" />
            </div>
            <div className="user-profile" onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon icon={faUser} />
            </div>

        </header>
    );
}

export default Header;