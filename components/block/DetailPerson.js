import React, { useState } from 'react';
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

function DetailPerson({ data, detailPerson, getDetailPerson }) {
  const [modal, setModal] = useState(false);

  return (
    <main id="main" className="sec-tb ">
      <div className="container">
        <div className="sec-b">
          <h2 className="text-center h1">{data.title}</h2>
          <div className="list-8 row list-item">
            {map(data.listDetail, (item, index) => (
              <React.Fragment>
                <div className="col-md-3" key={index}>
                  <a
                    onClick={() => {
                      setModal(!modal);
                      getDetailPerson(item);
                    }}
                    className={`item efch-${index + 2} ef-img-l equal`}
                  >
                    <div className="img tRes">
                      <img className=" loaded loaded" data-lazy-type="image" src={item.image} />
                    </div>
                    <div className="divtext">
                      <h4 className="title line2">{item.name}</h4>
                      <div className="desc line2">{item.position}</div>
                    </div>
                  </a>
                </div>
              </React.Fragment>
            ))}
            <PopupItems item={detailPerson} modal={modal} setModal={setModal} />
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
