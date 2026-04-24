import { Link } from "react-router-dom";

interface ListComicsProps {
  thumbnail: string;
  slug: string;
  name: string;
  chapter_name: string;
  api_truyen: string;
}

function Comics({
  thumbnail,
  slug,
  name,
  chapter_name,
  api_truyen,
}: ListComicsProps) {
  return (
    <div className="bg-gray-200  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={`https://img.otruyenapi.com/uploads/comics/${thumbnail}`}
        alt="Truyện"
        className="w-2xs md:h-50 object-fill"
      />
      <div className="mt-2 px-2 flex flex-col">
        <Link
          to={`/detail/${slug}`}
          state={{ comic_name: name }}
          className=" [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden md:hover:cursor-pointer md:hover:text-blue-500 mb-2
                  leading-5 h-15  active:text-blue-500"
        >
          {name}
        </Link>
        <Link
          to={`/detail/${slug}`}
          state={{ comic_name: name }}
          className="flex flex-row justify-between md:hover:cursor-pointer md:hover:text-blue-500 mt-1 active:text-blue-500"
        >
          <span>chapter</span>
          <span>{chapter_name}</span>
        </Link>
      </div>
    </div>
  );
}

export default Comics;
