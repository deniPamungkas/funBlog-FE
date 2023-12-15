const Club = () => {
  return (
    <div className="w-24 h-24 rounded-full flex flex-col justify-center items-center">
      <div className="w-20 h-20 rounded-full flex justify-center items-end pb-1 border-2 border-teal-600">
        <img
          src="logo/Arsenal.png"
          alt=""
          className="object-contain w-16 h-16"
        />
      </div>
      <p className="text-xs">Arsenal</p>
    </div>
  );
};

export default Club;
