import React from 'react';
import { Card1, Card2, Card3, Card4, Card5, Card6 } from '../components/tailwind/Card';
import Slider from 'react-slick';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <span
      className="nextArrow  slick-arrow"
      style={{ ...style, position: 'absolute', right: -25, top: 150 }}
      onClick={onClick}
    >
      <i className="icon-arrow-1 "></i>
    </span>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <span
      className="prevArrow slick-arrow"
      style={{ ...style, position: 'absolute', left: -25, top: 150 }}
      onClick={onClick}
    >
      <i className="icon-arrow-1 ix"></i>
    </span>
  );
}

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
  dots: true,
  centerMode: true,
  infinite: true,
  centerPadding: '60px',
  slidesToShow: 3,
  speed: 300,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};
function Home({}) {
  return (
    <>
      <Card1 />
      <div className="bg-white">
        <div className="mx-auto max-w-[1536px] py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-[#002395]  text-4xl font-bold tracking-tight text-red sm:text-3xl lg:text-2xl mb-4 text-center">
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
        <div className="mx-auto max-w-[1536px] py-16 px-4 sm:px-6 lg:px-8">
          <iframe
            src="https://www.youtube.com/embed/4MDIZFAAuw0"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
            className="w-full h-[600px]"
          />
        </div>
      </div>
      <Card3 />
      <Card4 />
      <Card2 />
      <Card5 />
      <Card6 />
    </>
  );
}

export default Home;
