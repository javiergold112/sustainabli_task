const TableHeader = () => {
  const headers = [
    "#",
    "Sensor ID",
    "Device Type",
    "Location",
    "Time",
    "Sash Height",
    "Status",
    "Temperature",
    "Humidity",
  ];

  return (
    <thead>
      <tr className="bg-gray-100">
        {headers.map((header, index) => (
          <th
            key={index}
            className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
