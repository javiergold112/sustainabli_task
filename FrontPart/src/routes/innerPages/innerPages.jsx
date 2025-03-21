import Home from "../../components/home";
import ListOfSensorData from "../../components/listOfSensorData/listOfSensorData";
import NewSensorData from "../../components/newSensorData/newSensorData";

const HomeRoutes = [
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, element: <ListOfSensorData /> },
      { path: "/new-sensor-data", element: <NewSensorData /> },
    ],
  },
];

export default HomeRoutes;
