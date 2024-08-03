import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { api } from '../utils/api';

export const EmojiTag = ({ name }) => (
    <div className="emoji-tags">
        <span className="emoji-tag">{name}</span>
    </div>
);

EmojiTag.propTypes = {
    name: PropTypes.string.isRequired,
};

export const RoomCard = ({ title, type, onClick }) => {
    return (
        <div className={`group-card ${type.toLowerCase()}`} onClick={onClick} style={{ cursor: 'pointer' }}>
            <h3>{title}</h3>
            <p>{type.charAt(0).toUpperCase() + type.slice(1)} Room</p>
            <EmojiTag name='🔐🔓' />
        </div>
    );
}
const goToRoom = (url) => {
    window.location.href = url;
};

export const RoomSection = ({ title, type, rooms }) => (
    <section className={`${type.toLowerCase()}-rooms`}>
        <h2>{title}</h2>
        <hr className='new-hr2' />
        <div className="see-all-sections">
            <div className="see-all-section">
                <a href="#" className="see-all">See All</a>
            </div>
        </div>
        <div className="group-cards">
            <div className='group-cards-new'>
                {rooms.map((room, index) => (
                    <RoomCard
                        key={index}
                        title={room.title}
                        type={type}
                        onClick={() => goToRoom(`/group/${room.group_id}/room`)}
                    />
                ))}
            </div>
        </div>
    </section>
);

RoomCard.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

RoomSection.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rooms: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string
        })
    ).isRequired,
};

const MainContent = () => {
    // const privateRooms = [
    //     { title: 'Private Room 1' },
    //     { title: 'Private Room 2' },
    //     { title: 'Private Room 3' },
    //     { title: 'Private Room 4' },
    //     { title: 'Private Room 1' },
    //     { title: 'Private Room 2' },
    //     { title: 'Private Room 3' },
    //     { title: 'Private Room 4' },
    // ];

    // const publicRooms = [
    //     { title: 'Public Room 1' },
    //     { title: 'Public Room 2' },
    //     { title: 'Public Room 3' },
    //     { title: 'Public Room 4' },
    //     { title: 'Public Room 1' },
    //     { title: 'Public Room 2' },
    //     { title: 'Public Room 3' },
    //     { title: 'Public Room 4' },
    // ];
    // const privateRooms = [];
    // const publicRooms = [];

    const [userGroups, setUserGroups] = useState([]);
    const [publicRooms, setPublicRooms] = useState([]);
    const [privateRooms, setPrivateRooms] = useState([]);
    const [error, setError] = useState(null);

    const user_id = sessionStorage.getItem('user_id');

    useEffect(() => {
        if (user_id) {
            api.get_user_groups(user_id)
                .then(response => {
                    setUserGroups(response.data);
                    // Process groups into public and private rooms
                    const publicRooms = [];
                    const privateRooms = [];
                    response.data.forEach(group => {
                        if (group.is_private) {
                            privateRooms.push({ title: group.name, group_id: group.group_id });
                        } else {
                            publicRooms.push({ title: group.name, group_id: group.group_id });
                        }
                    });

                    setPublicRooms(publicRooms);
                    setPrivateRooms(privateRooms);
                })
                .catch(error => {
                    setError(error.response?.data?.message || 'No groups found for this user');
                });
        }
    }, [user_id]);


    return (
        <>
            {error && <center><h4 style={{ color: "red" }} className="error-message">{error}</h4></center>}
            <RoomSection title="My Rooms - Private" type="Private" rooms={privateRooms} />
            <hr className='new-hr' />
            <RoomSection title="My Rooms - Public" type="Public" rooms={publicRooms} />
        </>
    );
};


export default MainContent;