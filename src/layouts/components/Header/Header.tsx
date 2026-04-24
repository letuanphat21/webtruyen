import { UserRound, Search, Menu, House } from "lucide-react";
import { Link } from "react-router-dom";
import useCategories from "../../../hooks/useCategories";
import { useState } from "react";

function Header() {
  const theloais = useCategories();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <div className="bg-gray-900  w-full transition-all duration-300 ease-in-out">
        <div className="px-2 flex flex-row items-center justify-between py-4 md:mx-60 md:max-w-7xl md:px-3">
          <div className="text-xl md:text-3xl text-white hover:cursor-pointer">
            WebTruyen
          </div>
          <div className="hidden md:flex flex-row  rounded bg-white  focus-within:ring-2 focus-within:ring-blue-500">
            <div className="">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className=" min-w-sm px-2 py-1  bg-transparent text-black placeholder:text-gray-500 focus:outline-none"
              />
            </div>
            <div className="px-2 py-1 rounded-tr rounded-br  hover:bg-gray-200  flex items-center justify-center">
              <Search size={16} className="text-black" />
            </div>
          </div>
          <div className="hidden md:flex text-white text-lg hover:cursor-pointer  flex-row items-center relative group">
            <UserRound size={16} className="inline-block mr-2" />
            <p>Tài khoản</p>
            <div
              className="absolute  bg-white rounded-xs max-w-sm top-full right-0 p-2 shadow-md z-1
              opacity-0 invisible scale-0 group-hover:opacity-100 group-hover:visible group-hover:scale-100
                transition-all duration-200 origin-top-right pointer-events-none group-hover:pointer-events-auto
             before:content-[''] before:absolute before:border-y-5 before:border-x-7 before:border-t-transparent before:border-b-white before:border-l-transparent before:border-r-transparent
             before:-top-2.5 before:right-2 "
            >
              <ul className="min-w-28 text-black">
                <li>
                  <a href="https://www.youtube.com/watch?v=amOSaNX7KJg&list=RD-nBFbZbswO4&index=2">
                    Đăng nhập
                  </a>
                </li>
                <li>Đăng ký</li>
              </ul>
            </div>
          </div>
          <div
            onClick={() => setOpenMenu(!openMenu)}
            className="text-white md:hidden"
          >
            <Menu size={30} />
          </div>
        </div>
        {openMenu && (
          <div className="text-white md:hidden p-2">
            <ul className="flex flex-col gap-4  ">
              <Link to="/" className="p-1 ">
                <House className=" transition-all duration-300 active:text-blue-400" />
              </Link>
              {["Theo dõi", "Hoàn thành", "Thể loại", "Lịch sử"].map(
                (item, index) => {
                  if (item === "Thể loại") {
                    return (
                      <div
                        onClick={() => setOpen(!open)}
                        key={index}
                        className="p-1 group text-xl"
                      >
                        {item}
                        {open && (
                          <div className="mt-2 bg-white text-black p-2 overflow-y-auto h-96 w-fit border rounded transition-all">
                            <ul className="grid grid-cols-2 gap-4">
                              {theloais.map((theloai) => (
                                <Link
                                  key={theloai._id}
                                  to={`/category/${theloai.slug}`}
                                  state={{ name: theloai.name }}
                                  className=" active:text-fuchsia-400"
                                >
                                  {theloai.name}
                                </Link>
                              ))}
                            </ul>
                          </div>
                        )}
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
                      className="p-1 group relative text-xl"
                    >
                      {item}
                    </Link>
                  );
                },
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
