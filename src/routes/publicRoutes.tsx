import Category from "../pages/Category";
import Completed from "../pages/Completed";
import Followed from "../pages/Followed";
import Home from "../pages/Home";
const publicRoutes = [
  { index: true, element: <Home /> },
  { path: "followed", element: <Followed /> },
  { path: "completed", element: <Completed /> },
  { path: "category/:maTheLoai", element: <Category /> },
];

export default publicRoutes;
