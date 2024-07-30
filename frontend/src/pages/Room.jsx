import GroupsList from '../components/GroupsList';
import ChatArea from '../components/ChatArea';
import GroupInfo from '../components/GroupInfo';
import Sidebar from '../components/Sidebar';
import './styles/Room.css';


export default function Room() {
  return (
    <div className="room-app">
      <Sidebar activeItem='my-rooms' />
      <main className="room-main-content">
        <GroupsList />
        <ChatArea />
        <GroupInfo />
      </main>
    </div>
  );
}