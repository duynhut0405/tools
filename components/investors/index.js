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
  let padding = '';
  if (data.optionWidth === '2') {
    padding = 'sec-tb';
  } else if (data.optionWidth === '3') {
    padding = 'sec-t';
  } else if (data.optionWidth === '4') {
    padding = 'sec-b';
  } else {
    padding = 'sec-';
  }
  return (
    <div>
      <New category={data.type} padding={padding} />
      <Share url={data.url} padding={padding} />
      <MBNotifi data={data.new_notifi} padding={padding} />
      <NewMB data={data.new_MB} padding={padding} />
      <DowloadVideo padding={padding} />
      <Financial padding={padding} />
    </div>
  );
}

Investors.propTypes = propTypes;
export default Investors;
