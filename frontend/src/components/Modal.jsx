import PropTypes from 'prop-types';
import './Modal.css';

const NewRoomModal = ({ show, handleClose }) => {
    return (
        <div className={`modal ${show ? 'show' : ''}`}>
            <div className='modal-content'>
                <h2>Create New Room</h2>
                <form method=''>
                    <div className="form-group">
                        <label htmlFor="roomName">Room name</label>
                        <input type="text" id="roomName" name="roomName" required placeholder="Enter room name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="roomDescription">Room description</label>
                        <textarea id="roomDescription" name="roomDescription" rows="4" placeholder="Enter room description"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="roomVisibility">Visibility</label>
                        <select name="roomVisibility" id="roomVisibility">
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                        </select>
                    </div>
                    <button type="submit" className="create-button">Create Room</button>
                    <button type="button" className="cancel-button" onClick={handleClose}>Cancel</button>
                </form>
            </div>
        </div>
    )
}

const JoinRoomModal = ({ show, handleClose }) => {
    return (
        <div className={`modal ${show ? 'show' : ''}`}>
            <div className='modal-content'>
                <h2>Join Room</h2>
                <form method=''>
                    <div className="form-group">
                        <label htmlFor="inviteCode">Invite code</label>
                        <input type="text" id="inviteCode" name="inviteCode" required placeholder="Enter invite code" />
                    </div>
                    <button type="submit" className="create-button">Join Room</button>
                    <button type="button" className="cancel-button" onClick={handleClose}>Cancel</button>
                </form>
            </div>
        </div>
    )
}


NewRoomModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

JoinRoomModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export { NewRoomModal, JoinRoomModal };