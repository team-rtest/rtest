import axios from "axios";
import { stringify } from "qs";

const login = (username, password) => {
  const data = stringify({
    username,
    password,
  });

  axios({
    method: "post",
    url: "localhost:4000/login",
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
    url: "http://localhost:4000/signup",
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
