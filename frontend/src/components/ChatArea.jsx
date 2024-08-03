import { useState } from 'react';
import PropTypes from 'prop-types';
import { api } from '../utils/api';
import { useParams } from 'react-router-dom';
import './ChatArea.css';

function ChatArea({ groupName, error }) {

  const user_id = sessionStorage.getItem('user_id');
  const { group_id } = useParams();
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('user_id', user_id);

      api.upload_file(group_id, formData)
        .then(response => {
          setUploadStatus('File uploaded successfully!');
          setSelectedFile(null);
        })
        .catch(error => {
          setUploadStatus('Error uploading file.');
          console.error('Error uploading file:', error);
        });
    } else {
      setUploadStatus('No file selected.');
    }
  };


  return (
    <div className="chat-area">
      <div className="chat-header">
        <h2>{groupName}</h2>
        <div className="chat-actions">
          <button className="voicecall">📞</button>
          <button className="videocall">📹</button>
        </div>
        {error && <h3 className="error-message">{error}</h3>}
      </div>
      <div className="chat-messages">
        {/* Add chat messages here */}
        <div className="message">
          <img src="https://randomuser.me/api/portraits/men/83.jpg" alt="Phoenix Baker" className="avatar" />
          <div className="message-content">
            <div className="message-header">
              <span className="username">Phoenix Baker</span>
              <span className="timestamp">Friday 2:20pm</span>
            </div>
            <div className="message-attachment">
              <i className="icon-image"><img src="./assets/image-attach.png" /> </i>
              <span>Latest design screenshot.jpg</span>
              <span className="file-size">1.2 MB</span>
            </div>
          </div>
        </div>
        <div className="message">
          <img src="https://randomuser.me/api/portraits/men/73.jpg" alt="Olivia" className="avatar" />
          <div className="message-content">
            <div className="message-header">
              <span className="username">Olivia</span>
              <span className="timestamp">Friday 2:20pm</span>
            </div>
            <div className="message-text">
              That sounds great! I&apos;m in. What time works for you?
            </div>
          </div>
        </div>
        <div className="message">
          <img src="https://randomuser.me/api/portraits/men/24.jpg" alt="Olivia" className="avatar" />
          <div className="message-content">
            <div className="message-header">
              <span className="username">Joe</span>
              <span className="timestamp">Friday 2:23pm</span>
            </div>
            <div className="message-text">
              I&apos;m also in!
            </div>
          </div>
        </div>
      </div>
      <div className="chat-input">
        <input type="file" id="attachment" onChange={handleFileChange} />
        <label htmlFor="attachment" className="attachment-button">📎</label>
        <input type="text" placeholder="Type your message" />
        <button className="send-button" onClick={handleUpload}>Send</button>
        {uploadStatus && alert(`${uploadStatus}`)}
      </div>
    </div>
  );
}

ChatArea.propTypes = {
  groupName: PropTypes.string,
  error: PropTypes.string,
}

export default ChatArea;