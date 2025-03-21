const TableRow = ({ item, index }) => {
  return (
    <tr className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {item.id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {item.sensorId}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {item.deviceType}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {item.location}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {new Date(item.time).toLocaleString()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {item.sashHeight}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {item.status}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {item.temperature}°C
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {item.humidity}%
      </td>
    </tr>
  );
};
export default TableRow;
