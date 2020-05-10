import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import useCollapse from 'react-collapsed';
import t from '../../../translation';

const propTypes = {
  data: PropTypes.any,
  maxheight: PropTypes.number
};

function TableItem({ data, maxheight }) {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  });
  const { getCollapseProps, getToggleProps, isOpen } = useCollapse({
    collapsedHeight: maxheight
  });
  return (
    <React.Fragment>
      <section {...getCollapseProps()}>
        <div ref={ref}>{ReactHtmlParser(data)}</div>
      </section>

      {height >= maxheight && (
        <span className="showmore">
          <span className="text" style={{ color: 'blue' }} {...getToggleProps()}>
            {isOpen ? `- ${t('collapse')}` : `+ ${t('view_more')}`}
          </span>
          <i className=""></i>
        </span>
      )}
    </React.Fragment>
  );
}

TableItem.propTypes = propTypes;

export default TableItem;
