import React from 'react';
import Proptypes from 'prop-types';
import ToolHome from './Home';
import ProductionBusiness from './ProductionBusiness';

const propTypes = {
  content: Proptypes.object
};

function Tools({ content }) {
  const renderTools = () => {
    switch (parseInt(content.type)) {
      case 1:
        return <ToolHome />;
      case 2:
        return (
          <ProductionBusiness
            minValue={parseInt(content.minValue)}
            maxValue={parseInt(content.maxValue)}
            interest_rate={parseInt(content.interest_rate)}
          />
        );
      default:
        return null;
    }
  };
  return <React.Fragment>{renderTools()}</React.Fragment>;
}

Tools.propTypes = propTypes;

export default Tools;
