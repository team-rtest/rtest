import axios from "axios";
import { stringify } from "qs";

const API = process.env.REACT_APP_API;

const login = (username, password) => {
  const data = stringify({
    username,
    password,
  });

  axios({
    method: "post",
    url: `${API}/login`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const signup = (username, password) => {
  const data = stringify({
    username,
    password,
    // TODO change these later
    instructor: "Fosaucy",
    lastName: "Doe",
    firstName: "John",
    email: "john.doe@gmail.com",
  });

  axios({
    method: "post",
    url: `http://${API}/signup`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default { login, signup };
