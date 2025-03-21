const RowsPerPage = ({ currentLimit, onLimitChange }) => {
  const options = [10, 20, 30, 40, 50];

  return (
    <div>
      <p>
        Rows of Table
        <select
          value={currentLimit}
          className="mx-3 w-24 px-2 h-10 rounded border-2 border-black/20"
          onChange={(e) => onLimitChange(e.target.value)}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </p>
    </div>
  );
};
export default RowsPerPage;
