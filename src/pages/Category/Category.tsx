import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axiosClient from "../../services/axiosClient";
import ListComics from "../../components/ListComics";
import Pagination from "../../components/Pagination";
import useCategories from "../../hooks/useCategories";

interface listTruyen {
  _id: string;
  name: string;
  slug: string;
  thumb_url: string;
  chapter_name: string;
}

function Category() {
  const { maTheLoai } = useParams();
  const location = useLocation();
  const data = location.state;

  const [listTruyens, setListTruyens] = useState<listTruyen[]>([]);
  const [trangHienTai, setTrangHienTai] = useState(1);
  const [tongSoTrang, setTongSoTrang] = useState(10);
  const [loading, setLoading] = useState(true);

  const theloais = useCategories();

  useEffect(() => {
    setLoading(true);

    axiosClient.get(`/the-loai/${maTheLoai}`).then((response) => {
      let truyens = response.data.items.map((item: any) => ({
        _id: item._id,
        name: item.name,
        slug: item.slug,
        thumb_url: item.thumb_url,
        chapter_name: item.chaptersLatest?.[0]?.chapter_name || "no chapter",
      }));

      setListTruyens(truyens);
      setLoading(false);
    });
  }, [maTheLoai]);

  return (
    <div className="mt-2 flex flex-row gap-2">
      <div className="flex-1">
        <h1 className="text-2xl mb-4 text-blue-500">
          Truyện Thể loại {data?.name || maTheLoai}
        </h1>

        <div className="grid grid-cols-4 gap-4 mt-4">
          {loading
            ? Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-400 rounded-lg h-40 mb-2"></div>
                  <div className="bg-gray-400 h-4 w-3/4 mb-1"></div>
                  <div className="bg-gray-400 h-4 w-1/2"></div>
                </div>
              ))
            : listTruyens.map((truyen) => (
                <ListComics
                  key={truyen._id}
                  thumbnail={truyen.thumb_url}
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
      <div className="w-64">
        <div className="border border-gray-300 rounded-lg">
          <h1 className="text-2xl text-blue-500 p-2">Danh sách thể loại</h1>

          <div className="grid grid-cols-2 gap-2 p-4">
            {theloais.map((theloai) => (
              <Link
                key={theloai._id}
                to={`/category/${theloai.slug}`}
                state={{ name: theloai.name }}
                className="hover:text-blue-400 hover:cursor-pointer"
              >
                {theloai.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
