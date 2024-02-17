import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import CardCourse from "./CardCourse";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";

const CourseSlider = ({ Courses }) => {
  return (
    <div>
      {Courses?.length ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            stopOnLastSlide: false
          }}
          modules={[Pagination, FreeMode, Autoplay, Navigation]}
          pagination={{
            dynamicBullets: true,
          }}
          className="max-h-[30rem] mySwiper"
        >
          {Courses.map((course) => {
            return (
              <SwiperSlide>
                <CardCourse course={course} height={`h-[250px]`} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <>
          <p>No Course Found</p>
        </>
      )}
    </div>
  );
};

export default CourseSlider;
