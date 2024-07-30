import './GroupInfo.css';

function GroupInfo() {

  return (
    <div className="group-info-area">
      <div className="group-info-header">
        <h2>Group Info</h2>
        <div className="group-info-actions">
          <button className="exit-group">EXIT GROUP</button>
        </div>
      </div>
      <div className="group-info-main">
        <div className="files">
          <div className="section-header">
            <h3>Files</h3>
            <span className="groups-info-see-all">See All</span>
          </div>
          <hr />
          <ul>
            {Array(6).fill().map((_, index) => (
              <li key={index}>
                <span>File1.jpg</span>
                <button className="download-btn">Download</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="group-members">
          <div className="section-header">
            <h3>Members</h3>
            <span className="groups-info-see-all">See All</span>
          </div>
          <hr />
          <ul>
            {Array(2).fill().map((_, index) => (
              <li key={index}>
                <div className="member-icon">M</div>
                <span className="member-name">Member Name</span>
                <span className="admin-tag">admin</span>
              </li>
            ))}
            {Array(4).fill().map((_, index) => (
              <li key={index}>
                <div className="member-icon">M</div>
                <span className="member-name">Member Name</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GroupInfo;