import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

// ActionCard Component
const ActionCard = ({ title, description, icon, onClick }) => (
    <div className="action-card" onClick={onClick} style={{ cursor: 'pointer' }}>
        <div className="icon">{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

ActionCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    onClick: PropTypes.func,
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

export { ActionCard, DateTimeCard, SubjectTag, GroupCard };