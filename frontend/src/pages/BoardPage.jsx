import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../components/Sidebar'
import { Excalidraw } from '@excalidraw/excalidraw';
import './styles/Base.css';
import './styles/BoardPage.css';


export default function BoardPage() {

    const toggleDropdown = () => {
        console.log('Profile Clicked')
    };

    const excalidrawUIOptions = {
        canvasActions: {
            changeViewBackgroundColor: false,
            saveAsImage: true
        },
    };

    return (
        <div className="app">
            <Sidebar activeItem='board' />
            <main className="main-content">
                <header className="dwg-brd-header">
                    <em><h2>Drawing Board</h2></em>
                    <div className="user-profile" onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                </header>
                <div className='custom-styles' style={{ height: "100vh" }}>
                    <Excalidraw UIOptions={excalidrawUIOptions} theme='dark' />
                </div>
            </main>
        </div>
    )
}