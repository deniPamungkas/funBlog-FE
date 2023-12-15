import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Button from "../components/button/button";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { Alert } from "@mui/material";
const Login = () => {
  //handle data dari form
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //consume context dari authcontext
  const { login, err, setErr } = useContext(AuthContext);

  //submit form dan hit API
  const handleSubmit = (e) => {
    e.preventDefault();
    login(data);
  };
  return (
    <section className="h-screen w-screen bg-teal-500 pt-16 relative md:px-20 lg:px-52 xl:px-96 2xl:w-3/5 2xl:m-auto">
      <h1 className="text-3xl font-bold text-center mb-14">Login</h1>
      <form
        className="m-auto w-5/6 rounded-lg flex flex-col items-center gap-y-14 mb-5"
        onSubmit={handleSubmit}
      >
        <div className=" w-full h-content flex flex-col first-letter gap-y-5">
          <div className=" w-full h-12 rounded-full bg-white flex items-center gap-x-3 px-7">
            <PersonOutlineOutlinedIcon />
            <input
              name="username"
              type="text"
              placeholder="username or email"
              className="w-full bg-transparent outline-none"
              onChange={handleChange}
            />
          </div>
          <div className=" w-full h-12 rounded-full bg-white flex items-center gap-x-3 px-7">
            <LockOutlinedIcon />
            <input
              name="password"
              type="password"
              placeholder="password"
              className="w-full bg-transparent outline-none"
              onChange={handleChange}
            />
          </div>
        </div>
        <Button
          className=" bg-purple-400 w-full h-10 m-auto rounded-full"
          type="submit"
        >
          Login
        </Button>
      </form>
      <h1 className="text-center bottom-5 mb-10">
        Don`t have account?{" "}
        <a href="/signUp" className="underline font-semibold">
          Sign Up
        </a>
      </h1>
      {err && (
        <Alert
          sx={{ width: "90%", margin: "auto" }}
          severity="error"
          onClose={() => {
            setErr(null);
          }}
        >
          {err}
        </Alert>
      )}
    </section>
  );
};

export default Login;
