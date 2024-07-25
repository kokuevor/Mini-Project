import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <header className="header">
            <div className="search-bar">
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" placeholder="Search" />
            </div>
            <div className="user-profile">
                <FontAwesomeIcon icon={faUser} />
            </div>
        </header>
    );
}

export default Header;