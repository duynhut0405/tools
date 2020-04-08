import { map } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from '../i18n';
import ReactHtmlParser from 'react-html-parser';

const propTypes = {
  data: PropTypes.object
};

function NewCard({ data, optionWidth }) {
  let padding = '';
  if (optionWidth === '2') {
    padding = 'sec-tb';
  } else if (optionWidth === '3') {
    padding = 'sec-t';
  } else if (optionWidth === '4') {
    padding = 'sec-b';
  } else {
    padding = 'sec-';
  }
  return (
    <React.Fragment>
      <section className={`${padding} group-ef loaded`}>
        <div className="container">
          <div className="list-5 equalHeight row list-item">
            {map(data.listCard, (items, index) => {
              return (
                <div key={index} className="col-md-4">
                  <div className="item efch-2 ef-img-l ">
                    <div className="divtext">
                      <h4 className="title equal line2" style={{ height: '48px' }}>
                        <a
                          href={items.urlTitle}
                          target="_blank"
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

NewCard.getInitialProps = async () => ({
  namespacesRequired: ['common', 'newcard']
});

NewCard.propTypes = propTypes;

export default withTranslation('common')(NewCard);
