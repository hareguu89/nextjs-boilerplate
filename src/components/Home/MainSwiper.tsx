import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MainSwiper = () => {
  const refPrev = useRef(null);
  const refNext = useRef(null);

  const bannerList = [
    {
      src: "img/banner/banner01.png",
      alt: "business",
      bg: "#eeedfe",
      brandId: 0,
      buttonInfo: [
        { label: "How To Use", link: "/how-to" },
        { label: "Order Now", link: "/order-now" },
      ],
    },
    { src: "img/banner/banner02.png", alt: "TIAM", bg: "#9cdfd7", brandId: 28 },
    {
      src: "img/banner/banner03.png",
      alt: "THE FACE SHOP",
      bg: "#faf1e2",
      brandId: 15,
    },
    {
      src: "img/banner/banner04.png",
      alt: "FORENCOS",
      bg: "#f4f5f6",
      brandId: 211,
    },
  ];

  return (
    <>
      <div className="wrap">
        {/* Banner */}
        <section className="section1">
          <Swiper
            style={{ height: "35rem" }}
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={0}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: refPrev.current,
              nextEl: refNext.current,
            }}
            speed={1000}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
          >
            {bannerList.map((item, index) => (
              <SwiperSlide key={index}>
                {item.brandId > 0 && (
                  <Link href={`/brand/${item.brandId}`} passHref>
                    <a
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        zIndex: "2",
                      }}
                    ></a>
                  </Link>
                )}
                <div
                  style={{
                    width: "100%",
                    height: "35rem",
                    background: `${item.bg} url(${item.src}) no-repeat 50% 0`,
                    backgroundSize: "auto 35rem",
                  }}
                />
                {item.buttonInfo && (
                  <div className="banner-btn-wrap">
                    <Link href={item.buttonInfo[0].link} passHref>
                      <button>{item.buttonInfo[0].label}</button>
                    </Link>
                    <Link href={item.buttonInfo[1].link} passHref>
                      <button>
                        {item.buttonInfo[1].label}
                        <Image
                          src="/img/next-arrow.svg"
                          alt="next"
                          width={100}
                          height={100}
                        />
                      </button>
                    </Link>
                  </div>
                )}
              </SwiperSlide>
            ))}
            <div ref={refPrev} className="banner-prev" />
            <div ref={refNext} className="banner-next" />
          </Swiper>
          {/* <div className="bnner">
            <h4>K-Brand Global B2B Wholesaler</h4>
            <h1>Easy Buy Easy Sell</h1>
            <p>We provide K-brand goods at the most reasonably<br />discounted price for affordable Minimum Quantity Amount</p>
            <div className="btn_wrap">
              <button onClick={clickLinkTo(router, '/about')}>About Yesbee</button>
              <button onClick={clickLinkTo(router, '/order-now')}>Order Now
                <img src="/img/icon-arrow-right.svg" alt="Order Now" />
              </button>
            </div>
          </div> */}
        </section>
      </div>
    </>
  );
};

export default MainSwiper;
