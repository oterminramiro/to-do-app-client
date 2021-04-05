import axios from 'axios';

const API_URL = 'http://localhost:8000/api/customers/';

class AuthService {
	login(user) {
		return axios.post(API_URL + 'login', {
			email: user.username,
			password: user.password
		})
		.then(response => {
			if (response.data.data.token) {
				localStorage.setItem('user', JSON.stringify(response.data.data));
			}
			return response.data.data;
		});
	}

	logout() {
		localStorage.removeItem('user');
	}

	register(user) {
		return axios.post(API_URL + 'create', {
			name: user.name,
			lastname: user.lastname,
			email: user.email,
			password: user.password
		})
		.then(response => {
			return response.data.data;
		});
	}
}

export default new AuthService();
