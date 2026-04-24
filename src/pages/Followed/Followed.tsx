import { useState } from "react";

function Followed() {
  const [followed, setFollowed] = useState(() => {
    const stored = localStorage.getItem("truyens");
    return stored ? JSON.parse(stored) : [];
  });
  return (
    <>
      <h1 className="md:text-2xl md:font-bold md:mb-4 md:text-blue-500">
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
                className="md:text-blue-500 md:hover:underline"
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
