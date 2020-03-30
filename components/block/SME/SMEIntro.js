import React from 'react';
import Proptypes from 'prop-types';

const propTypes = {
  data: Proptypes.object.isRequired,
  indexTab: Proptypes.number.isRequired
};

function BlockSMEIntro({ data }) {
  return (
    <section className="sec-tb">
      <div className="container">
        <img
          src="/static/images/smeCare/care-logo.png"
          alt=""
          className="img loaded loaded mb-20"
        />
        <div className="row list-item">
          <div className="col-md-3">
            <a href="https://smecare.com.vn/">
              <div className="flex">
                <div className="img_care">
                  <img src="/static/images/smeCare/C.png" alt="" />
                </div>
                <div className="content_care">
                  <h3 className="mg-0 cl1 fs22 uppercase b">Capital</h3>
                  <p className="cl3 fs16 b mb-10">Tài chính</p>
                </div>
              </div>
            </a>
          </div>{' '}
          <div className="col-md-3">
            <a href="https://smecare.com.vn/">
              <div className="flex">
                <div className="img_care">
                  <img src="/static/images/smeCare/A.png" alt="" />
                </div>
                <div className="content_care">
                  <h3 className="mg-0 cl1 fs22 uppercase b">Advertising</h3>
                  <p className="cl3 fs16 b mb-10">Truyền thông</p>
                </div>
              </div>
            </a>
          </div>{' '}
          <div className="col-md-3">
            <a href="https://smecare.com.vn/">
              <div className="flex">
                <div className="img_care">
                  <img src="/static/images/smeCare/R.png" alt="" />
                </div>
                <div className="content_care">
                  <h3 className="mg-0 cl1 fs22 uppercase b">Relation</h3>
                  <p className="cl3 fs16 b mb-10">Cộng đồng</p>
                </div>
              </div>
            </a>
          </div>{' '}
          <div className="col-md-3">
            <a href="https://smecare.com.vn/">
              <div className="flex">
                <div className="img_care">
                  <img src="/static/images/smeCare/E.png" alt="" />
                </div>
                <div className="content_care">
                  <h3 className="mg-0 cl1 fs22 uppercase b">Education</h3>
                  <p className="cl3 fs16 b mb-10">Đào tạo</p>
                </div>
              </div>
            </a>
          </div>{' '}
        </div>
      </div>
    </section>
  );
}

BlockSMEIntro.propTypes = propTypes;

export default BlockSMEIntro;
