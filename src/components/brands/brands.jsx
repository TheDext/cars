import React from "react";
import "swiper/css";
import brandsImages from "../../utils/brands.images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./brands.scss";

const Brands = () => {
  return (
    <div className="brands">
        <div className="brands__row">
          {
            <Swiper
              spaceBetween={50}
              slidesPerView={8}
              loop={true}
              modules={[Autoplay]}
              speed={9000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 8,
                },
              }}
            >
              {brandsImages.map((img, index) => (
                <SwiperSlide key={`key-swiper-slide_${index}`}>
                  {
                    <div className="brands__column">
                      <div className="brands__item item-brands">
                        <img src={img} alt="" />
                      </div>
                    </div>
                  }
                </SwiperSlide>
              ))}
            </Swiper>
          }
        </div>
    </div>
  );
};

export default Brands;
