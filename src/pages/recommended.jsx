import { useQuery } from "react-query";
import CardB from "../components/newsCard/cardB";
import axios from "axios";

const Recommended = () => {
  const { isLoading, data } = useQuery("fetchRecommended", async () => {
    try {
      const response = await axios.get(
        "https://api-fun-blog-deni-pamungkas.vercel.app/post/getPosts"
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <section className="min-h-screen flex flex-col items-center gap-y-10 md:gap-y-14 px-5 py-5 xl:px-40 2xl:w-3/5 2xl:m-auto dark:text-white">
      <div className="w-full flex justify-start">
        <div className="border-2 h-10 px-5 w-auto rounded-full flex items-center justify-between">
          Recommended for you
        </div>
      </div>
      {isLoading
        ? null
        : data.map((item, index) => {
            return <CardB key={index} data={item} />;
          })}
    </section>
  );
};

export default Recommended;
