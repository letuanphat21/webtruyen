import { ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";
import Editor from "./Editor/Editor";

function Comments() {
  const [modalFilter, setModalFiter] = useState(false);
  const [filter, setFilter] = useState("Mới nhất");

  return (
    <div className="mt-6 ">
      <ul className="border-2 border-t-transparent border-r-transparent border-l-transparent border-b-gray-100">
        <li className="relative text-md -mb-0.5 bg-white text-gray-700 w-fit py-2 px-1 border-t-purple-600 border-2 border-r-gray-300 border-l-gray-300 border-b-transparent">
          <MessageCircle size={16} className="inline-block pb-1" /> Vui truyện
          (Chưa có bình luận nào)
        </li>
      </ul>
      <div>
        <div className="flex flex-row items-center justify-between border-b border-gray-300 py-2">
          <p className="text-blue-800">Chưa có bình luận nào </p>
          <div className="flex flex-row items-center ">
            <p className="mx-2 text-blue-800 ">Sắp xếp theo</p>
            <div
              onClick={() => setModalFiter(!modalFilter)}
              className="select-none relative flex flex-row items-center p-1 bg-gray-50  border border-black rounded text-blue-800"
            >
              <p>{filter}</p>
              <ChevronDown />

              {modalFilter && (
                <div className="absolute w-36 bg-white  top-10 right-0.5 shadow">
                  <ul>
                    {["Cũ nhất", "Mới nhất"].map((item) => {
                      return (
                        <li
                          onClick={() => setFilter(item)}
                          className="p-2 hover:bg-gray-300 hover:text-white hover:cursor-pointer"
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Editor />
      {/* Phần hiển thị những câu bình luận  */}
      <div className="mt-4 py-5 px-4  border border-gray-200 rounded mx-auto">
        <div className="py-4 px-4 text-amber-500 bg-amber-100 rounded">
          Chưa có bình luận nào
        </div>
      </div>
    </div>
  );
}

export default Comments;
