import { useEffect, useState } from "react";
import axiosClient from "../../services/axiosClient";
import Comics from "../../components/Comics";
import Pagination from "../../components/Pagination";
import HistoryComics from "../../components/HistoryComics";
import { ListTruyen } from "../../interface/ListTruyen";

function Completed() {
  const [listTruyens, setListTruyens] = useState<ListTruyen[]>([]);
  const [trangHienTai, setTrangHienTai] = useState(1);
  const [tongSoTrang, setTongSoTrang] = useState(10);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axiosClient
      .get(`/danh-sach/hoan-thanh?page=${trangHienTai}`)
      .then((response) => {
        let truyens = response.data.items
          .filter((item: any) => item.chaptersLatest != null)
          .map((item: any) => ({
            _id: item._id,
            name: item.name,
            slug: item.slug,
            thumb_url: item.thumb_url,
            chapter_lates: item.chaptersLatest.map((chapterlates: any) => ({
              chapter_name: chapterlates.chapter_name,
              chapter_api_data: chapterlates.chapter_api_data,
            })),
          }));
        setTongSoTrang(response.data.params.pagination.totalItems);
        setListTruyens(truyens);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [trangHienTai]);
  return (
    <div className="mt-2 flex flex-col md:flex-row gap-2 px-2 md:px-0">
      <div className=" flex-1">
        <h1 className="text-2xl  mb-4 text-blue-500">Truyện đã hoàn thành</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {loading
            ? Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse bg-gray-400 rounded-lg h-60"
                />
              ))
            : listTruyens.map((truyen) => (
                <Comics
                  key={truyen._id}
                  thumbnail={truyen.thumb_url}
                  slug={truyen.slug}
                  name={truyen.name}
                  chapter_name={truyen.chapter_lates[0].chapter_name}
                  api_truyen={truyen.chapter_lates[0].chapter_api_data}
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
      <div className="md:w-xs">
        <div className="border border-gray-300 rounded-lg">
          <h1 className="text-2xl  mb-4 text-blue-500 p-2">Truyện đã đọc</h1>
          {[1, 2, 3].map((item, index, array) => {
            return <HistoryComics item={item} index={index} array={array} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Completed;
