import React, { useEffect, useState } from 'react';
import { Carousel, BlockRender, MenuMiddle, Breadcrumb } from '../components/common';
import Head from 'next/head';
import Cookies from 'js-cookie';
import { Landing1, Landing2, Form } from '../components/tailwind';

function Home({}) {
  return (
    <React.Fragment>
      <div className="main_content">
        <Form />
        <Landing1 />
        <Landing2 />
      </div>
    </React.Fragment>
  );
}

export default Home;
