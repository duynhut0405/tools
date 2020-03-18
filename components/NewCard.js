import { map } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from '../i18n';
import ReactHtmlParser from 'react-html-parser';

const propTypes = {
  listNews: PropTypes.object,
  getNews: PropTypes.func,
  data: PropTypes.object
};

function NewCard({ data }) {
  console.log('dataaa:', data);
  return (
    <React.Fragment>
      <section className="sec-tb group-ef loaded">
        <div className="container">
          <div className="list-5 equalHeight row list-item">
            {map(data, (items, index) => {
              return (
                <div key={index} className="col-md-4">
                  <div className="item efch-2 ef-img-l ">
                    <div className="divtext">
                      <h4 className="title equal line2" style={{ height: '48px' }}>
                      {ReactHtmlParser(items.note_1)}
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
  namespacesRequired: ['common', 'about']
});

NewCard.propTypes = propTypes;

export default withTranslation('common')(NewCard);
