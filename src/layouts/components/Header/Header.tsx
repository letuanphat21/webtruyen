import { UserRound, Search } from "lucide-react";

function Header() {
  return (
    <div>
      <div className="bg-gray-900  w-full ">
        <div className="flex flex-row items-center justify-between py-4 mx-60 max-w-7xl px-3">
          <div className="  text-3xl text-white hover:cursor-pointer">
            WebTruyen
          </div>
          <div className="flex flex-row  rounded bg-white  focus-within:ring-2 focus-within:ring-blue-500">
            <div>
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="min-w-sm px-2 py-1  bg-transparent text-black placeholder:text-gray-500 focus:outline-none"
              />
            </div>
            <div className="px-2 py-1 rounded-tr rounded-br  hover:bg-gray-200  flex items-center justify-center">
              <Search size={16} className="text-black" />
            </div>
          </div>
          <div className="text-white text-lg hover:cursor-pointer flex flex-row items-center relative group">
            <UserRound size={16} className="inline-block mr-2" />
            <p>Tài khoản</p>
            <div
              className="absolute  bg-white rounded-xs max-w-sm top-full right-0 p-2 shadow-md   z-1
              opacity-0 invisible scale-0 group-hover:opacity-100 group-hover:visible group-hover:scale-100
                transition-all duration-200 origin-top-right pointer-events-none group-hover:pointer-events-auto
             before:content-[''] before:absolute before:border-y-5 before:border-x-7 before:border-t-transparent before:border-b-white before:border-l-transparent before:border-r-transparent
             before:-top-2.5 before:right-2 "
            >
              <ul className="min-w-28 text-black">
                <li>
                  <a href="https://www.youtube.com/watch?v=amOSaNX7KJg&list=RD-nBFbZbswO4&index=2">
                    {" "}
                    Đăng nhập
                  </a>
                </li>
                <li>Đăng ký</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
