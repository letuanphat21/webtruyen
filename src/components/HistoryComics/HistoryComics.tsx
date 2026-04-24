function HistoryComics({
  item,
  index,
  array,
}: {
  item: number;
  index: number;
  array: number[];
}) {
  return (
    <>
      <div className="flex flex-row  items-center gap-4 p-2 select-none md:hover:cursor-pointer">
        <p className="md:text-3xl text-xl text-blue-400">0{item}</p>
        <img
          src={`https://img.otruyenapi.com/uploads/comics/xuyen-khong-toi-tu-tien-gioi-lam-tru-than-thumb.jpg`}
          alt="Truyện"
          className="w-16 h-16 object-fill"
        />
        <div className="md:flex md:flex-col">
          <p className="md:hover:text-blue-500">
            Xuyên không tới tru tiên giới làm trù thần
          </p>
          <p className="md:hover:text-blue-500">Chapter 1</p>
        </div>
      </div>
      {index !== array.length - 1 && (
        <span className="md:border-gray-300 md:w-2/3 md:border-b md:flex  md:text-center md:m-auto"></span>
      )}
    </>
  );
}

export default HistoryComics;
