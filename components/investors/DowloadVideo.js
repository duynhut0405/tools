import React, { useEffect, useState } from 'react';
import { map } from 'lodash';
import { DowloadVideo } from '../common/download';
import { RegulationActions } from '../../store/actions';
import moment from 'moment';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

const propTypes = {
  listRegulation: Proptypes.array.isRequired,
  typeRegulation: Proptypes.array.isRequired,
  seachRegulation: Proptypes.func.isRequired,
  getTypeRegulation: Proptypes.func.isRequired,
  searByYear: Proptypes.func
};

function DowloadVideos({ listRegulation, seachRegulation }) {
  const date = new Date();
  const [datatype] = useState(1);
  const [page] = useState(0);
  const [year] = useState(moment(date).format('YYYY'));

  useEffect(() => {
    seachRegulation(datatype, page, year);
  }, [seachRegulation]);

  return (
    <section className="sec-tb ">
      <div className="container sec-tb">
        <div className="entry-head">
          <h2 className="ht efch-1 ef-img-l">Họp cổ đông</h2>
          <a className="viewall" href="#">
            Xem tất cả <i className="icon-arrow-1"></i>
          </a>
        </div>
        {map(listRegulation, item => {
          if (item.investors.length > 0) {
            return (
              <div key={item.year}>
                <DowloadVideo data={item.investors} year={item.year} isChecked />
              </div>
            );
          }
          return null;
        })}
      </div>
    </section>
  );
}

const mapStateToProp = state => {
  return {
    listRegulation: state.regulationReducer.listDataByYear,
    typeRegulation: state.regulationReducer.type,
    urlVideo: state.regulationReducer.urlVideo
  };
};

const mapDispatchToProps = {
  seachRegulation: RegulationActions.getRegulationByYear,
  getTypeRegulation: RegulationActions.getTypeRegulationAction,
  getUrlVideo: RegulationActions.getUrlVideo
};

DowloadVideos.propTypes = propTypes;

export default connect(mapStateToProp, mapDispatchToProps)(DowloadVideos);
