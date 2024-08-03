import { useState } from 'react';
import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';
import './Modal.css';
import { api } from '../utils/api';

const NewRoomModal = ({ show, handleClose }) => {

    const [roomName, setRoomName] = useState('');
    const [roomDescription, setRoomDescription] = useState('');
    const [roomVisibility, setRoomVisibility] = useState('public');
    const [error, setError] = useState(null);
    // const navigate = useNavigate();

    const handleSubmitNewRoom = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        try {
            const user_id = localStorage.getItem('user_id');

            const response = await api.create_group({
                name: roomName,
                description: roomDescription,
                is_private: (roomVisibility === 'private'),
                admin_id: user_id

            });
            console.log('Room created successfully', response.data);
            await api.join_group(response.data['group_id'], { user_id: user_id });
            handleClose()
            window.location.reload();
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div className={`modal ${show ? 'show' : ''}`}>
            <div className='modal-content'>
                <h2>Create New Room</h2>
                <form onSubmit={handleSubmitNewRoom}>
                    <div className="form-group">
                        <label htmlFor="roomName">Room Name</label>
                        <input
                            type="text"
                            id="roomName"
                            name="roomName"
                            value={roomName}
                            onChange={(e) => setRoomName(e.target.value)}
                            required
                            placeholder="Enter room name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="roomDescription">Room Description</label>
                        <textarea
                            id="roomDescription"
                            name="roomDescription"
                            rows="4"
                            value={roomDescription}
                            onChange={(e) => setRoomDescription(e.target.value)}
                            placeholder="Enter room description"
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="roomVisibility">Visibility</label>
                        <select
                            name="roomVisibility"
                            id="roomVisibility"
                            value={roomVisibility}
                            onChange={(e) => setRoomVisibility(e.target.value)}
                        >
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                        </select>
                    </div>
                    <button type="submit" className="create-button">Create Room</button>
                    <button type="button" className="cancel-button" onClick={handleClose}>Cancel</button>
                </form>
                {error && <div className="error">{error}</div>}
            </div>
        </div>
    );
}

const JoinRoomModal = ({ show, handleClose }) => {

    const [inviteCode, setInviteCode] = useState('');
    const [error, setError] = useState(null);

    const handleSubmitJoinRoomByInvite = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        try {
            const user_id = localStorage.getItem('user_id');

            const response = await api.join_group_by_invite({
                invite_code: inviteCode,
                user_id: user_id

            });
            console.log('Group joined successfully', response.data);
            handleClose()
            window.location.reload();
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
        }
    };
    return (
        <div className={`modal ${show ? 'show' : ''}`}>
            <div className='modal-content'>
                <h2>Join Room</h2>
                <form onSubmit={handleSubmitJoinRoomByInvite}>
                    <div className="form-group">
                        <label htmlFor="inviteCode">Invite code</label>
                        <input
                            type="text"
                            id="inviteCode"
                            name="inviteCode"
                            value={inviteCode}
                            required
                            placeholder="Enter invite code"
                            onChange={(e) => setInviteCode(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="create-button">Join Room</button>
                    <button type="button" className="cancel-button" onClick={handleClose}>Cancel</button>
                    {error && <div className="error">{error}</div>}
                </form>
            </div>
        </div>
    )
}


NewRoomModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func,
    children: PropTypes.node,
    handleSubmit: PropTypes.func,
};

JoinRoomModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func,
    children: PropTypes.node,
};

export { NewRoomModal, JoinRoomModal };