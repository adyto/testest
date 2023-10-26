import TokenService from './TokenService';
import api from './api';
class AuthService {
  async login(userId, password) {
    return api
      .post('/api/auth/login', {
        userId,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          TokenService.setUser(response.data);
        }
      });
    //   .catch((err) => console.log(err));
  }
  logout() {
    TokenService.removeUser();
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  forgotpassword(email) {
    return api.post('/api/auth/forgotpassword', {
      email,
    });
  }

  resetpassword(data) {
    return api.post('/api/auth/resetpassword', data);
  }

  register(data) {
    return api.post('/api/auth/signup', data);
  }
}

export default new AuthService();
