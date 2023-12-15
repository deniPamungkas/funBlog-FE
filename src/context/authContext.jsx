import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const AuthContext = createContext();
const AuthContextComp = (props) => {
  //handle sessionStorage authentication
  const [user, setUser] = useState(
    JSON.parse(window.sessionStorage.getItem("userData")) || null
  );
  useEffect(() => {
    window.sessionStorage.setItem("userData", JSON.stringify(user));
  }, [user]);
  //handle error message
  const [err, setErr] = useState(null);
  //hit API for Login
  const login = async (e) => {
    try {
      const response = await axios.post(
        "https://api-fun-blog-deni-pamungkas.vercel.app/auth/login",
        e,
        {
          withCredentials: true,
        }
      );
      setUser(response.data);
      window.location.pathname = `/`;
      return response;
    } catch (error) {
      return setErr(error.response.data);
    }
  };
  //hit API for Logout
  const logout = async () => {
    window.sessionStorage.removeItem("userData");
    try {
      const response = await axios.get(
        "https://api-fun-blog-deni-pamungkas.vercel.app/auth/logout",
        {
          withCredentials: true,
        }
      );
      window.location.reload();
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider value={{ login, err, setErr, user, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

AuthContextComp.propTypes = {
  children: PropTypes.any,
};

export default AuthContextComp;
