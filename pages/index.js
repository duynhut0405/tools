import React, { useState } from 'react';
import { Card1, Card2, Card3, Card4, Card5, Card6, Card7 } from '../components/tailwind/Card';
import Slider from 'react-slick';
import { Form, Tools } from '../components/block';
import Modal4 from '../components/tailwind/Modal4';
import FormAdmin from '../components/forms/FormAdmin';
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

const listImg = ['/img-1.jpg', '/img-2.jpg', '/img-3.jpg', '/img-4.jpg', '/img-1.jpg'];

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
      <div className="mx-auto max-w-[1536px] py-16 px-4 sm:px-6 lg:px-8">
        <FormAdmin />
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-[1536px] py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-[#f0a71d]  text-4xl font-bold tracking-tight text-red sm:text-3xl lg:text-2xl mb-4 text-center">
            ƯU ĐÃI VAY THÁNG 5
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
        <div className="mx-auto max-w-[1536px] py-16 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex gap-2">
            <div className="flex-1 bg-white">
              <h3 className="text-2xl font-bold text-[#f0a71d] sm:text-3xl sm:tracking-tight">
                Ứng dụng Mango Mobile Banking
              </h3>
              <p className="mt-6 text-base text-gray-500">
                Mango EDIGI - NÂNG TẦM TRẢI NGHIỆM SỐ Nắm bắt được xu hướng chuyển đổi số cũng như
                xu hướng công nghệ hiện đại, Ngân hàng TMCP Xuất Nhập Khẩu Việt Nam
              </p>
              <div className="mt-6 mb-6">
                <div className="">
                  <button
                    onClick={() => {
                      setShowModal(true);
                    }}
                    className=" w-max rounded-md border border-transparent bg-[#f0a71d] px-10 py-3 text-base font-medium text-white hover:bg-[#191919]"
                  >
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <iframe
                src="https://www.youtube.com/embed/oGFIgXia-xg"
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
      <div className="mx-auto max-w-[1536px] py-16 px-4 sm:px-6 lg:px-8">
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
