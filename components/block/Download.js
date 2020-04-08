import React from 'react';
import Proptypes from 'prop-types';

const propTypes = {
  data: Proptypes.object.isRequired,
  id: Proptypes.number,
  type: Proptypes.string
};

function Download({ data, id, type }) {
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
  if (type && type === '1') {
    return (
      <section className={` ${padding} b-tl-3`} id={id}>
        <div className="container">
          <h2 className="ht text-center">{data.title}</h2>
          <div className="inner">
            <div className="desc">{data.description}</div>
            <a className="btn lg" href={data.buttonUrl ? data.buttonUrl : data.image}>
              {data.buttonTitle}
            </a>
          </div>
        </div>
      </section>
    );
  }
  if (type && type === '2') {
    return (
      <section className={` ${padding} `} id={id}>
        <div className="container">
          <div className=" b-tl-1">
            <div className="inner">
              <h2 className="ht">{data.title}</h2>
              <div className="desc">{data.description}</div>
            </div>
            <a className="btn lg btn-2" href={data.buttonUrl ? data.buttonUrl : data.image}>
              {data.buttonTitle}
            </a>
          </div>
        </div>
      </section>
    );
  }
  if (type && type === '3') {
    return (
      <section className={` ${padding} `} id={id}>
        <div className="container">
          <div className=" b-tl-2">
            <h2 className="ht">{data.title}</h2>
            <div className="divtext">
              <div className="desc">{data.description}</div>
              <a className="btn lg btn-2" href={data.buttonUrl ? data.buttonUrl : data.image}>
                {data.buttonTitle}
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
  if (type && type === '4') {
    return (
      <section className={` ${padding} sec-hstt`} id={id}>
        <div className="container">
          <div className="inner">
            <h2 className="ht">{data.title}</h2>
            <p className="desc">{data.description}</p>
            <a className="btn lg btn-2" href={data.buttonUrl ? data.buttonUrl : data.image}>
              {data.buttonTitle}
            </a>
          </div>
        </div>
      </section>
    );
  }
  return null;
}

Download.propTypes = propTypes;

export default Download;
