import {
  House,
  List,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Heart,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function SubHead({
  chapter_name,
  chapter_apis,
  detail_comic,
}: {
  chapter_name: string;
  chapter_apis: any;
  detail_comic: any;
}) {
  const [chapter, setChapter] = useState(chapter_name);
  const [openModal, setOpenModal] = useState(false);
  const currentIndex = chapter_apis.findIndex(
    (chap: any) => chap.chapter_name === chapter_name,
  );
  const nextChapter = currentIndex > 0 ? chapter_apis[currentIndex - 1] : null;

  const prevChapter =
    currentIndex < chapter_apis.length - 1
      ? chapter_apis[currentIndex + 1]
      : null;
  return (
    <div className="sticky top-0 z-20 mt-5 flex flex-row items-center justify-center  bg-white rounded p-2 ">
      <ul className="flex flex-row gap-2 items-center ">
        <li className="hidden md:block">
          <Link to="/">
            <House className="text-red-500 font-bold" />
          </Link>
        </li>
        <li className="hidden md:block">
          <Link
            to={`/detail/${detail_comic.slug}`}
            state={{ comic_name: detail_comic.name }}
          >
            <List className="text-red-500 font-bold" />
          </Link>
        </li>
        <li>
          <div className="flex flex-row gap-4 select-none ">
            {prevChapter ? (
              <Link
                to={`/chapter/${detail_comic.slug}`}
                state={{
                  api_image: prevChapter.chapter_api_data,
                  chapter_name: prevChapter.chapter_name,
                  name_comic: detail_comic.name,
                  chapters_apis: detail_comic.chapters,
                  slug: detail_comic.slug,
                  detailComic: detail_comic,
                }}
              >
                <ChevronLeft
                  size={40}
                  className="p-2 bg-red-600 text-white rounded-tl rounded-bl"
                />
              </Link>
            ) : (
              <ChevronLeft
                size={40}
                className="p-2 bg-gray-300 text-white rounded-tl rounded-bl cursor-not-allowed"
              />
            )}
            <div
              onClick={() => setOpenModal(true)}
              className="relvative flex flex-row items-center justify-between border w-40 md:min-w-2xs"
            >
              <h3 className="px-2">Chapter {chapter_name}</h3>
              <ChevronDown />
              {openModal && (
                <div className=" absolute bg-white md:w-2/5  p-2 rounded top-15 md:left-[30%] h-100 md:h-96 shadow-lg border border-gray-300 z-2 flex flex-col">
                  {/* Header */}
                  <div className="flex flex-row items-center justify-between p-2">
                    <h3 className="text-2xl text-blue-400">Danh sách chương</h3>
                    <X
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenModal(false);
                      }}
                      className="hover:text-purple-400 active:text-purple-400 hover:cursor-pointer"
                    />
                  </div>

                  {/* Content scroll */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2 overflow-y-auto md:flex-1">
                    {chapter_apis.map((chapter_api: any, index: number) => (
                      <Link
                        to={`/chapter/${detail_comic.slug}`}
                        state={{
                          api_image: chapter_api.chapter_api_data,
                          chapter_name: chapter_api.chapter_name,
                          name_comic: detail_comic.name,
                          chapters_apis: detail_comic.chapters,
                          slug: detail_comic.slug,
                          detailComic: detail_comic,
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenModal(false);
                        }}
                        key={index}
                        className="border border-gray-300 rounded p-2 hover:text-purple-400 active:text-purple-400 hover:cursor-pointer"
                      >
                        <p>chapter {chapter_api.chapter_name}</p>
                      </Link>
                    ))}
                  </div>
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenModal(false);
                    }}
                    className="flex flex-row-reverse "
                  >
                    <div className="py-1 px-3 bg-gray-100 rounded hover:cursor-pointer hover:text-purple-400 border mt-4 w-fit">
                      Đóng
                    </div>
                  </div>
                </div>
              )}
            </div>
            {nextChapter ? (
              <Link
                to={`/chapter/${detail_comic.slug}`}
                state={{
                  api_image: nextChapter.chapter_api_data,
                  chapter_name: nextChapter.chapter_name,
                  name_comic: detail_comic.name,
                  chapters_apis: detail_comic.chapters,
                  slug: detail_comic.slug,
                  detailComic: detail_comic,
                }}
              >
                <ChevronRight
                  size={40}
                  className="p-2 bg-red-600 text-white rounded-tr rounded-br"
                />
              </Link>
            ) : (
              <ChevronRight
                size={40}
                className="p-2 bg-gray-300 text-white rounded-tr rounded-br cursor-not-allowed"
              />
            )}
          </div>
        </li>
        <li>
          <div className="flex flex-row bg-red-600 items-center w-fit py-1 px-2 gap-2 text-white rounded font-semibold hover:cursor-pointer hover:shadow-sm hover:opacity-90">
            <Heart size={30} className="fill-white" />
            <span>Theo dõi</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SubHead;
