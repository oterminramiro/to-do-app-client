import axios from 'axios';
import authHeader from './auth.header';

const API_URL = 'http://localhost:8000/api/tasks/';

class TaskService {
	getTasks() {
		return axios.get(API_URL + 'list', { headers: authHeader() });
	}
	createTask(task) {
		return axios.post(API_URL + 'create', task, { headers: authHeader() });
	}
}

export default new TaskService();
