import { useState } from 'react';
import { Header, ActionCard, DateTimeCard, SubjectTag, GroupCard } from '../components/HomePageComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './styles/HomePage.css'
import Sidebar from '../components/Sidebar'
import { NewRoomModal, JoinRoomModal } from '../components/Modal';


export default function HomePage() {
    const subjects = ['Math', 'Science', 'History', 'English', 'Art', 'Music', 'Physics', 'Chemistry', 'Biology'];
    const groups = [
        { name: 'Group Name', description: 'Lorem ipsum dolor sit amet consect adipiscing elit. Maxime mollitia, iae quas vel sint commodi repudiandae.' },
        { name: 'Group Name', description: 'Lorem ipsum dolor sit amet consect adipiscing elit. Maxime mollitia, iae quas vel sint commodi repudiandae.' },
        { name: 'Group Name', description: 'Lorem ipsum dolor sit amet consect adipiscing elit. Maxime mollitia, iae quas vel sint commodi repudiandae.' },
        { name: 'Group Name', description: 'Lorem ipsum dolor sit amet consect adipiscing elit. Maxime mollitia, iae quas vel sint commodi repudiandae.' },
        { name: 'Group Name', description: 'Lorem ipsum dolor sit amet consect adipiscing elit. Maxime mollitia, iae quas vel sint commodi repudiandae.' },
        { name: 'Group Name', description: 'Lorem ipsum dolor sit amet consect adipiscing elit. Maxime mollitia, iae quas vel sint commodi repudiandae.' },
        { name: 'Group Name', description: 'Lorem ipsum dolor sit amet consect adipiscing elit. Maxime mollitia, iae quas vel sint commodi repudiandae.' },
        { name: 'Group Name', description: 'Lorem ipsum dolor sit amet consect adipiscing elit. Maxime mollitia, iae quas vel sint commodi repudiandae.' },
    ];

    const [modalState, setModalState] = useState({
        newRoom: false,
        joinRoom: false
    });

    const handleOpenModal = (modalType) => {
        setModalState({
            ...modalState,
            [modalType]: true
        });
    };

    const handleCloseModal = () => {
        setModalState({
            newRoom: false,
            joinRoom: false
        });
    };

    return (
        <div className="app">
            <Sidebar />
            <main className="main-content">
                <Header />
                <NewRoomModal show={modalState.newRoom} handleClose={handleCloseModal} />
                <JoinRoomModal show={modalState.joinRoom} handleClose={handleCloseModal} />

                <div className="action-cards">
                    <DateTimeCard />
                    <ActionCard
                        title="New Room"
                        description="Create new study room"
                        icon={<FontAwesomeIcon icon={faPlus} />}
                        onClick={() => handleOpenModal('newRoom')}
                    />
                    <ActionCard
                        title="Join Room"
                        description="via invitation code"
                        icon={<FontAwesomeIcon icon={faArrowRight} />}
                        onClick={() => handleOpenModal('joinRoom')}
                    />
                </div>

                <section className="public-rooms">
                    <h2>Public Rooms</h2>
                    <div className="subjects">
                        <h3>Subjects</h3>
                        <div className="subject-tags">
                            {subjects.map((subject, index) => (
                                <SubjectTag key={index} name={subject} />
                            ))}
                            <a href="#" className="see-all">See All</a>
                        </div>
                    </div>
                    <div className="group-cards">
                        {groups.map((group, index) => (
                            <GroupCard key={index} name={group.name} description={group.description} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}