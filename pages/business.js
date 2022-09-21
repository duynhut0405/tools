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

function Home({}) {
  return (
    <>
      <Block1 />

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
