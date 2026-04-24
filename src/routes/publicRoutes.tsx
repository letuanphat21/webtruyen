import Category from "../pages/Category";
import Chaper from "../pages/Chapter/Chapter";
import Completed from "../pages/Completed";
import DetailComic from "../pages/DetailComic";
import Followed from "../pages/Followed";
import Home from "../pages/Home";
const publicRoutes = [
  { index: true, element: <Home /> },
  { path: "followed", element: <Followed /> },
  { path: "completed", element: <Completed /> },
  { path: "category/:maTheLoai", element: <Category /> },
  { path: "detail/:matruyen", element: <DetailComic /> },
  { path: "chapter/:matruyen", element: <Chaper /> },
];

export default publicRoutes;
