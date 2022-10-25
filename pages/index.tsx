import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useQuery, useQueryClient } from "react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import BrandSwiper from "@components/Home/BrandSwiper";
import MainSwiper from "@components/Home/MainSwiper";
import Seo from "@components/Seo";
import { QueryKey, QueryFn, option } from "src/services/brandList";
import { listBrandApi } from "src/services/brands";

const Home = () => {
  const params = {
    page: 0,
    size: 10,
    // sortQueryParams: "",
    // searchQueryParams: {},
  };
  const { data } = useQuery(QueryKey, () => QueryFn(params), option);

  useEffect(() => {
    console.log("key 값에 의한 캐싱 된 아이템", data);
  }, [data]);

  return (
    <>
      {/* <Seo title="Y" name="Frontend Blog" content="Home page" /> */}

      <div className="wrap">
        <MainSwiper />
        {/* Brand */}
        <BrandSwiper
          className="brand_slider"
          items={data}
          swiperOption={{ delay: 0, infinity: true }}
        />

        {/* <section className="section2">
          <div className="brand_slide_wrap">
            <div className="title">
              <div>
                <h5>100% Authentic Products</h5>
                <p>Low Minimum Order Amount with Low Price</p>
              </div>
            </div>
            <SwiperWrapper
              className={"brand_slider"}
              items={displayBrands}
              swiperOption={{ delay: 0, infinity: true }}
              renderItem={(item, index) => {
                return <img src={item.logo} alt={item.name.EN} />;
              }}
            />
          </div>
        </section> */}

        {/* YesBee Choice */}
        {/* <YesbeeChoiceSection /> */}

        {/* <BeautyAward /> */}

        {/* News Letter */}
        {/* <NewsLetterSection /> */}

        {/* Data matters a log */}
        {/* <section className="section6">
          <div>
            <h2>Data matters a lot</h2>
            <p>
              Want to know what you should buy?
              <br />
              Check our special curation based on exclusive data
            </p>
            <button
              className="trend_btn"
              onClick={clickLinkTo(router, "/trend")}
            >
              Check Out Trend <img src="/img/icon-trend.svg" alt="" />
            </button>
          </div>
        </section> */}

        {/* Latest Transactions */}

        {/* <section className="section7">
          <h2>Latest Transactions</h2>
          <div className="swiper_wrap">
            <div className="swiper latest_transactions_list">
              <SwiperWrapper
                items={latestTransactions}
                spaceBetween={20}
                renderItem={(item, index) => {
                  return (
                    <>
                      <Link href={`/product/${item.product.id}`} passHref>
                        <a>
                          <div className="img" style={roundedImage}>
                            <img
                              src={item.product.firstImage}
                              alt={item.product.name}
                              style={innerImage}
                            />
                          </div>
                        </a>
                      </Link>
                      <Link href={`/product/${item.product.id}`} passHref>
                        <a>
                          <div className="product_info">
                            <p className="brand">{item.product.brand.name}</p>
                            <h5 className="name">{item.product.name}</h5>
                            <div className="country">
                              <div>
                                <p>Origin</p>
                                <p>
                                  <img
                                    src="/img/icon-kr.png"
                                    alt="South Korea"
                                  />{" "}
                                  South Korea
                                </p>
                              </div>
                              <div>
                                <p>Destination</p>
                                <p>
                                  {item.buyerCountry.emoji}{" "}
                                  {item.buyerCountry.name}
                                </p>
                              </div>
                            </div>
                            <p className="time">2 hours ago</p>
                          </div>
                        </a>
                      </Link>
                    </>
                  );
                }}
              />
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
};
export default Home;
