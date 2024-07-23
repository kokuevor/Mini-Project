import Sidebar from '../components/Sidebar'
import { Header, ActionCard, DateTimeCard, SubjectTag, GroupCard } from '../components/HomePageComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './styles/HomePage.css'


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

    return (
        <div className="app">
            <Sidebar />
            <main className="main-content">
                <Header />
                <div className="action-cards">
                    <ActionCard title="New Room" description="Create new study room" icon={<FontAwesomeIcon icon={faPlus} />} />
                    <ActionCard title="Join Room" description="via invitation code" icon={<FontAwesomeIcon icon={faArrowRight} />} />
                    <DateTimeCard />
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