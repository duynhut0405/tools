import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

function BoxSearch() {
  const [tabActive, setTab] = useState(1);
  return (
    <div className="ajax-content-map">
      <ul className="menu row grid-space-0">
        <li className={tabActive === 1 ? 'col-6 active' : 'col-6'} onClick={() => setTab(1)}>
          <span className="item">Chi nhánh</span>
        </li>
        <li className={tabActive === 2 ? 'col-6 active' : 'col-6'} onClick={() => setTab(2)}>
          <span className="item">ATM</span>
        </li>
      </ul>

      <div className="form-search-focus mb-20">
        <input type="text" placeholder="Địa điểm" />
        <button>
          <i className="icon-search-2"></i>
        </button>
      </div>
      <div className="mb-20">
        <div>Tỉnh/ Thành phố</div>
        <Select options={options} className="fix-select" />
      </div>
      <div className="mb-20">
        <div>Quận/Huyện</div>
        <Select options={options} className="fix-select1" />
      </div>
    </div>
  );
}

export default BoxSearch;
