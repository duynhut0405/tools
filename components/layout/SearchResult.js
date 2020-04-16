import React, { useState } from 'react';

function SearchResult() {
  const [tabActive, setTabActive] = useState(1);

  const onClose = () => {
    const body = document.getElementsByTagName('body')[0];
    const result = document.getElementById('search-result');
    body.classList.remove('fixed-screen');
    result.style = `display: none`;
  };
  return (
    <div id="search-result" style={{ display: 'none' }}>
      <section id="top-search-result">
        <div className="container">
          <a href="/" id="logo">
            <img src="/static/images/logo-blue.svg" alt="" />
          </a>
          <span className="icon-close close-sg" onClick={onClose}></span>
          <form name="search" className="search-field" autoComplete="off">
            <button
              type="submit"
              name="search-submit"
              id="search-submit"
              title=""
              className="icon-search-2"
            ></button>
            <button
              type="reset"
              name="cancel-btn"
              id="cancel-btn"
              title="Xóa text"
              className="btn-clear-text icon-close"
            ></button>
            <input
              type="text"
              name="search-input"
              id="search-input"
              placeholder="Tìm kiếm ..."
              className="search-input-transparent"
            />
          </form>
        </div>
      </section>

      <section className="sec-tb search-result">
        <div className="container">
          <div className="cttab-v3">
            <div className="tab-menu">
              <div className={tabActive === 1 ? 'active' : ''} onClick={() => setTabActive(1)}>
                <span>Tất cả</span>
              </div>
              <div className={tabActive === 2 ? 'active' : ''} onClick={() => setTabActive(2)}>
                <span>Tin tức</span>
              </div>
              <div className={tabActive === 3 ? 'active' : ''} onClick={() => setTabActive(3)}>
                <span>Sản phẩm</span>
              </div>
            </div>
            <div className="tab-content">
              <div className="active">
                <div className="total-search">
                  <p>
                    Tìm thấy
                    <span className="total">
                      {tabActive === 1 ? ' 374 ' : tabActive === 2 ? ' 274 ' : ' 174 '}
                    </span>
                    kết quả
                  </p>
                </div>
                <div className="tab-inner">
                  <section className=" sec-b sec-search-list ">
                    <div className="search-item">
                      <a href="#">
                        <h3 className="ctext">
                          Kết quả định hạng tín nhiệm theo Moody's của MB BANK (Tháng 7/2015)
                        </h3>
                      </a>
                      <p>
                        Kết quả định hạng tín nhiệm theo Moody's của MB BANK (Tháng 7/2015). Định
                        hạng tiền gửi nội tệ/ngoại tệ dài hạn B1/B2. Định hạng nhà phát hành nội
                        tệ/ngoại tệ dài hạn B1/B2.
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SearchResult;
