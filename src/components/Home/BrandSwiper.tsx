import { useEffect, useRef } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const SwiperSection = styled.section`
  .title {
    padding: 1.8rem 3.75rem;
    background-color: #424093;
  }
  .brand_slide_wrap .title div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
  }
  .brand_slider {
    padding: 2.6rem 0;

    .swiper-wrapper .swiper-slide {
      background: white;
    }
    .swiper-wrapper {
      width: 200px;
    }
  }
`;
const BrandSwiper = ({ className, items, swiperOption }: any) => {
  return (
    <>
      <SwiperSection>
        <div className="brand_slide_wrap">
          <div className="title">
            <div>
              <h5>100% Authentic Products</h5>
              <p>Low Minimum Order Amount with Low Price</p>
            </div>
          </div>
          {items?.length > 0 && (
            <Swiper
              style={{
                width: "100%",
                height: "170px",
                borderRadius: "12px",
              }}
              className={className}
              slidesPerView={"auto"}
              spaceBetween={20}
              speed={3000}
              autoplay={{
                delay: swiperOption?.delay ?? 500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              observer={true}
              observeSlideChildren={true}
              loop={true}
              loopedSlides={swiperOption?.infinity ? 0 : 1}
              preventClicks={false}
              preventClicksPropagation={false}
            >
              {items.map((item: any, index: number) => (
                <SwiperSlide key={index}>
                  <div style={{ width: "200px" }}>
                    <Image
                      src={item.logo}
                      alt={item.name.EN}
                      width={200}
                      height={100}
                      unoptimized
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </SwiperSection>
    </>
  );
};

export default BrandSwiper;
