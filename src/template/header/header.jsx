import { useQuery } from "react-query";
import CardA from "../../components/newsCard/cardA";
import axios from "axios";

const Header = () => {
  const { isLoading, data } = useQuery("fetchRecommended", async () => {
    try {
      const response = await axios.get(
        "https://api-fun-blog-deni-pamungkas.vercel.app/post/getPosts"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  });
  const con = data?.slice(0, 5);
  return (
    <section className="">
      <div className="w-full flex gap-x-5 overflow-scroll absolute left-0 mt-5 md:hidden pl-5">
        {isLoading
          ? null
          : con.map((item, index) => {
              return <CardA key={index} data={item} />;
            })}
      </div>
    </section>
  );
};

export default Header;
