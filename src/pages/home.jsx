import { Link } from "react-router-dom";
import Club from "../components/clubs/clubs";
import CardC from "../components/newsCard/cardC";
import CardD from "../components/newsCard/cardD";
import CardE from "../components/newsCard/cardE";
import Header from "../template/header/header";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Home = () => {
  return (
    <div className="home min-h-screen px-5 py-5 xl:px-40 2xl:w-3/5 2xl:m-auto dark:bg-gray-800 dark:text-white">
      <Header />
      <section className="mt-72 font-semibold md:mt-5">
        <span className="flex justify-between items-end">
          <h1 className=" text-xl">Recommended for you</h1>
          <Link to={"/recommended"}>
            <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">
              Show More{" "}
              <KeyboardDoubleArrowRightIcon style={{ fontSize: "medium" }} />
            </p>
          </Link>
        </span>
        <div className="py-3 flex flex-col md:flex-row gap-3">
          <CardC />
          <CardC />
          <CardC />
          <CardC />
        </div>
      </section>
      <section className="clubs flex gap-x-3 mt-3">
        <Club />
        <Club />
        <Club />
      </section>
      <section className="font-semibold mt-5">
        <span className="flex justify-between items-end">
          <h1 className=" text-xl ">Must read</h1>
          <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">
            Show More{" "}
            <KeyboardDoubleArrowRightIcon style={{ fontSize: "medium" }} />
          </p>
        </span>
        <div className="flex h-72 gap-2 md:gap-5 mt-3">
          <CardD />
          <div className="flex flex-col md:flex-row gap-y-2 md:hidden">
            <CardE />
            <CardE />
          </div>
          <div className="hidden md:flex w-full gap-x-4">
            <CardC />
            <CardC />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
