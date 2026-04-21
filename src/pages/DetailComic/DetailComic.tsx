import { Link, useLocation, useParams } from "react-router-dom";
import HistoryComics from "../../components/HistoryComics";
import { useEffect, useState } from "react";
import axiosClient from "../../services/axiosClient";
import dinhDangThoiGian from "../../utils/DinhDangThoiGian";
import {
  Heart,
  ChevronDown,
  User,
  ChartColumnDecreasing,
  Tag,
  NotebookText,
} from "lucide-react";
import formatThe from "../../utils/FormatThe";
import randomDay from "../../utils/RandomDay";
interface DetailComicInterface {
  _id: string;
  name: string;
  slug: string;
  content: string;
  status: string;
  thumb_url: string;
  author: string[];
  category: string[];
  updatedAt: string;
  chapters: ChapterInterface[];
}
interface ChapterInterface {
  chapter_name: string;
  chapter_api_data: string;
}

function DetailComic() {
  const { matruyen } = useParams();
  const location = useLocation();
  const data = location.state;

  const [detailComic, setDetailComic] = useState<DetailComicInterface>();
  const [expanded, setExpanded] = useState(false);
  const [chapterShort, setChapterShort] = useState(20);
  const [viewMore, setViewMore] = useState(false);
  useEffect(() => {
    axiosClient.get(`/truyen-tranh/${matruyen}`).then((response) => {
      let item = response.data.item;
      let detailComic = {
        _id: item._id,
        name: item.name,
        slug: item.slug,
        content: item.content,
        status: item.status,
        thumb_url: item.thumb_url,
        author: item.author.map((au: string) => au),
        category: item.category.map((cate: any) => cate.name),
        updatedAt: item.updatedAt,
        chapters: item.chapters[0].server_data
          .map((chapter: ChapterInterface) => ({
            chapter_name: chapter.chapter_name,
            chapter_api_data: chapter.chapter_api_data,
          }))
          .reverse(),
      };
      setDetailComic(detailComic);
    });
  }, []);
  const handleViewMore = () => {
    setViewMore(true);
    setChapterShort(detailComic?.chapters ? detailComic.chapters.length : 20);
  };

  return (
    <div className="mt-2 flex flex-row gap-4">
      <div className=" flex-1">
        <div className="flex flex-row gap-2">
          <p className="text-xl  mb-4 text-blue-500 hover:cursor-pointer select-none">
            Home <span className="text-sm text-gray-500">&gt;&gt;</span>
          </p>
          <p className="text-xl  mb-4 text-blue-500 hover:cursor-pointer select-none">
            Chi tiết <span className="text-sm text-gray-500">&gt;&gt;</span>
          </p>
          <p className="text-xl  mb-4 text-blue-500 hover:cursor-pointer select-none">
            {data.comic_name}
          </p>
        </div>
        {/* Phần đầu */}
        <div className="mb-2">
          <h1 className="text-3xl text-center">{data.comic_name}</h1>
          <p className="text-sm text-gray-400 text-center">
            Cập nhập :{" "}
            {detailComic?.updatedAt
              ? dinhDangThoiGian(detailComic.updatedAt)
              : "Đang cập nhập"}{" "}
          </p>
        </div>
        {/* Phần giữa */}
        <div className="flex flex-row items-center gap-4 ">
          {/* Phần hình ảnh */}
          <div className="">
            <img
              src={import.meta.env.VITE_API_IMAGE + detailComic?.thumb_url}
              alt="Đang bị lỗi ảnh"
              className="w-full h-60 object-fill rounded-lg"
            />
          </div>
          {/* Phần thông tin chi tiết */}
          <div className="text-xl flex-1 text-gray-600">
            <div className="flex flex-row my-6 items-center  ">
              <div className="w-36 flex flex-row items-center">
                <User size={20} className="text-gray-800" />
                <p>Tác giả</p>
              </div>
              <p className="flex-1">
                {detailComic?.author ? detailComic?.author : "Đang cập nhập"}
              </p>
            </div>
            <div className="flex flex-row my-6 items-center">
              <div className="w-36 flex flex-row items-center">
                <ChartColumnDecreasing size={20} className="text-gray-800" />
                <p>Tình trạng </p>
              </div>
              <p className="flex-1">
                {detailComic?.status == "ongoing"
                  ? "Đang tiến hành "
                  : "Đang cập nhập"}
              </p>
            </div>
            <div className="flex flex-row my-6 items-center">
              <div className="w-36 flex flex-row items-center">
                <Tag size={20} className="text-gray-800" />
                <p>Thể loại</p>
              </div>
              <div className="flex flex-row items-center flex-wrap gap-2">
                {detailComic?.category
                  ? detailComic?.category.map((cate, index) => {
                      return <p key={index}>{cate}</p>;
                    })
                  : "Đang cập nhập"}
              </div>
            </div>
            <div className="my-6">
              <div className="flex flex-row bg-red-400 items-center w-fit py-1 px-2 gap-2 text-white rounded font-semibold hover:cursor-pointer hover:shadow-sm hover:opacity-90">
                <Heart size={20} className="fill-white" />
                <span>Theo dõi</span>
              </div>
            </div>
            <div className="flex flex-row my-6 items-center gap-4">
              <p className="py-1 px-2 bg-yellow-400 font-semibold rounded text-white hover:cursor-pointer hover:shadow-sm hover:opacity-90">
                Đọc từ đầu
              </p>
              <p className="py-1 px-2 bg-yellow-400 rounded font-semibold text-white hover:cursor-pointer hover:shadow-sm hover:opacity-90">
                Đọc mới nhất
              </p>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <h2 className="border-b-2 border-blue-400  uppercase   text-xl text-blue-800 items-center">
            <i className="inline-block align-middle mr-2">
              <NotebookText size={24} />
            </i>
            nội dung truyện {detailComic?.name} trên vuitruyen
          </h2>
          <article
            className={expanded ? "text-justify" : "line-clamp-2 text-justify"}
          >
            Chào mừng bạn đến với VuiTruyen ở đây chúng tôi cung cấp đầy đủ các
            thể loại truyện cho bạn, mong bạn sẽ tận hưởng khoảng khắc nghỉ ngơi
            này nha và dưới đây là nội dùng truyện này: <br />{" "}
            {detailComic?.content
              ? formatThe(detailComic?.content)
              : "Đang cập nhập"}
          </article>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-blue-500 hover:text-purple-400 hover:cursor-pointer "
          >
            {expanded ? "Thu gọn " : "Xem thêm "}&gt;
          </button>
        </div>
        <div className="mt-2">
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
                .map((chapter, index) => {
                  return (
                    <li
                      key={index}
                      className="relative grid grid-cols-3 gap-10 px-3 after:w-4/5 after:content-[''] after:absolute
  after:left-1/2
  after:-translate-x-1/2
  after:bottom-0 after:border-b after:border-dashed after:border-gray-200 after:text-center "
                    >
                      <Link
                        to={"/chapter"}
                        state={{ api_image: chapter.chapter_api_data }}
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
                <li className=" flex flex-row items-center justify-center py-2">
                  <div
                    onClick={handleViewMore}
                    className=" text-blue-400 hover:cursor-pointer hover:opacity-80 hover:shadow px-2  py-1  text-center w-fit bg-linear-to-tr from-gray-200 via-white to-gray-300 rounded"
                  >
                    <span className="font-bold">+</span> Xem thêm
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
        {/* Bình luận */}
        <div>
          <ul>
            <li>Vui truyện </li>
          </ul>
          <div>
            <div className="flex flex-row items-center justify-between border-b border-gray-300 py-2">
              <p>Chưa có bình luận nào </p>
              <div className="flex flex-row items-center ">
                <p className="mx-2">Sắp xếp theo</p>
                <div className="flex flex-row items-center p-1 bg-gray-50 border rounded ">
                  <p>Mới nhất</p>
                  <ChevronDown />
                </div>
              </div>
            </div>
            <div className="px-4 py-5 border border-gray-300 rounded-2xl mt-2">
              <input placeholder="Tham gia thảo luận .."></input>
            </div>
          </div>
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
  );
}

export default DetailComic;
