import React, { useEffect, useState } from 'react';
import { Carousel, BlockRender, MenuMiddle, Breadcrumb, Contact } from '../components/common';
import Head from 'next/head';
import Cookies from 'js-cookie';
import { Content1, Content2, Content3, Content4, Content5, Form } from '../components/tailwind';
import Slider from 'react-slick';

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
        <Slider {...settings}>
          <div>
            <img
              className="w-11/12 h-[300px]"
              alt=""
              src={
                'https://images.unsplash.com/photo-1663183539627-adbe2c8ef43d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
              }
            />
          </div>
          <div>
            <img
              className="w-11/12  h-[300px]"
              alt=""
              src={
                'https://images.unsplash.com/photo-1663253216319-b9760cd6ef7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
              }
            />
          </div>
          <div>
            <img
              className="w-11/12  h-[300px]"
              alt=""
              src={
                'https://images.unsplash.com/photo-1663237803706-b09171da346e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
              }
            />
          </div>
          <div>
            <img
              className="w-11/12  h-[300px]"
              alt=""
              src={
                'https://images.unsplash.com/photo-1663253313029-ce4a035dbbe2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
              }
            />
          </div>
        </Slider>
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
