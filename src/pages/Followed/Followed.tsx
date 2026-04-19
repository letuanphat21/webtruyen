import { useState } from "react";

function Followed() {
  const [followed, setFollowed] = useState(() => {
    const stored = localStorage.getItem("truyens");
    return stored ? JSON.parse(stored) : [];
  });
  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-blue-500">
        Truyện đã theo dõi
      </h1>
      {followed.length === 0 ? (
        <p>Bạn chưa theo dõi truyện nào.</p>
      ) : (
        <ul>
          {followed.map((truyen: any) => (
            <li key={truyen.id} className="mb-2">
              <a
                href={`/truyen/${truyen.id}`}
                className="text-blue-500 hover:underline"
              >
                {truyen.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Followed;
