import React, { useState } from 'react';
import { Card1, Card2, Card3, Card4, Card5, Card6, Card7 } from '../components/tailwind/Card';
import Slider from 'react-slick';
import { Tools } from '../components/block';
import Modal4 from '../components/tailwind/Modal4';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <span
      className="nextArrow slick-arrow cursor-pointer bg-gray-400 w-7 h-7 p-1 rounded-[14px] items-start justify-center right-0 lg:right-[-55px]"
      style={{
        ...style,
        position: 'absolute',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex'
      }}
      onClick={onClick}
    >
      <i className="icon-arrow-1 text-white"></i>
    </span>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <span
      className="prevArrow slick-arrow cursor-pointer bg-gray-400 w-7 h-7 p-1 rounded-[14px] items-start left-[25px] lg:left-[-25px] justify-center"
      style={{
        ...style,
        position: 'absolute',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        zIndex: 1
      }}
      onClick={onClick}
    >
      <i className="icon-arrow-1 ix text-white"></i>
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
  slidesToShow: 4,
  speed: 300,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    }
  ],
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};
function Home({}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Card1 />
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-[#002395]  text-4xl font-bold tracking-tight text-red sm:text-3xl lg:text-2xl mb-4 text-center">
            ??U ????I VAY TH??NG 10
          </h1>
          <Slider {...settings}>
            {listImg.map((item, index) => {
              return (
                <div>
                  <img
                    className="w-[90%] h-[180px] sm:h-[350px] object-contain"
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
          <div className="sm:flex gap-2">
            <div className="flex-1 bg-white">
              <h3 className="text-2xl font-bold text-[#002395] sm:text-3xl sm:tracking-tight">
                ACB - N??ng L?????ng ????n M??a Vui
              </h3>
              <p className="mt-6 text-base text-gray-500">
                V????i 12.000 nh??n vi??n ACB, ????????c khoa??c l??n mi??nh b???? ??????ng phu??c ??e??p nh????t ?????? cha??o ??o??n
                kha??ch ha??ng, ????????c g????p la??i kha??ch ha??ng th??n th????ng trong ni????m vui kho??e ma??nh va?? ????????c
                phu??c vu?? kha??ch ha??ng trong nhi??p s????ng bi??nh th??????ng chi??nh la?? ngu????n N??ng L?????ng l????n nh????t
                cu??a chu??ng t??i.
              </p>
              <div className="mt-6 mb-6">
                <div className="">
                  <button
                    onClick={() => {
                      setShowModal(true);
                    }}
                    className=" w-max rounded-md border border-transparent bg-[#002395] px-10 py-3 text-base font-medium text-white hover:bg-[#29b6f6]"
                  >
                    Xem chi ti???t
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <iframe
                src="https://www.youtube.com/embed/4MDIZFAAuw0"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
                className="w-full h-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
      <Card3 />
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
        <Card7 />
      </div>
      <Card2 />
      <Card4 />
      <Card5 />
      <Card6 />
      <Modal4 open={showModal} setOpen={setShowModal} />
    </>
  );
}

export default Home;
