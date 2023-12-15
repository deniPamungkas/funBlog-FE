import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SearchInput = () => {
  return (
    <div className="bg-slate-200 w-full h-10 rounded-full flex items-center justify-center px-4 dark:text-black">
      <input
        type="text"
        placeholder="search"
        className="outline-none w-full bg-slate-200 text-sm"
      />
      <SearchOutlinedIcon />
    </div>
  );
};

export default SearchInput;
