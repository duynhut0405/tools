import React, { useEffect, useState } from 'react';
import { Carousel, BlockRender, MenuMiddle, Breadcrumb, Contact } from '../components/common';
import Head from 'next/head';
import Cookies from 'js-cookie';
import { Content1, Content2, Content3 } from '../components/tailwind';
function Home({}) {
  return (
    <React.Fragment>
      <div className="main_content">
        <Content1 />
        <Content2 />
        <Content3 />
      </div>
    </React.Fragment>
  );
}

export default Home;
