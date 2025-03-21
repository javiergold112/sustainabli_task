import { createBrowserRouter } from "react-router-dom";
import authRoutes from "./auth/auth";
import HomeRoutes from "./innerPages/innerPages";
export const publicRoutes = createBrowserRouter([...authRoutes, ...HomeRoutes]);
