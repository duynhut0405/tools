import React from 'react';
import Proptypes from 'prop-types';

const propTypes = {
  data: Proptypes.object.isRequired,
  id: Proptypes.number
};

function Banner({ data, id }) {
  let padding = '';
  if (Number(data.optionWidth) === 2) {
    padding = 'sec-tb';
  } else if (Number(data.optionWidth) === 3) {
    padding = 'sec-t';
  } else if (Number(data.optionWidth) === 4) {
    padding = 'sec-b';
  } else {
    padding = 'sec-';
  }
  return (
    <React.Fragment>
      <section className={`${padding} banner`} id={id}>
        <div className="container">
          <div className="row list-item flex">
            <div className="col-md-4">
              <img src={`${process.env.DOMAIN}${data.urlImage}`} alt="" className="img loaded" />
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
