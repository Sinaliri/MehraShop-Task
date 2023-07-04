// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { feather } from "../../assets/infos/productinfo";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";
import SliderComponents from "../SliderComponents/SliderComponents";
import RightSection from "./RightSection";

const Main = ({ images }) => {
  const [selected, setSelected] = useState(images[0]);

  return (
    // this component is about
    <div className="w-full xl:w-4/12 flex justify-center items-center flex-row overflow-hidden ">
      <div className=" md:w-10/12 flex justify-center items-center flex-col overflow-hidden">
        <div
          className="w-full h-full justify-center items-center flex mb-10"
          style={{ maxHeight: "400px", minHeight: "400px" }}
        >
          <img
            className="p-12.5 h-full object-cover"
            // id={selected.iamgeId}
            src={selected.imageurl}
            alt={selected.imageid}
          />
        </div>
        <div className="w-full">
          <Swiper
            className={`swiper`}
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={(event) => setSelected(images[event.activeIndex])}
            // style={{ overflow: "visible" }}
          >
            {images.map((item) => {
              return (
                <SwiperSlide className="mx-2">
                  <SliderComponents
                    key={item.imageid}
                    image={item}
                    handler={setSelected}
                    selectedID={selected.imageid}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <RightSection feather={feather} />
    </div>
  );
};

export default Main;
