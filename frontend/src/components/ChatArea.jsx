import './ChatArea.css';

function ChatArea() {
  return (
    <div className="chat-area">
      <div className="chat-header">
        <h2>Group Name</h2>
        <div className="chat-actions">
          <button className="voicecall">📞</button>
          <button className="videocall">📹</button>
        </div>
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
               <i className="icon-image"><img src="./assets/image-attach.png"/> </i>
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
        <input type="file" id="attachment" />
        <label htmlFor="attachment" className="attachment-button">📎</label>
        <input type="text" placeholder="Type your message" />
        <button className="send-button">Send</button>
    </div>
    </div>
  );
}

export default ChatArea;