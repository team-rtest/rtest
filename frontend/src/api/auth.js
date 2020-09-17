import axios from 'axios';

const login = async (username, password) => {
      return await axios({
        method: 'post',
        url: 'localhost:4000/login',
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded'
          },
        data: {
            'username': username,
            'password': password,
        }
      });
}

export default { login };
