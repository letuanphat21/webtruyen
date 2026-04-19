import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import publicRoutes from "./publicRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: publicRoutes,
  },
]);

export default router;
