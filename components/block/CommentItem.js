import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import useCollapse from 'react-collapsed';
import t from '../../translation';

const propTypes = {
  data: PropTypes.any
};

function CommentItem({ data }) {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  });
  const { getCollapseProps, getToggleProps, isOpen } = useCollapse({
    collapsedHeight: 130
  });
  return (
    <React.Fragment>
      <section {...getCollapseProps()}>
        <div ref={ref} className="desc">
          {ReactHtmlParser(data)}
        </div>
      </section>

      {height >= 130 && (
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

CommentItem.propTypes = propTypes;

export default CommentItem;
