import map from 'lodash/map';
import PropTypes from 'prop-types';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const propTypes = {
  data: PropTypes.object,
  id: PropTypes.number
};

function NewCard({ data, id }) {
  let padding = '';
  if (data[0].optionWidth === '2') {
    padding = 'sec-tb';
  } else if (data[0].optionWidth === '3') {
    padding = 'sec-t';
  } else if (data[0].optionWidth === '4') {
    padding = 'sec-b';
  } else {
    padding = 'sec-';
  }
  return (
    <React.Fragment>
      <section className={`${padding} group-ef loaded newCard`} id={id}>
        <div className="container">
          <div className="list-5 equalHeight row list-item">
            {map(data, (items, index) => {
              return (
                <div key={index} className="col-md-4">
                  <div className="item efch-2 ef-img-l ">
                    <div className="divtext">
                      <h4 className="title equal line2" style={{ height: '48px' }}>
                        <a
                          href={items.urlTitle}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-weight-bold title equal line2"
                        >
                          <div>{items.titleCard}</div>
                        </a>
                      </h4>
                      <div className="desc ">{ReactHtmlParser(items.note_2)}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

NewCard.propTypes = propTypes;

export default NewCard;
