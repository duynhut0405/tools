import React from 'react';
import New from './New';
import Share from './Share';
import DowloadVideo from './DowloadVideo';
import Financial from './Financial';
import Proptypes from 'prop-types';

const propTypes = { data: Proptypes.object };

function Investors({ data }) {
  return (
    <div>
      <New category={data.type} />
      <Share url={data.url} />
      <DowloadVideo />
      <Financial />
    </div>
  );
}

Investors.propTypes = propTypes;
export default Investors;
