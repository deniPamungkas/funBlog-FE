const CardD = () => {
  return (
    <div className="relative w-2/5 h-full rounded-2xl overflow-hidden shrink-0">
      <img
        src="https://w0.peakpx.com/wallpaper/469/784/HD-wallpaper-john-wick-chapter-4-poster.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="overlay absolute left-0 top-0 bottom-0 right-0 z-10 text-white flex flex-col justify-end items-start p-3">
        <p className="text-xs">Author</p>
        <div className="text-xs font-bold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
          beatae illo.
        </div>
      </div>
    </div>
  );
};

export default CardD;
