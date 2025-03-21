const SearchBar = ({ value, onChange, onSearch }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        value={value}
        placeholder="Search..."
        className="px-4 py-2 border-2 border-blue-500 rounded-md focus:outline-none focus:border-blue-600"
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        onClick={onSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer"
      >
        Search
      </button>
    </div>
  );
};
export default SearchBar;
