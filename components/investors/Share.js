import React from 'react';
import Proptypes from 'prop-types';

const propTypes = {
  url: Proptypes.object
};

function Share({ url, padding }) {
  return (
    <section className={`${padding} bg-gray investors `}>
      <div className="container">
        <div className="entry-head text-center">
          <h2 className="ht efch-1 ef-img-t">Thông tin thị trường</h2>
        </div>
        <div>
          <iframe src={url} style={{ width: '100%', minHeight: '500px' }}></iframe>
        </div>
      </div>
    </section>
  );
}

Share.propTypes = propTypes;

export default Share;
