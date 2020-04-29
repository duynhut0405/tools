import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';
import { map } from 'lodash';
import { InvestorsActions } from '../../store/actions';
import PopupItems from './Popup/PopupItems';
import { connect } from 'react-redux';
const propTypes = {
  data: Proptypes.object.isRequired,
  id: Proptypes.number,
  type: Proptypes.string,
  detailPerson: Proptypes.object,
  getDetailPerson: Proptypes.func
};

function DetailPerson({ data, detailPerson, getDetailPerson, id }) {
  const [modal, setModal] = useState(false);
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

  useEffect(() => {
    const listModal = document.getElementsByClassName('myModal');
    const wrapper = document.getElementById('wrapper');
    map(listModal, modalItems => wrapper.appendChild(modalItems));
  }, []);

  return (
    <main id="main" className={`${padding} person`}>
      <div className="container" id={id}>
        <div className="sec-b">
          <h2 className="text-center h1">{data.title}</h2>
          <div className="list-8 row list-item">
            {map(data.listDetail, (item, index) => (
              <React.Fragment key={index}>
                <div className="col-md-3">
                  <a
                    onClick={() => {
                      setModal(!modal);
                      getDetailPerson(item);
                      document.body.classList.add('showModal');
                    }}
                    className={`item efch-${index + 2} ef-img-l equal`}
                  >
                    <div className="img tRes">
                      <img
                        className="lazyload"
                        data-src={`${process.env.DOMAIN}${item.urlImage}`}
                        alt="images"
                      />
                    </div>
                    <div className="divtext">
                      <h4 className="title line2">{item.name}</h4>
                      <div className="desc line2">{item.position}</div>
                    </div>
                  </a>
                </div>
              </React.Fragment>
            ))}
            <PopupItems item={detailPerson} modal={modal} setModal={setModal} name="detailPerson" />
          </div>
        </div>
      </div>
    </main>
  );
}

DetailPerson.propTypes = propTypes;

const mapStateToProps = state => {
  return {
    detailPerson: state.investorsReducer.detailPerson
  };
};

const mapDispatchToProps = {
  getDetailPerson: InvestorsActions.getDetailPerson
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPerson);
