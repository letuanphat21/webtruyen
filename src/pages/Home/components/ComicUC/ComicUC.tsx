// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";
import { useEffect, useState } from "react";
import axiosClient from "../../../../services/axiosClient";

interface ComicInterface {
  _id: string;
  name: string;
  slug: string;
  status: string;
  thumb_url: string;
}

function ComicUC() {
  const [comicUCs, setComicUCs] = useState<ComicInterface[]>([]);

  useEffect(() => {
    axiosClient.get("/danh-sach/truyen-moi").then((response) => {
      let Comics = response.data.items.map((item: any) => ({
        _id: item._id,
        name: item.name,
        slug: item.slug,
        status: item.status,
        thumb_url: item.thumb_url,
      }));
      setComicUCs(Comics);
    });
  }, []);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        // centeredSlides={true}
        slidesPerView={3}
        spaceBetween={5}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {comicUCs.map((comic) => (
          <SwiperSlide key={comic._id} className="my-6">
            <div className=" select-none">
              <img
                src={`https://img.otruyenapi.com/uploads/comics/${comic.thumb_url}`}
                alt={comic.name}
                className="w-xs h-60  object-fill rounded-lg"
              />
              <h3 className="text-sm mt-2 text-center">{comic.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ComicUC;
