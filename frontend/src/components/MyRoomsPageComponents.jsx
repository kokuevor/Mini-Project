import PropTypes from 'prop-types';

export const EmojiTag = ({ name }) => (
    <div className="emoji-tags">
        <span className="emoji-tag">{name}</span>
    </div>
);

EmojiTag.propTypes = {
    name: PropTypes.string.isRequired,
};

export const RoomCard = ({ title, type }) => (
    <div className={`group-card ${type.toLowerCase()}`}>
        <h3>{title}</h3>
        <p>{type.charAt(0).toUpperCase() + type.slice(1)} Room</p>
        <EmojiTag name='🔐🔓' />
    </div>
);

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
                    <RoomCard key={index} title={room.title} type={type} />
                ))}
            </div>
        </div>
    </section>
);

RoomCard.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

RoomSection.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rooms: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired
        })
    ).isRequired,
};

const MainContent = () => {
    const privateRooms = [
        { title: 'Private Room 1' },
        { title: 'Private Room 2' },
        { title: 'Private Room 3' },
        { title: 'Private Room 4' },
        { title: 'Private Room 1' },
        { title: 'Private Room 2' },
        { title: 'Private Room 3' },
        { title: 'Private Room 4' },
    ];

    const publicRooms = [
        { title: 'Public Room 1' },
        { title: 'Public Room 2' },
        { title: 'Public Room 3' },
        { title: 'Public Room 4' },
        { title: 'Public Room 1' },
        { title: 'Public Room 2' },
        { title: 'Public Room 3' },
        { title: 'Public Room 4' },
    ];

    return (
        <>
            <RoomSection title="My Rooms - Private" type="Private" rooms={privateRooms} />
            <hr className='new-hr' />
            <RoomSection title="My Rooms - Public" type="Public" rooms={publicRooms} />
        </>
    );
};


export default MainContent;