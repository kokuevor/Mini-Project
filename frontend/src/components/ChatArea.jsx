// import { useState, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
// import { api } from '../utils/api';
// import io from 'socket.io-client';
// import { useParams } from 'react-router-dom';
// import './ChatArea.css';

// function ChatArea({ groupName, error }) {
//   const user_id = sessionStorage.getItem('user_id');
//   const { group_id } = useParams();
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploadStatus, setUploadStatus] = useState('');
//   const socketRef = useRef();

//   const fetchMessages = async () => {
//     try {
//       const response = await api.get_messages(group_id);
//       setMessages(response.data);
//     } catch (error) {
//       console.error('Error fetching messages:', error);
//     }
//   };

//   useEffect(() => {
//     // Fetch initial messages
//     fetchMessages();

//     // Set up Socket.IO connection
//     socketRef.current = io('https://mini-project-cco8.onrender.com/api');
//     socketRef.current.on('connect', () => {
//       socketRef.current.emit('join', { username: sessionStorage.getItem('username'), room: `group_${group_id}` });
//     });

//     socketRef.current.on('new_message', (message) => {
//       setMessages(prevMessages => [...prevMessages, message]);
//     });

//     return () => {
//       socketRef.current.emit('leave', { username: sessionStorage.getItem('username'), room: `group_${group_id}` });
//       socketRef.current.disconnect();
//     };
//   }, [fetchMessages, group_id]);


//   const handleSendMessage = async () => {
//     if (newMessage.trim()) {
//       try {
//         await api.send_message(group_id, { content: newMessage, user_id, group_id });
//         setNewMessage('');
//       } catch (error) {
//         console.error('Error sending message:', error);
//       }
//     }
//   };

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = () => {
//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append('file', selectedFile);
//       formData.append('user_id', user_id);

//       api.upload_file(group_id, formData)
//         .then(response => {
//           setUploadStatus('File uploaded successfully!');
//           setSelectedFile(null);
//           console.log(response)
//         })
//         .catch(error => {
//           setUploadStatus('Error uploading file.');
//           console.error('Error uploading file:', error);
//         });
//     } else {
//       setUploadStatus('No file selected.');
//     }
//   };

//   return (
//     <div className="chat-area">
//       <div className="chat-header">
//         <h2>{groupName}</h2>
//         <div className="chat-actions">
//           <button className="voicecall">📞</button>
//           <button className="videocall">📹</button>
//         </div>
//         {error && <h3 className="error-message">{error}</h3>}
//       </div>
//       <div className="chat-messages">
//         {messages.map((message) => (
//           <div key={message.id} className="message">
//             <img src={`https://randomuser.me/api/portraits/men/${message.user_id % 100}.jpg`} alt={message.username} className="avatar" />
//             <div className="message-content">
//               <div className="message-header">
//                 <span className="username">{message.username}</span>
//                 <span className="timestamp">{new Date(message.timestamp).toLocaleString()}</span>
//               </div>
//               <div className="message-text">{message.content}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="chat-input">
//         <input type="file" id="attachment" onChange={handleFileChange} />
//         <label htmlFor="attachment" className="attachment-button">📎</label>
//         <input
//           type="text"
//           placeholder="Type your message"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//         />
//         <button className="send-button" onClick={handleSendMessage}>Send</button>
//         {uploadStatus && <div className="upload-status">{uploadStatus}</div>}
//       </div>
//     </div>
//   );
// }

// ChatArea.propTypes = {
//   groupName: PropTypes.string,
//   error: PropTypes.string,
// }

// export default ChatArea;











import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { api } from '../utils/api';
import io from 'socket.io-client';
import { useParams } from 'react-router-dom';
import './ChatArea.css';

function ChatArea({ groupName, error }) {
  const user_id = sessionStorage.getItem('user_id');
  const { group_id } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [socketError, setSocketError] = useState('');
  const socketRef = useRef();
  const SOCKET_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"

  const fetchMessages = async () => {
    try {
      const response = await api.get_messages(group_id);
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    fetchMessages();

    const socket = io(SOCKET_URL, {
      transports: ['websocket'],
      reconnection: true,  // Enable reconnection attempts
      reconnectionAttempts: 5,  // Number of reconnection attempts before giving up
      reconnectionDelay: 1000,  // Delay between reconnections in ms
      debug: true  // Enable debug mode for more verbose logs
    });

    socketRef.current = socket;

    // socketRef.current = io('https://mini-project-cco8.onrender.com', {
    //   transports: ['websocket'],
    //   reconnection: true,
    // });

    socketRef.current.on('connect', () => {
      socketRef.current.emit('join', { username: sessionStorage.getItem('username'), room: `group_${group_id}` });
    });

    socketRef.current.on('new_message', (message) => {
      setMessages(prevMessages => [...prevMessages, message]);
    });

    socketRef.current.on('connect_error', (error) => {
      setSocketError('Failed to connect to the WebSocket server.');
      console.error('WebSocket connection error:', error);
    });

    socketRef.current.on('disconnect', (reason) => {
      console.log('Disconnected from server:', reason);
      setSocketError('Disconnected from the WebSocket server.');
    });

    return () => {
      socketRef.current.emit('leave', { username: sessionStorage.getItem('username'), room: `group_${group_id}` });
      socketRef.current.disconnect();
    };
  }, [group_id]);

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      try {
        await api.send_message(group_id, { content: newMessage, user_id, group_id });
        setNewMessage('');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setUploadStatus('File is too large. Maximum allowed size is 10MB.');
        return;
      }
      if (!['image/png', 'image/jpeg', 'application/pdf'].includes(file.type)) {
        setUploadStatus('Unsupported file type.');
        return;
      }
      setSelectedFile(file);
    }
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
          console.log(response);
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
        {socketError && <h3 className="error-message">{socketError}</h3>}
      </div>
      <div className="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <img src={`https://randomuser.me/api/portraits/men/${message.user_id % 100}.jpg`} alt={message.username} className="avatar" />
            <div className="message-content">
              <div className="message-header">
                <span className="username">{message.username}</span>
                <span className="timestamp">{new Date(message.timestamp).toLocaleString()}</span>
              </div>
              <div className="message-text">{message.content}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input type="file" id="attachment" onChange={handleFileChange} />
        <label htmlFor="attachment" className="attachment-button">📎</label>
        <input
          type="text"
          placeholder="Type your message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button className="send-button" onClick={handleSendMessage}>Send</button>
        {uploadStatus && <div className="upload-status">{uploadStatus}</div>}
      </div>
    </div>
  );
}

ChatArea.propTypes = {
  groupName: PropTypes.string,
  error: PropTypes.string,
};

export default ChatArea;
