import { map } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from '../i18n';
import ReactHtmlParser from 'react-html-parser';
import Link from 'next/link';

const propTypes = {
  data: PropTypes.object
};

function NewCard({ data }) {
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
                      <div style={{ height: '62px', fontWeight: 'bold', fontSize: '16px' }}>
                        <a
                          href={items.urlTitle}
                          target="_blank"
                          className="font-weight-bold title equal line2"
                        >
                          <div>{items.titleCard}</div>
                        </a>
                      </div>
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
