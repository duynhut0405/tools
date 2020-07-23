import React from 'react';

const Tab2 = () => {
  return (
    <div className="block2" data-tabname="name2">
      <div className="col-12">
        <div className="block2_search1">
          <div className="row">
            <div className="col-12 col-sm-9">
              <div className="form-search-focus">
                <input
                  id="modal-search-branch"
                  type="text"
                  placeholder="Nhập số điện thoại liên hệ"
                />
                <i className="icon-search-2"></i>
              </div>
            </div>
            <div className="col-12 col-sm-3 text-center">
              <button className="btn c-modal-search1-btn1-js">Chọn</button>
            </div>
          </div>
        </div>
        <div className="c-modal-search1-js">
          <div className="block2_empty"></div>
        </div>
      </div>
    </div>
  );
};

export default Tab2;
