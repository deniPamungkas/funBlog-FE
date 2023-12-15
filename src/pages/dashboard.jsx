import AddIcon from "@mui/icons-material/Add";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import BlogCard from "../components/blogCard/blogCard";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/authContext";
import { useQuery } from "react-query";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [allMyPost, setAllMyPost] = useState(null);
  const [menu, setMenu] = useState("all");
  const draft = allMyPost?.filter((item) => {
    return item.draft == true;
  });
  const valid = () => {
    if (user == null) return (window.location.pathname = "/");
  };
  valid();
  const { isLoading } = useQuery("fetchMyPost", async () => {
    try {
      const response = await axios.get(
        "https://api-fun-blog-deni-pamungkas.vercel.app/post/getMyPost",
        {
          withCredentials: true,
        }
      );
      setAllMyPost(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  });
  const handleMenu = (e) => {
    setMenu(e.target.id);
  };
  return (
    <section className=" min-h-screen p-7 bg-gray-200 dark:bg-gray-700 xl:px-40 2xl:w-3/5 2xl:m-auto">
      <div className="w-full h-10 flex justify-between items-center mb-10">
        <h1 className="text-2xl lg:text-3xl font-bold cursor-pointer dark:text-white">
          Dashboard
        </h1>
        <Link to={"/write/0"}>
          <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center lg:hidden">
            <AddIcon />
          </div>
        </Link>
      </div>
      <div className="w-full block lg:flex lg:gap-x-2">
        <div className="w-1/6 bg-gray-300 dark:bg-gray-600 hidden lg:block">
          <ul className="flex w-full dark:text-white flex-col justify-center p-5 gap-y-2 font-semibold">
            <li
              className="h-16 w-full border-b-2 flex items-center justify-start px-5"
              id="all"
              onClick={handleMenu}
            >
              All
            </li>
            <li
              className="h-16 w-full border-b-2 flex items-center justify-start px-5"
              id="drafts"
              onClick={handleMenu}
            >
              Drafts
            </li>
            <li
              className="h-16 w-full border-b-2 flex items-center justify-start px-5"
              id="review"
              onClick={handleMenu}
            >
              Review
            </li>
            <li
              className="h-16 w-full border-b-2 flex items-center justify-start px-5"
              id="stats"
              onClick={handleMenu}
            >
              Stats
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-5/6">
          <div className="h-14 w-full bg-white dark:bg-gray-300 flex items-center px-3 mb-1 lg:mb-3">
            <SearchOutlinedIcon />
            <input
              type="text"
              placeholder="search item.."
              className="text-black bg-white dark:bg-gray-300 placeholder:text-black px-2 w-full text-xl outline-none"
            />
          </div>
          <ul className="flex h-14 w-full dark:text-white lg:hidden">
            <li
              className={`h-full ${
                menu == "all" && "bg-gray-300 dark:bg-gray-600"
              } flex items-center justify-center w-1/4`}
              id="all"
              onClick={handleMenu}
            >
              All
            </li>
            <li
              className={`h-full ${
                menu == "drafts" && "bg-gray-300 dark:bg-gray-600"
              } flex items-center justify-center w-1/4`}
              id="drafts"
              onClick={handleMenu}
            >
              Drafts
            </li>
            <li
              className="h-full flex items-center justify-center w-1/4"
              id="review"
              onClick={handleMenu}
            >
              Review
            </li>
            <li
              className="h-full flex items-center justify-center w-1/4"
              id="stats"
              onClick={handleMenu}
            >
              Stats
            </li>
          </ul>
          {isLoading ? (
            <p className="dark:text-white font-bold">LOADING</p>
          ) : allMyPost?.length ? (
            <div className="w-full bg-gray-300 dark:bg-gray-600 flex flex-col gap-y-2 p-3 lg:p-0 lg:bg-transparent lg:gap-y-3">
              {menu == "all" &&
                allMyPost?.map((item, index) => {
                  return <BlogCard key={index} data={item} />;
                })}
              {menu == "drafts" ? (
                draft?.length ? (
                  draft?.map((item, index) => {
                    return <BlogCard key={index} data={item} />;
                  })
                ) : (
                  <div className=" w-full h-52 bg-gray-500 rounded-lg flex justify-center items-center">
                    <h1 className="text-xl font-semibold text-white">
                      You dont have any draft
                    </h1>
                  </div>
                )
              ) : null}
            </div>
          ) : (
            <div className=" w-full h-52 bg-gray-500 rounded-lg flex justify-center items-center">
              <h1 className="text-xl font-semibold text-white">
                You didnt make any post yet
              </h1>
            </div>
          )}
        </div>
      </div>
      <div className="w-full justify-end hidden lg:flex mt-5">
        <Link to={"/write/0"}>
          <div className="h-16 w-16 rounded-full bg-gray-300 dark:bg-gray-400 flex items-center justify-center">
            <AddIcon style={{ fontSize: "large" }} />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Dashboard;
