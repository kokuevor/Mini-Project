import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { api } from '../utils/api';

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

const DateTimeCard = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };

    const formattedCurrentDate = currentDate.toLocaleDateString('en-US', dateOptions);
    const formattedCurrentTime = currentDate.toLocaleTimeString('en-US', timeOptions);

    return (
        <div className="date-time-card">
            <h2>{formattedCurrentTime}</h2>
            <p>{formattedCurrentDate}</p>
            <FontAwesomeIcon icon={faCalendarAlt} className="calendar-icon" />
        </div>
    );
};

// SubjectTag Component
const SubjectTag = ({ name }) => (
    <span className="subject-tag">{name}</span>
);

SubjectTag.propTypes = {
    name: PropTypes.string.isRequired,
};

// GroupCard Component
const GroupCard = ({ name, description, group_id }) => {
    const user_id = sessionStorage.getItem('user_id');
    const navigate = useNavigate();

    const joinGroup = async () => {
        try {
            const response = await api.join_group(group_id, { user_id: user_id });
            alert(response.data.message);
            navigate('/my-rooms');
        } catch (err) {
            alert(err.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div className="group-card">
            <h3>{name}</h3>
            <p>{description}</p>
            <button onClick={joinGroup}>Join</button>
        </div>
    );
};

GroupCard.propTypes = {
    group_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export { ActionCard, DateTimeCard, SubjectTag, GroupCard };