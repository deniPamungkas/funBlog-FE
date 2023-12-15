import axios from "axios";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Button from "../components/button/button";
import { useFormik } from "formik";
import * as yup from "yup";
import { Alert } from "@mui/material";
import { useEffect, useState } from "react";
const SignUp = () => {
  const [alert, setAlert] = useState(false);
  const [inputErr, setInputErr] = useState(null);

  //handle hit API signUp
  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        "https://api-fun-blog-deni-pamungkas.vercel.app/auth/signUp",
        formik.values
      );
      setAlert(true);
      formik.setFieldValue("username", "");
      formik.setFieldValue("email", "");
      formik.setFieldValue("password", "");
      setInputErr(null);
      return response;
    } catch (error) {
      if (error.response.data.keyValue)
        return setInputErr(error.response.data.keyValue);
      console.log(error.response.data.keyValue);
    }
  };

  //handle error message
  const clearErr = () => {
    setTimeout(() => {
      setInputErr(null);
    }, 10000);
  };
  useEffect(() => {
    clearErr();
  }, [inputErr]);

  //handle form signUp
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: handleSignUp,
    validationSchema: yup.object().shape({
      username: yup.string().matches(/^[^\s]{3,15}$/),
      email: yup.string().email(),
      password: yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
    }),
  });
  const handleChange = (e) => {
    formik.setFieldValue(e.target.name, e.target.value);
  };
  return (
    <section className="h-screen w-screen bg-teal-500 pt-16 relative md:px-20 lg:px-52 xl:px-96 2xl:w-3/5 2xl:m-auto">
      <h1 className="text-3xl font-bold text-center mb-14">Sign Up</h1>
      <form
        className="m-auto w-5/6 rounded-lg flex flex-col items-center gap-y-14 mb-5"
        onSubmit={formik.handleSubmit}
      >
        <div className=" w-full h-content flex flex-col first-letter gap-y-5">
          <div className=" w-full h-12 rounded-full bg-white flex items-center gap-x-3 px-7">
            <PersonOutlineOutlinedIcon />
            <input
              name="username"
              type="text"
              placeholder="username"
              className="w-full bg-transparent outline-none"
              value={formik.values.username}
              onChange={handleChange}
            />
          </div>
          {formik.errors.username && (
            <p className="-mt-4 text-red-700 text-xs ml-7">
              username min 3 karakter max 12 karakter not allowed whitespace
            </p>
          )}

          <div className=" w-full h-12 rounded-full bg-white flex items-center gap-x-3 px-7">
            <MailOutlineIcon />
            <input
              name="email"
              type="email"
              placeholder="email"
              className="w-full bg-transparent outline-none"
              value={formik.values.email}
              onChange={handleChange}
            />
          </div>
          {formik.errors.email && (
            <p className="-mt-4 text-red-700 text-xs ml-7">
              format email harus benar
            </p>
          )}
          <div className=" w-full h-12 rounded-full bg-white flex items-center gap-x-3 px-7">
            <LockOutlinedIcon />
            <input
              name="password"
              type="password"
              placeholder="password"
              className="w-full bg-transparent outline-none"
              value={formik.values.password}
              onChange={handleChange}
            />
          </div>
          {formik.errors.password && (
            <p className="-mt-4 text-red-700 text-xs ml-7">
              password must contain minimum 8 characters, at least one letter
              and one number
            </p>
          )}
        </div>
        <Button
          className=" bg-purple-400 w-full h-10 m-auto rounded-full"
          type={"submit"}
        >
          Sign Up
        </Button>
      </form>
      <h1 className="text-center bottom-5 mb-10">
        Already have an account?{" "}
        <a href="/login" className="underline font-semibold">
          Login
        </a>
      </h1>
      {alert && (
        <Alert
          sx={{ width: "90%", margin: "auto" }}
          severity="success"
          onClose={() => {
            setAlert(false);
          }}
        >
          Success creating your new account!
        </Alert>
      )}
      {inputErr && (
        <Alert sx={{ width: "90%", margin: "auto" }} severity="error">
          {Object.keys(inputErr) + " "}
          {inputErr.username || inputErr.email} sudah dipakai
        </Alert>
      )}
    </section>
  );
};

export default SignUp;
