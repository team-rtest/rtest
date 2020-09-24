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
      console.debug(response.data["status"]);
    })
    .catch((error) => {
      console.log(error);
    });
};

const signup = (username, password) => {
  const data = stringify({
    username,
    password,
  });

  axios({
    method: "post",
    url: `${API}/signup`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data,
  })
    .then((response) => {
      console.debug(response["status"]);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default { login, signup };
