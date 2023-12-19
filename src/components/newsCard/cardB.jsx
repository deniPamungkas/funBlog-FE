import PropTypes from "prop-types";
import moment from "moment";
import { handleCard } from "../../utils/card";

const CardB = ({ data }) => {
  return (
    <div className="block md:flex w-full md:h-52 gap-x-5 dark:text-white">
      <img
        src={
          data.postPic != null
            ? "https://api-fun-blog-deni-pamungkas.vercel.app/uploads/" +
              data.postPic
            : "https://w0.peakpx.com/wallpaper/469/784/HD-wallpaper-john-wick-chapter-4-poster.jpg"
        }
        alt=""
        className="flex-1 rounded-xl w-full max-h-52 lg:max-h-80 object-cover md:max-w-xs bg-gray-100"
      />
      <div className="flex-1 h-full flex flex-col justify-between p-1 lg:px-5">
        <span className="text-sm">
          Author - {moment(data.createdAt).fromNow()}
        </span>
        <div className="" id={data._id} onClick={handleCard}>
          <h1
            id={data._id}
            className="text-lg leading-6 md:text-xl lg:text-2xl h-14 lg:h-16 font-semibold overflow-hidden text-ellipsis cursor-pointer"
          >
            {data.title}
          </h1>
        </div>
        <div className="h-12 md:h-16 max-h-16 max-w-full flex items-start lg:h-24 text-xs lg:text-sm text-ellipsis overflow-hidden mb-1">
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
        <div className="text-sm font-bold text-gray-500">
          Movies - 4 min read
        </div>
      </div>
    </div>
  );
};

CardB.propTypes = {
  data: PropTypes.any,
  postPic: PropTypes.string,
};

export default CardB;
