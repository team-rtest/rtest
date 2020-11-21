import axios from "axios";
import { stringify } from "qs";

const API = process.env.REACT_APP_API;

const login = (username, password) =>
  new Promise((resolve, reject) => {
    const data = stringify({
      username,
      password,
    });

    axios({
      method: "post",
      url: `${API}/login`,
      withCredentials: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data,
    })
      .then((response) => {
        console.debug(response.data["status"]);
        resolve(response);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });

const signup = (username, password) =>
  new Promise((resolve, reject) => {
    const data = stringify({
      username,
      password,
    });

    axios({
      method: "post",
      url: `${API}/signup`,
      withCredentials: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data,
    })
      .then((response) => {
        console.debug(response["status"]);
        resolve(response);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });

const auth = { login, signup };

export default auth;
