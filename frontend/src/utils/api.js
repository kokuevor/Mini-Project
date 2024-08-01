import axios from 'axios';

// Access the API base URL from environment variables
// const API_BASE_URL = import.meta.env.API_BASE_URL;
const API_BASE_URL = "http://localhost:5000/api";
// console.log(API_BASE_URL);

export const api = {
    // User registration
    register: (data) => axios.post(`${API_BASE_URL}/auth/register`, data),

    // User login
    login: (data) => axios.post(`${API_BASE_URL}/auth/login`, data),

    // Get groups
    get_groups: () => axios.get(`${API_BASE_URL}/groups`),

    // Create group
    create_group: (data) => axios.post(`${API_BASE_URL}/groups/`, data),

    // Join group
    join_group: (groupId, data) => axios.post(`${API_BASE_URL}/groups/${groupId}/join`, data),
    
    // Join group
    join_group_by_invite: (data) => axios.post(`${API_BASE_URL}/groups/join`, data),
    
    // Send message
    send_message: (groupId, data) => axios.post(`${API_BASE_URL}/groups/${groupId}/messages`, data),

    // Create task
    create_task: (groupId, data) => axios.post(`${API_BASE_URL}/groups/${groupId}/tasks`, data),

    // Create event
    create_event: (groupId, data) => axios.post(`${API_BASE_URL}/groups/${groupId}/events`, data),

    // Upload file
    upload_file: (groupId, formData) => axios.post(`${API_BASE_URL}/groups/${groupId}/files`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }),

    // Log call
    log_call: (groupId, data) => axios.post(`${API_BASE_URL}/groups/${groupId}/calls`, data)
};
