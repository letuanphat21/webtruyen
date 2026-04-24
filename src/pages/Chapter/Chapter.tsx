import { useLocation } from "react-router-dom";
import Comments from "../../components/Comments";
import { useEffect, useState } from "react";
import SubHead from "./Subhead.tsx/SubHead";

interface ContentComic {
  _id: string;
  chapter_path: string;
  img_contents: ChapterImage[];
}

interface ChapterImage {
  image_page: number;
  image_file: string;
}

function Chaper() {
  const location = useLocation();
  const data = location.state;

  const [contentComics, setContenComics] = useState<ContentComic>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(data.api_image)
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed");
        return res.json();
      })
      .then((data) => {
        const item = data.data.item;

        const contentComic: ContentComic = {
          _id: item._id,
          chapter_path: item.chapter_path,
          img_contents: item.chapter_image.map((img: ChapterImage) => ({
            image_page: img.image_page,
            image_file: img.image_file,
          })),
        };

        setContenComics(contentComic);
      })
      .catch((err) => {
        console.error(err);
        setError("Không thể tải dữ liệu chapter");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [data.api_image]);

  return (
    <div className="px-2 md:px-0">
      {/* Breadcrumb */}
      <ul className="flex flex-row gap-4">
        <li>
          Trang chủ
          <span className="text-sm text-gray-500">&gt;&gt;</span>
        </li>
        <li>
          {data.name_comic}
          <span className="text-sm text-gray-500">&gt;&gt;</span>
        </li>
        <li>Chapter {data.chapter_name}</li>
      </ul>

      {/* Title */}
      <h1 className="text-2xl text-blue-400 mt-1">
        {data.name_comic} -
        <span className="text-black">Chapter {data.chapter_name}</span>
      </h1>

      {/* SubHead */}
      <SubHead
        chapter_name={data.chapter_name}
        chapter_apis={data.chapters_apis}
        detail_comic={data.detailComic}
      />

      {/* Content */}
      <div className="mt-5 text-center flex flex-col items-center">
        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-500">Đang tải ảnh...</p>
          </div>
        )}

        {/* Error */}
        {error && <p className="text-red-500 font-semibold">{error}</p>}

        {/* Images */}
        {!loading &&
          !error &&
          contentComics?.img_contents.map((img_sc) => {
            return (
              <img
                key={img_sc.image_page}
                className="mb-2 max-w-full"
                loading="lazy"
                src={
                  import.meta.env.VITE_API_CONTENT +
                  "/" +
                  contentComics.chapter_path +
                  "/" +
                  img_sc.image_file
                }
                alt={`page-${img_sc.image_page}`}
              />
            );
          })}
      </div>

      {/* Comments */}
      <Comments />
    </div>
  );
}

export default Chaper;
