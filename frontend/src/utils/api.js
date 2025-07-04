import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:5000";

export const api = {
    // User registration
    register: (data) => axios.post(`${API_BASE_URL}/api/auth/register`, data),

    // Get Messages
    get_messages: (groupId) => axios.get(`${API_BASE_URL}/api/chat/${groupId}/messages`),

    // Get Messages
    send_message: (groupId, data) => axios.post(`${API_BASE_URL}/api/chat/${groupId}/messages`, data),

    // User login
    login: (data) => axios.post(`${API_BASE_URL}/api/auth/login`, data),

    // User logout
    logout: () => axios.post(`${API_BASE_URL}/api/auth/logout`),

    // Get groups
    get_groups: () => axios.get(`${API_BASE_URL}/api/groups`),

    // Get group by id
    get_group_by_id: (groupId) => axios.get(`${API_BASE_URL}/api/groups/${groupId}`),

    // Get user group
    get_user_groups: (userId) => axios.get(`${API_BASE_URL}/api/groups/user/${userId}`),

    // Leave group
    leave_group: (userId, groupId) => axios.delete(`${API_BASE_URL}/api/groups/user/${userId}/group/${groupId}`),

    // Create group
    create_group: (data) => axios.post(`${API_BASE_URL}/api/groups/`, data),

    // Join group
    join_group: (groupId, data) => axios.post(`${API_BASE_URL}/api/groups/${groupId}/join`, data),

    // Join group
    join_group_by_invite: (data) => axios.post(`${API_BASE_URL}/api/groups/join`, data),

    // Create task
    create_task: (groupId, data) => axios.post(`${API_BASE_URL}/api/groups/${groupId}/tasks`, data),

    // Create event
    create_event: (groupId, data) => axios.post(`${API_BASE_URL}/api/groups/${groupId}/events`, data),

    // Upload file
    upload_file: (groupId, formData) => axios.post(`${API_BASE_URL}/api/groups/${groupId}/files/upload`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }),

    // Get files
    get_files: (groupId, data) => axios.get(`${API_BASE_URL}/api/groups/${groupId}/files`, data),

    // Download file
    download_file: (groupId, fileName) => axios.get(`${API_BASE_URL}/api/groups/${groupId}/files/download/${fileName}`, {
        responseType: 'blob'
    }),

    // Log call
    log_call: (groupId, data) => axios.post(`${API_BASE_URL}/api/groups/${groupId}/calls`, data)
};
