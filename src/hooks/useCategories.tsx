import { useEffect, useState } from "react";
import axiosClient from "../services/axiosClient";

interface CategoryInterface {
  _id: string;
  slug: string;
  name: string;
}

function useCategories() {
  const [theloais, setTheLoais] = useState<CategoryInterface[]>([]);

  useEffect(() => {
    axiosClient.get("/the-loai").then((response) => {
      setTheLoais(response.data.items);
    });
  }, []);

  return theloais;
}

export default useCategories;
