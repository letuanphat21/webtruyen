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
      <div className="flex flex-row  items-center gap-4 p-2 select-none hover:cursor-pointer">
        <p className="text-3xl text-blue-400">0{item}</p>
        <img
          src={`https://img.otruyenapi.com/uploads/comics/xuyen-khong-toi-tu-tien-gioi-lam-tru-than-thumb.jpg`}
          alt="Truyện"
          className="w-16 h-16 object-fill"
        />
        <div className="flex flex-col">
          <p className="hover:text-blue-500">
            Xuyên không tới tru tiên giới làm trù thần
          </p>
          <p className="hover:text-blue-500">Chapter 1</p>
        </div>
      </div>
      {index !== array.length - 1 && (
        <span className="border-gray-300 w-2/3 border-b flex  text-center m-auto"></span>
      )}
    </>
  );
}

export default HistoryComics;
