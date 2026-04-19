import { House } from "lucide-react";
import { Link } from "react-router-dom";
import useCategories from "../../../hooks/useCategories";

function SubHeader() {
  const theloais = useCategories();

  return (
    <div className="bg-[#e4e4e4] w-full ">
      <div className="max-w-7xl mx-60 px-3">
        <div>
          <ul className="flex flex-row items-center  gap-4 py-1 hover:cursor-pointer">
            <Link to="/" className="p-1 group relative">
              <House />
              <span
                className="absolute 
              left-0 bottom-0 h-0.5
               w-full bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
              ></span>
            </Link>
            {["Theo dõi", "Hoàn thành", "Thể loại", "Lịch sử"].map(
              (item, index) => {
                if (item === "Thể loại") {
                  return (
                    <div
                      key={index}
                      className="p-1 group relative cursor-pointer"
                    >
                      {item}

                      <div
                        className="absolute min-w-2xl bg-white shadow-md rounded-br rounded-bl p-2 z-10 top-full left-0 
          opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200
          before:content-[''] before:absolute before:border-y-5 before:border-x-7 before:border-t-transparent 
          before:border-b-white before:border-l-transparent before:border-r-transparent before:-top-2.5"
                      >
                        <ul className="grid grid-cols-4 gap-4">
                          {theloais.map((theloai) => (
                            <Link
                              key={theloai._id}
                              to={`/category/${theloai.slug}`}
                              state={{ name: theloai.name }}
                              className="hover:cursor-pointer hover:text-fuchsia-400"
                            >
                              {theloai.name}
                            </Link>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item}
                    to={
                      item === "Theo dõi"
                        ? "/followed"
                        : item === "Hoàn thành"
                          ? "/completed"
                          : "/history"
                    }
                    className="p-1 group relative"
                  >
                    {item}
                    <span
                      className="absolute left-0 bottom-0 h-0.5 w-full bg-white 
        scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                    ></span>
                  </Link>
                );
              },
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SubHeader;
