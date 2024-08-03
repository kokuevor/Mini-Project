import PropTypes from 'prop-types';
import './GroupsList.css';


export const GroupItemCard = ({ index, group, onClick }) => {
  return (
    <div key={index} className="group-item" onClick={onClick}>
      <div className="group-icon">{group.name[0]}</div>
      <div className="groups-list-group-info">
        <div className="group-name">{group.name}</div>
        <div className="group-description">{group.description}</div>
      </div>
    </div>
  );
};

GroupItemCard.propTypes = {
  index: PropTypes.number.isRequired,
  group: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
};

const goToRoom = (url) => {
  window.location.href = url;
};

function GroupsList({ userGroups, error }) {
  return (
    <div className="groups-list">
      <h2>My Rooms</h2>
      <div className="groups-list-search-bar">
        <i className="icon-search"></i>
        <input type="text" placeholder="Search" />
      </div>
      {error && <div className="error">{error}</div>}
      {userGroups.map((group, index) => (
        <GroupItemCard key={index} index={index} group={group} onClick={() => goToRoom(`/group/${group.group_id}/room`)} />
      ))}
    </div>
  );
}

GroupsList.propTypes = {
  userGroups: PropTypes.arrayOf(
    PropTypes.shape({
      group_id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  error: PropTypes.string,
}

export default GroupsList;