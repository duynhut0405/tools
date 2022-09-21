import React from 'react';
import { Card1, Card2, Card3 } from '../components/tailwind/Card';
import Slider from 'react-slick';

const listImg = [
  'https://cdn-op.acb.com.vn/document/e-credit/highlight-features/feature-1.jpg',
  'https://cdn-op.acb.com.vn/document/e-credit/highlight-features/feature-2.jpg',
  'https://cdn-op.acb.com.vn/document/e-credit/highlight-features/feature-3.jpg',
  'https://cdn-op.acb.com.vn/document/e-credit/highlight-features/feature-4.jpg',
  'https://cdn-op.acb.com.vn/document/e-credit/highlight-features/feature-5.jpg',
  'https://cdn-op.acb.com.vn/document/e-credit/highlight-features/feature-6.jpg'
];

const settings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '60px',
  slidesToShow: 3,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: 'linear'
};
function Home({}) {
  return (
    <>
      <Card1 />
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-red sm:text-3xl lg:text-2xl mb-4 text-center">
            TÍNH NĂNG NỔI BẬT
          </h1>
          <Slider {...settings}>
            {listImg.map((item, index) => {
              return (
                <div>
                  <img
                    style={{ objectFit: 'contain' }}
                    className="w-[99%] h-[350px]"
                    key={index}
                    alt=""
                    src={item}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <iframe
            src="https://www.youtube.com/embed/crVufCEVuIQ"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
            className="w-full h-[600px]"
          />
        </div>
      </div>
      <Card3 />
      <Card2 />
    </>
  );
}

export default Home;
