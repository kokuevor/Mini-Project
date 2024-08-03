import PropTypes from 'prop-types';
import { api } from '../utils/api';
import './GroupInfo.css';
import { useParams } from 'react-router-dom';

function GroupInfo({ members, files = [] }) {

  const { group_id } = useParams();

  const handleDownload = (fileName) => {
    api.download_file(group_id, fileName)
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch(error => {
        console.error('Error downloading the file:', error);
      });
  };


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
            {files.length > 0 ? (
              files.map((file, index) => (
                <li key={index}>
                  <span>{file}</span>
                  <button className="download-btn" onClick={() => handleDownload(file)}>Download</button>
                </li>
              ))
            ) : (
              <li>No files available</li>
            )}
          </ul>
        </div>
        <div className="group-members">
          <div className="section-header">
            <h3>Members</h3>
            <span className="groups-info-see-all">See All</span>
          </div>
          <hr />
          <ul>
            {members.map((member, index) => (
              <li key={index}>
                <div className="member-icon">{member.username[index].toUpperCase()}</div>
                <span className="member-name">{member.username}</span>
                {member.is_admin && <span className="admin-tag">admin</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

GroupInfo.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      user_id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
    })
  ).isRequired,
  files: PropTypes.arrayOf(
    PropTypes.string
  ),
};

export default GroupInfo;