import React from 'react';
import New from './New';
import Share from './Share';
import DowloadVideo from './DowloadVideo';
import Financial from './Financial';
import NewMB from './NewMB';
import MBNotifi from './MBNotifi';
import Proptypes from 'prop-types';

const propTypes = { data: Proptypes.object };

function Investors({ data }) {
  return (
    <div>
      <New category={data.type} />
      <Share url={data.url} />
      <MBNotifi data={data.new_notifi} />
      <NewMB data={data.new_MB} />
      <DowloadVideo />
      <Financial />
    </div>
  );
}

Investors.propTypes = propTypes;
export default Investors;
