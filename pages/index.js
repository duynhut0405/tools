import React from 'react';
import { Content1, Content2, Content3, Content4, Content5, Form } from '../components/tailwind';
import Slider from 'react-slick';

const listImg = [
  'https://www.acb.com.vn/wps/wcm/connect/4990958c-b461-45f1-8ab6-74c2e59a7373/banner+web.png?MOD=AJPERES&CACHEID=4990958c-b461-45f1-8ab6-74c2e59a7373',
  'https://www.acb.com.vn/wps/wcm/connect/d9e53a16-1030-43cc-b60b-ad9a09b78ef2/Banner+web+-921x540px.jpg?MOD=AJPERES&CACHEID=d9e53a16-1030-43cc-b60b-ad9a09b78ef2',
  'https://www.acb.com.vn/wps/wcm/connect/525e4aa7-d563-4db0-8dd6-409e0b518b85/Banner+web+-921x540px-GD3.jpg?MOD=AJPERES&CACHEID=525e4aa7-d563-4db0-8dd6-409e0b518b85',
  'https://www.acb.com.vn/wps/wcm/connect/94b15c80-9412-4b92-a395-44d58bd2aba9/Banner+web+-921x540px.jpg?MOD=AJPERES&CACHEID=94b15c80-9412-4b92-a395-44d58bd2aba9'
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3
};

function Home({}) {
  return (
    <React.Fragment>
      <div className="main_content">
        <div style={{ marginTop: 20, marginBottom: 20 }}>
          <Slider {...settings}>
            {listImg.map((item, index) => {
              return (
                <div>
                  <img className="w-11/12 h-[300px]" key={index} alt="" src={item} />
                </div>
              );
            })}
          </Slider>
        </div>
        <iframe
          src="https://www.youtube.com/embed/4MDIZFAAuw0"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
          className="w-full h-[600px]"
        />
        <Content1 />
        <Form />
        <Content2 />
        <Content3 />
        <Content4 />
        <Content5 />
      </div>
    </React.Fragment>
  );
}

export default Home;
