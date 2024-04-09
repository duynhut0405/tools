import React from 'react';
import { Form, Landing1, Landing2 } from '../components/tailwind';

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
