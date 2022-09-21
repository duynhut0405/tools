import React from 'react';
import {
  Block1,
  Block2,
  Block3,
  Block4,
  Block5,
  Block6,
  BlockTab
} from '../components/tailwind/Landing';
import Slider from 'react-slick';

const listImg = [
  'https://www.acb.com.vn/wps/wcm/connect/d9e53a16-1030-43cc-b60b-ad9a09b78ef2/Banner+web+-921x540px.jpg?MOD=AJPERES&CACHEID=d9e53a16-1030-43cc-b60b-ad9a09b78ef2',
  'https://www.acb.com.vn/wps/wcm/connect/d9e53a16-1030-43cc-b60b-ad9a09b78ef2/Banner+web+-921x540px.jpg?MOD=AJPERES&CACHEID=d9e53a16-1030-43cc-b60b-ad9a09b78ef2',
  'https://www.acb.com.vn/wps/wcm/connect/525e4aa7-d563-4db0-8dd6-409e0b518b85/Banner+web+-921x540px-GD3.jpg?MOD=AJPERES&CACHEID=525e4aa7-d563-4db0-8dd6-409e0b518b85',
  'https://www.acb.com.vn/wps/wcm/connect/94b15c80-9412-4b92-a395-44d58bd2aba9/Banner+web+-921x540px.jpg?MOD=AJPERES&CACHEID=94b15c80-9412-4b92-a395-44d58bd2aba9'
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
function Home({}) {
  return (
    <>
      <Block1 />
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
          <Slider {...settings}>
            {listImg.map((item, index) => {
              return (
                <div>
                  <img className="w-full h-[300px]" key={index} alt="" src={item} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
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
      <Block2 />
      <Block3 />
      <Block4 />
      <Block5 />
      <Block6 />
      <BlockTab />
    </>
  );
}

export default Home;
