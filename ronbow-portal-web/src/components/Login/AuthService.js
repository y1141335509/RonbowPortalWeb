// AuthService.js
export const AuthService = {
  isAuthenticated: false,
  login(username, password, cb) {
    const userCredentials = { username: 'user', password: 'pass' };
    if (username === userCredentials.username && password === userCredentials.password) {
      this.isAuthenticated = true;
      cb(true);
    } else if (username !== userCredentials.username) {
      cb(false, 'User does not exist');
    } else {
      cb(false, 'Invalid login credentials');
    }
  },
};
