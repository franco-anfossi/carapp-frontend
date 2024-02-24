import axios from 'axios';

const projectApi = axios.create({
    baseURL: 'https://carapp-36ec.onrender.com/api/projects/',
});

export const getAllProjects = () => projectApi.get('/');

export const createProject = (project) => projectApi.post('/', project);

export const deleteProject = (id) => projectApi.delete(`/${id}`);

export const updateProject = (id, project) => projectApi.put(`/${id}/`, project);

export const getProject = (id) => projectApi.get(`/${id}`);

