import React from 'react';
import Proptypes from 'prop-types';
import ToolHome from './Home';
import ProductionBusiness from './ProductionBusiness';

const propTypes = {
  content: Proptypes.string
};

function Tools({ content }) {
  const renderTools = () => {
    switch (content.type) {
      case 1:
        return <ToolHome />;
      case 2:
        return <ProductionBusiness />;
      default:
        return null;
    }
  };
  return <React.Fragment>{renderTools()}</React.Fragment>;
}

Tools.propTypes = propTypes;

export default Tools;
