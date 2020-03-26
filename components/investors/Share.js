import React from 'react';
import Proptypes from 'prop-types';

const propTypes = {
  url: Proptypes.object
};

function Share({ url }) {
  return (
    <section className="sec-tb  bg-gray ">
      <div className="container">
        <div className="entry-head text-center">
          <h2 className="ht efch-1 ef-img-t">Cổ phiếu MB</h2>
        </div>
        <div>
          <iframe src={url} style={{ width: '100%', minHeight: '600px' }}></iframe>
        </div>
      </div>
    </section>
  );
}

Share.propTypes = propTypes;

export default Share;
