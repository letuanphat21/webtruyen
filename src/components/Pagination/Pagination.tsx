interface PaginationInterface {
  trangHienTai: number;
  tongSoTrang: number;
  setTrangHienTai: React.Dispatch<React.SetStateAction<number>>;
}

function Pagination({
  trangHienTai,
  tongSoTrang,
  setTrangHienTai,
}: PaginationInterface) {
  const danhSachTrang = [];

  if (trangHienTai === 1) {
    if (tongSoTrang > 3) {
      danhSachTrang.push(trangHienTai);
      danhSachTrang.push(trangHienTai + 1);
      danhSachTrang.push(trangHienTai + 2);
    }
  } else if (trangHienTai === tongSoTrang) {
    danhSachTrang.push(tongSoTrang - 2);
    danhSachTrang.push(tongSoTrang - 1);
    danhSachTrang.push(tongSoTrang);
  } else {
    if (trangHienTai - 2 > 0) {
      danhSachTrang.push(trangHienTai - 2);
    }
    danhSachTrang.push(trangHienTai - 1);
    danhSachTrang.push(trangHienTai);
    danhSachTrang.push(trangHienTai + 1);
    if (trangHienTai + 2 <= tongSoTrang) {
      danhSachTrang.push(trangHienTai + 2);
    }
  }
  return (
    <nav aria-label="">
      <ul className="flex flex-row md:gap-2 gap-1 justify-center items-center  md:hover:cursor-pointer ">
        <li
          onClick={() => setTrangHienTai(1)}
          className="px-2 md:px-4 py-2 border-2 border-gray-300 rounded-md active:text-white active:bg-blue-400 md:hover:text-white md:hover:bg-blue-400 md:trasition-colors md:duration-300"
        >
          <p className="">FirstPage</p>
        </li>
        {danhSachTrang.map((trang, index) => {
          return (
            <li
              key={index}
              onClick={() => setTrangHienTai(trang)}
              className={` ${trang === trangHienTai ? "bg-blue-400 text-white border-gray-500" : ""}
                px-3 md:px-4 py-2 border-2 border-gray-300  rounded-md md:hover:text-white active:text-white md:hover:bg-blue-400 active:bg-blue-400 trasition-colors duration-300`}
            >
              <p className="">{trang}</p>
            </li>
          );
        })}
        <li
          onClick={() => setTrangHienTai(tongSoTrang)}
          className="px-4 py-2 border-2 border-gray-300 rounded-md md:hover:text-white active:text-white md:hover:bg-blue-400 active:bg-blue-400 trasition-colors duration-300"
        >
          <p className="">LastPage</p>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
