import { Navigate } from "react-router-dom";
import FlightsPage from "../pages/FlightsPage/FlightsPage";
import SearchPage from "../pages/SearchPage/SearchPage";

export const APP_ROUTES = [
  {
    path: "/avia",
    element: <SearchPage />,
  },
  {
    path: "/avia/info",
    element: <FlightsPage />,
  },
  {
    path: "*",
    element: <Navigate to="/avia" />,
  },
];
