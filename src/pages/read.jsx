import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Brightness5OutlinedIcon from "@mui/icons-material/Brightness5Outlined";
import { useContext, useEffect, useState } from "react";
import { DarkContext } from "../context/darkModeContext";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const Read = () => {
  const { handleMode, dark } = useContext(DarkContext);
  const par = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(
          "https://api-fun-blog-deni-pamungkas.vercel.app/post/getOnePost/" +
            par.post_id,
          { withCredentials: true }
        );
        setPost(response.data);
        return response;
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  }, [par.post_id]);
  return (
    <section className="px-5 py-5 min-h-screen dark:bg-gray-800 dark:text-white md:px-20 lg:px-52 xl:px-96 2xl:w-3/5 2xl:m-auto">
      <div className="flex justify-between items-center mb-5">
        <div className="w-14 h-14 bg-gray-300 flex justify-center items-center rounded-full dark:text-black">
          <ArrowBackIosNewIcon />
        </div>
        <Link to={"/"}>
          <h1 className="text-lg font-bold cursor-pointer text-emerald-600">
            DFootball.
          </h1>
        </Link>
        <div
          className="w-10 h-10 flex justify-start items-center overflow-hidden bg-slate-100 rounded-full relative scale-75"
          onClick={handleMode}
        >
          <div
            className={`${
              dark ? "darkMode" : ""
            } brightModeM h-3 flex justify-around items-center absolute`}
          >
            <DarkModeOutlinedIcon style={{ color: "black" }} />
            <Brightness5OutlinedIcon style={{ color: "orange" }} />
          </div>
        </div>
      </div>
      <p className="text-xs mb-1">
        Author - {moment(post?.createdAt).fromNow()} - {post?.category}
      </p>
      <h1 className="text-2xl font-bold mb-3">{post?.title}</h1>
      {post?.postPic ? (
        <>
          <img
            src={
              "https://api-fun-blog-deni-pamungkas.vercel.app/uploads/" +
              post?.postPic
            }
            alt=""
            className="w-full h-72 object-cover rounded-lg"
          />
          <p className="mb-5 text-xs text-gray-500 text-center">
            description of image
          </p>
        </>
      ) : null}
      <div dangerouslySetInnerHTML={{ __html: post?.content }} />
    </section>
  );
};

export default Read;
