import { Link } from "react-router-dom";

interface ListComicsProps {
  thumbnail: string;
  slug: string;
  name: string;
  chapter_name: string;
}

function ListComics({ thumbnail, slug, name, chapter_name }: ListComicsProps) {
  return (
    <div className="bg-gray-200  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={`https://img.otruyenapi.com/uploads/comics/${thumbnail}`}
        alt="Truyện"
        className="w-2xs h-50 object-fill"
      />
      <div className="mt-2 px-2 flex flex-col">
        <Link
          to={`/detail/${slug}`}
          state={{ comic_name: name }}
          className=" [display:-webkit-box] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] overflow-hidden hover:cursor-pointer hover:text-blue-500 mb-2
                  leading-5 h-15"
        >
          {name}
        </Link>
        <div className="flex flex-row justify-between hover:cursor-pointer hover:text-blue-500 mt-1">
          <span>chapter</span>
          <span>{chapter_name}</span>
        </div>
      </div>
    </div>
  );
}

export default ListComics;
