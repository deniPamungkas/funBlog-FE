import { handleCard } from "../../utils/card";
import "./cardA.scss";
import PropTypes from "prop-types";

const CardA = ({ data }) => {
  return (
    <div className="relative w-5/6 h-60 rounded-2xl overflow-hidden shrink-0">
      <img
        src={
          data.postPic != null
            ? "https://api-fun-blog-deni-pamungkas.vercel.app/uploads/" +
              data.postPic
            : "https://w0.peakpx.com/wallpaper/469/784/HD-wallpaper-john-wick-chapter-4-poster.jpg"
        }
        alt=""
        className="w-full h-full object-cover"
      />
      <div
        className="overlay absolute left-0 top-0 bottom-0 right-0 z-10 text-white flex flex-col justify-end items-start p-3"
        id={data._id}
        onClick={handleCard}
      >
        <p className="text-sm">Author</p>
        <div className="text-md font-bold">{data.title}</div>
      </div>
    </div>
  );
};

CardA.propTypes = {
  data: PropTypes.any,
};
export default CardA;
