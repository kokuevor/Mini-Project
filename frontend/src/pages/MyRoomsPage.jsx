import Header from '../components/Header';
import './styles/Base.css'
import './styles/MyRoomsPage.css'
import Sidebar from '../components/Sidebar'
import MainContent from '../components/MyRoomsPageComponents';


export default function MyRoomsPage() {
    return (
        <div className="app">
            <Sidebar activeItem='my-rooms' />
            <main className="main-content">
                <Header />
                <MainContent />
            </main>
        </div>
    )
}