import { Link } from "react-router-dom";
import randomDay from "../../../utils/RandomDay";
import { useState } from "react";

function ListChapter({ detailComic }: { detailComic: any }) {
  const [viewMore, setViewMore] = useState(false);
  const [chapterShort, setChapterShort] = useState(20);
  const name = detailComic?.name ? detailComic.name : "Đang cập nhập";
  const slug = detailComic?.slug ? detailComic.slug : "Đang cập nhập";
  const handleViewMore = () => {
    setViewMore(true);
    setChapterShort(detailComic?.chapters ? detailComic.chapters.length : 20);
  };
  return (
    <div className="mt-2 ">
      <div className="border-b border-blue-400">Danh sách chương</div>
      <div className="grid grid-cols-3 gap-4">
        <div className="px-3">Số chương</div>
        <div className="px-3">Cập nhập</div>
        <div className="px-3">Lượt xem</div>
      </div>
      <div>
        <ul className="flex flex-col border border-gray-200 rounded justify-center">
          {detailComic?.chapters
            .slice(0, chapterShort)
            .map((chapter: any, index: number, chapters: any) => {
              return (
                <li
                  key={index}
                  className="relative grid grid-cols-3 gap-10 px-3 after:w-4/5 after:content-[''] after:absolute
                      after:left-1/2
                      after:-translate-x-1/2
                after:bottom-0 after:border-b after:border-dashed after:border-gray-200 after:text-center "
                >
                  <Link
                    to={`/chapter/${slug}`}
                    state={{
                      api_image: chapter.chapter_api_data,
                      chapter_name: chapter.chapter_name,
                      name_comic: name,
                      chapters_apis: detailComic.chapters,
                      slug: slug,
                      detailComic: detailComic,
                    }}
                    className="hover:text-blue-500 hover:cursor-pointer"
                  >
                    Chapter {chapter.chapter_name}
                  </Link>
                  <div className="text-gray-400 italic">{randomDay()}</div>
                  <div className="text-gray-400 italic text-sm">
                    {Math.floor(Math.random() * 500 + 1)}
                  </div>
                </li>
              );
            })}
          {viewMore == false && (
            <li
              onClick={handleViewMore}
              className="relative flex flex-row items-center justify-center py-2 hover:text-purple-400  hover:cursor-pointer before:absolute  before:border before:border-transparent before:w-full before:h-16 before:bg-transparent before:opacity-35 before:-top-5"
            >
              <div className=" text-blue-400 hover:cursor-pointer hover:opacity-80 hover:shadow px-2  py-1  text-center w-fit bg-linear-to-tr from-gray-200 via-white to-gray-300 rounded">
                <span className="font-bold">+</span> Xem thêm
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ListChapter;
