import CardB from "../components/newsCard/cardB";

const MustRead = () => {
  return (
    <section className="min-h-screen flex flex-col items-center gap-y-8 md:gap-y-14 px-5 py-5 xl:px-40 2xl:w-3/5 2xl:m-auto dark:text-white">
      <div className="w-full flex justify-start">
        <div className="border-2 h-10 px-5 w-auto rounded-full flex items-center justify-between">
          Must Read
        </div>
      </div>
      <CardB />
      <CardB />
      <CardB />
      <CardB />
      <CardB />
      <CardB />
      <CardB />
      <CardB />
      <CardB />
    </section>
  );
};

export default MustRead;
