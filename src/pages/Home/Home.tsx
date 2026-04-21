import { useEffect, useState } from "react";
import ComicUC from "./components/ComicUC/ComicUC";
import axiosClient from "../../services/axiosClient";
import Pagination from "../../components/Pagination";
import ListComics from "../../components/ListComics";
import HistoryComics from "../../components/HistoryComics";
interface listTruyen {
  _id: string;
  name: string;
  slug: string;
  thumb_url: string;
  chapter_name: string;
}

function Home() {
  const [listTruyens, setListTruyens] = useState<listTruyen[]>([]);
  const [trangHienTai, setTrangHienTai] = useState(1);
  const [tongSoTrang, setTongSoTrang] = useState(10);
  const isLoading = !listTruyens || listTruyens.length === 0;
  useEffect(() => {
    axiosClient.get("/danh-sach/dang-phat-hanh").then((response) => {
      let truyens = response.data.items.map((item: any) => ({
        _id: item._id,
        name: item.name,
        slug: item.slug,
        thumb_url: item.thumb_url,
        chapter_name: item.chaptersLatest[0].chapter_name,
      }));
      setListTruyens(truyens);
    });
  }, []);

  return (
    <div>
      <h1 className="text-2xl  mb-4 text-blue-500">Truyện sắp ra &gt;</h1>
      <div className="mt-2">
        <ComicUC />
      </div>
      <div className="mt-2 flex flex-row gap-2">
        <div className=" flex-1">
          <h1 className="text-2xl  mb-4 text-blue-500">
            VuiTruyen truyện gì cũng có
          </h1>
          <div className="grid grid-cols-4 gap-4 mt-4">
            {isLoading
              ? Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className="animate-pulse bg-gray-400 rounded-lg h-60"
                  />
                ))
              : listTruyens.map((truyen, index) => (
                  <ListComics
                    key={index}
                    thumbnail={truyen.thumb_url}
                    slug={truyen.slug}
                    name={truyen.name}
                    chapter_name={truyen.chapter_name}
                  />
                ))}
          </div>
          <div className="mt-4">
            <Pagination
              trangHienTai={trangHienTai}
              tongSoTrang={tongSoTrang}
              setTrangHienTai={setTrangHienTai}
            />
          </div>
        </div>
        <div className="w-xs">
          <div className="border border-gray-300 rounded-lg">
            <h1 className="text-2xl  mb-4 text-blue-500 p-2">Truyện đã đọc</h1>
            {[1, 2, 3, 4, 5].map((item, index, array) => {
              return (
                <HistoryComics
                  key={index}
                  item={item}
                  index={index}
                  array={array}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
