import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchInput from "../searchInput.jsx/searchInput";
import DragHandleOutlinedIcon from "@mui/icons-material/DragHandleOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Brightness5OutlinedIcon from "@mui/icons-material/Brightness5Outlined";
import { useContext, useState } from "react";
import "./navbar.scss";
import { DarkContext } from "../../context/darkModeContext";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { handleMode, dark } = useContext(DarkContext);
  const { user, logout } = useContext(AuthContext);
  // handle aktif/nonAktif sideMenu
  const [side, setSide] = useState(false);
  const handleSide = () => {
    setSide((cur) => !cur);
  };
  // handle scroll off ketika sideMenu aktif
  const scroll = () => {
    if (side) return (document.body.style.overflow = "hidden");
    else document.body.style.overflow = "auto";
  };
  scroll();
  //handle nonAktif sideMenu ketika ukuran layar berubah
  window.addEventListener("resize", function () {
    setSide(false);
  });

  const handleLogout = () => {
    logout();
  };
  return (
    <nav className="w-full h-16 flex justify-between items-center px-5 xl:px-40 2xl:w-3/5 2xl:m-auto overflow-hidden dark:text-white dark:bg-gray-800">
      <Link to={"/"}>
        <h1 className="text-lg font-bold cursor-pointer text-emerald-600">
          DFootball.
        </h1>
      </Link>
      <div className="md:hidden">
        <span onClick={handleSide}>
          <DragHandleOutlinedIcon />
        </span>
        <div
          className={`${
            side == true ? "show" : "sideMenu"
          } bg-white absolute z-20 text-lg dark:bg-gray-800`}
        >
          <button
            onClick={handleSide}
            className="w-20 h-20 bg-red-400 absolute left-0 top-0"
          >
            X
          </button>
          <ul
            className="w-full h-auto px-4 py-2 flex-col flex gap-y-2
            mt-32"
          >
            <li className="w-full h-14 rounded-md flex items-center px-3 dark:text-black">
              <SearchInput />
            </li>
            <li className="w-full h-14 flex items-center px-3 rounded-md">
              Categories
            </li>
            <Link to={"/dashboard"}>
              <li
                className="w-full h-14 flex items-center px-3 rounded-md"
                onClick={handleSide}
              >
                Dashboard
              </li>
            </Link>
            {user ? (
              <Link to={"/write/0"}>
                <li
                  className="w-full h-14 flex items-center px-3 rounded-md"
                  onClick={handleSide}
                >
                  Write
                </li>
              </Link>
            ) : (
              <Link to={"/signUp"}>
                <li
                  className="w-full h-14 flex items-center px-3 rounded-md"
                  onClick={handleSide}
                >
                  Write
                </li>
              </Link>
            )}
            {user ? (
              <li
                className="w-full h-14 flex items-center px-3 rounded-md"
                onClick={handleLogout}
              >
                Logout
              </li>
            ) : (
              <Link to={"/signUp"}>
                <li
                  className="w-full h-14 flex items-center px-3 rounded-md"
                  onClick={handleSide}
                >
                  Sign In
                </li>
              </Link>
            )}
          </ul>
          <div className="w-full h-14 absolute bottom-5 px-7">
            <div className="w-full h-14 bg-slate-200 rounded-md px-3 flex justify-between gap-x-5 items-center dark:text-black">
              <h1 className="font-semibold">Dark Mode</h1>
              <div
                className="w-10 h-10 flex justify-start items-center overflow-hidden bg-slate-100 rounded-full relative"
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
          </div>
        </div>
      </div>
      <ul className="hidden md:flex h-full justify-center gap-x-4 items-center md:1/2 lg:w-2/5 font-semibold">
        <li className="navlinkA h-full flex items-center cursor-pointer">
          Categories <KeyboardArrowDownIcon style={{ fontSize: "small" }} />
          <ul className="drMenuA p-2 border-2 rounded-lg bg-white absolute top-16 dark:bg-gray-800 dark:text-white cursor-default">
            <li className="py-1 px-1 mb-1 hover:text-teal-200 text-sm cursor-pointer">
              Premier League
            </li>
            <li className="py-1 px-1 mb-1 hover:text-teal-200 text-sm cursor-pointer">
              La Liga
            </li>
            <li className="py-1 px-1 mb-1 hover:text-teal-200 text-sm cursor-pointer">
              Bundesliga
            </li>
            <li className="py-1 px-1 mb-1 hover:text-teal-200 text-sm cursor-pointer">
              Serie A
            </li>
            <li className="py-1 px-1 mb-1 hover:text-teal-200 text-sm cursor-pointer">
              Ligue 1
            </li>
          </ul>
        </li>
        {user ? (
          <Link to={"/dashboard"}>
            <li className="navlinkB flex items-center h-full cursor-pointer">
              Dashboard
            </li>
          </Link>
        ) : (
          <Link to={"/login"}>
            <li className="navlinkB flex items-center h-full cursor-pointer">
              Dashboard
            </li>
          </Link>
        )}
        {user ? (
          <Link to={"/write/0"}>
            <li className="w-full h-14 flex items-center px-3 rounded-md">
              Write
            </li>
          </Link>
        ) : (
          <Link to={"/login"}>
            <li className="w-full h-14 flex items-center px-3 rounded-md">
              Write
            </li>
          </Link>
        )}
        {user ? (
          <li
            className="w-full h-14 flex items-center px-3 rounded-md"
            onClick={handleLogout}
          >
            Logout
          </li>
        ) : (
          <Link to={"/signUp"}>
            <li className="w-full h-14 flex items-center px-3 rounded-md">
              Sign In
            </li>
          </Link>
        )}
      </ul>
      <div className=" hidden lg:flex justify-center gap-x-2 items-center w-1/4">
        <SearchInput />
      </div>
      <div
        className="hidden w-7 h-7 md:flex justify-start items-center overflow-hidden bg-slate-100 rounded-full relative"
        onClick={handleMode}
      >
        <div
          className={`${
            dark ? "darkMode" : ""
          } brightMode h-3 flex justify-around items-center absolute`}
        >
          <DarkModeOutlinedIcon
            style={{ color: "black", fontSize: "medium" }}
          />
          <Brightness5OutlinedIcon
            style={{ color: "orange", fontSize: "medium" }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
