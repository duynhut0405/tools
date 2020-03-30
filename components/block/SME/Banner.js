import React from 'react';
import Proptypes from 'prop-types';

const propTypes = {
  data: Proptypes.object.isRequired,
  indexTab: Proptypes.number.isRequired
};

function Banner({ data }) {
  return (
    <React.Fragment>
      <section className="sec-tb">
        <div className="container">
          <div className="row list-item flex">
            <div className="col-md-4">
              <img src={data.image} alt="" className="img loaded" />
            </div>
            <div className="col-md-5">
              <p className="desc">{data.description}</p>
            </div>
            <div className="col-md-3">
              <a href={data.buttonUrl} className="btn lg text-normal">
                {data.buttonTitle}
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

Banner.propTypes = propTypes;

export default Banner;
