import './GroupsList.css';

function GroupsList() {
  const groups = Array(15).fill("Group Name");

  return (
    <div className="groups-list">
      <h2>My Rooms</h2>
      <div className="groups-list-search-bar">
        <i className="icon-search"></i>
        <input type="text" placeholder="Search" />
      </div>
      {groups.map((group, index) => (
        <div key={index} className="group-item">
          <div className="group-icon">G</div>
          <div className="groups-list-group-info">
            <div className="group-name">{group}</div>
            <div className="group-description">Group description goes here</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GroupsList;