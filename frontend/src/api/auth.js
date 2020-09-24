import axios from "axios";
import { stringify } from "qs";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

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
      console.debug(response["status"]);
      setToken(response["token"]);
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
      setToken(response["token"]);
    })
    .catch((error) => {
      console.log(error);
    });
};

const logout = () => {
  cookies.remove("token");
};

const setToken = (token) => {
  // TODO: I want to store this as httpOnly, but when I try to do so I get
  //
  // Cookie “token” has been rejected
  // because there is already an HTTP-Only cookie but script tried to store a new one.
  cookies.set("token", token, { path: "/", secure: true, sameSite: "strict" });
};

export default { login, signup };
