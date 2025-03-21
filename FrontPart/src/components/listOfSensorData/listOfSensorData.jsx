import { useEffect, useState } from "react";
import useSensorDataList from "../../core/hooks/sensorDataList/sensorDataList";
import { Link } from "react-router-dom";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import RowsPerPage from "./components/RowsPerPage";

function ListOfSensorData() {
  const [params, setParams] = useState({
    page: 1,
    limit: 10,
  });

  const [inputSearch, setInputSearch] = useState("");

  const {
    data: sensorData,
    isLoading,
    error,
    refetch,
  } = useSensorDataList(params);

  useEffect(() => {
    refetch();
  }, [params]);

  if (isLoading) {
    return (
      <div className="w-full h-96 flex justify-center items-center text-2xl font-bold">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-3">
      <div className="w-full h-12 flex justify-between items-center content-center mb-5">
        <RowsPerPage
          currentLimit={params.limit}
          onLimitChange={(limit) =>
            setParams({ page: 1, limit: Number(limit) })
          }
        />

        <SearchBar
          value={inputSearch}
          onChange={(value) => setInputSearch(value)}
          onSearch={() => setParams({ ...params, search: inputSearch })}
        />

        <div>
          <button className="bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-sky-600 cursor-pointer">
            <Link to="/new-sensor-data">New SensorData</Link>
          </button>
        </div>
      </div>

      <div className="w-full">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <TableHeader />
            <tbody className="bg-white divide-y divide-gray-300">
              {sensorData?.data?.map((item, index) => (
                <TableRow key={item.id} item={item} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Pagination
        currentPage={params.page}
        totalPages={sensorData?.meta?.totalPages}
        onPageChange={(page) => setParams({ ...params, page })}
      />
    </div>
  );
}

export default ListOfSensorData;
