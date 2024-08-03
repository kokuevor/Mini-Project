import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../utils/api';
import GroupsList from '../components/GroupsList';
import ChatArea from '../components/ChatArea';
import GroupInfo from '../components/GroupInfo';
import Sidebar from '../components/Sidebar';
import './styles/Room.css';


export default function Room() {

  const { group_id } = useParams();

  const user_id = sessionStorage.getItem('user_id');
  const [userGroups, setUserGroups] = useState([]);
  const [groupListError, setgroupListError] = useState(null);
  const [error, setError] = useState(null);
  const [groupName, setGroupName] = useState();
  const [members, setMembers] = useState([]);
  const [groupFiles, setGroupFiles] = useState([]);

  useEffect(() => {
    if (user_id && group_id) {
      api.get_group_by_id(Number(group_id))
        .then(response => {
          setGroupName(response.data.name);
          setMembers(response.data.members)
        })
        .catch(error => {
          setError(error.response?.data?.message || 'No groups found');
        });
    }
  }, [user_id, group_id]);

  useEffect(() => {
    if (user_id) {
      api.get_user_groups(user_id)
        .then(response => {
          setUserGroups(response.data);
        })
        .catch(groupListError => {
          setgroupListError(groupListError.response?.data?.message || 'No groups found');
        });
    }
  }, [user_id]);

  useEffect(() => {
    if (user_id && group_id) {
      api.get_files(Number(group_id))
        .then(response => {
          setGroupFiles(response.data.files);
          // console.log(response.data.files);
        })
        .catch(error => {
          setgroupListError(error.response?.data?.message || 'No files found');
        });
    }
  }, [user_id, group_id]);

  return (
    <div className="room-app">
      <Sidebar activeItem='my-rooms' />
      <main className="room-main-content">
        <GroupsList userGroups={userGroups} error={groupListError} />
        <ChatArea groupName={groupName} error={error} />
        <GroupInfo members={members} files={groupFiles} />
      </main>
    </div>
  );
}