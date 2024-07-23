import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

// Header Component
const Header = () => (
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

// ActionCard Component
const ActionCard = ({ title, description, icon }) => (
    <div className="action-card">
        <div className="icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

ActionCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
};

// DateTimeCard Component
const DateTimeCard = () => (
    <div className="date-time-card">
        <h2>12:18 PM</h2>
        <p>Monday, July 1, 2024</p>
        <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon" />
    </div>
);

// SubjectTag Component
const SubjectTag = ({ name }) => (
    <span className="subject-tag">{name}</span>
);

SubjectTag.propTypes = {
    name: PropTypes.string.isRequired,
};

// GroupCard Component
const GroupCard = ({ name, description }) => (
    <div className="group-card">
        <h3>{name}</h3>
        <p>{description}</p>
        <button>Join</button>
    </div>
);

GroupCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export { Header, ActionCard, DateTimeCard, SubjectTag, GroupCard };