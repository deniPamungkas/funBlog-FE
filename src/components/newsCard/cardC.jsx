const CardC = () => {
  return (
    <div className="flex h-28 md:block w-full md:w-48 md:h-72 gap-x-2 md:gap-y-2">
      <img
        src="https://w0.peakpx.com/wallpaper/469/784/HD-wallpaper-john-wick-chapter-4-poster.jpg"
        alt=""
        className="w-1/3 md:w-full rounded-xl h-full md:h-1/2 object-cover bg-gray-200"
      />
      <div className="w-2/3 md:w-full h-full md:h-1/2 flex flex-col justify-between px-1 py-2 md:py-4">
        <span className="text-[10px] text-gray-600 dark:text-gray-400 ">
          Author - 12 minutes ago
        </span>
        <div className="">
          <h1 className="text-sm font-bold ">
            Where to Watch John Wick: Chapter 4, Lorem ipsum dolor consectetur.
          </h1>
        </div>
        <div className="h-10 hidden items-center text-xs">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            corrupti explicabo, unde vel non molestiae voluptate rem blanditiis
            saepe, ipsum ea perspiciatis quibusdam quas exercitationem sapiente
            quae.
          </p>
        </div>
        <p className="text-[10px] text-gray-600 dark:text-gray-400 ">
          Movies - 4 min read
        </p>
      </div>
    </div>
  );
};

export default CardC;
