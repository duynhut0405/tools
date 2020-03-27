import React from 'react';
import Proptypes from 'prop-types';
import ToolHome from './Home';
import ProductionBusiness from './ProductionBusiness';
import ConsumerLoansWithCollateral from './ConsumerLoansWithCollateral';
import Tool4 from './Tool4';
import Tool5 from './Tool5';
import Tool6 from './Tool6';
import Tool7 from './Tool7';
import Tool8 from './Tool8';

const propTypes = {
  content: Proptypes.object
};

function Tools({ content }) {
  const renderTools = () => {
    switch (parseInt(content.type)) {
      case 1:
        return (
          <ToolHome
            minValue={parseInt(content.minValue)}
            maxValue={parseInt(content.maxValue)}
            interest_rate={parseInt(content.interest_rate)}
          />
        );
      case 2:
        return (
          <ProductionBusiness
            minValue={parseInt(content.minValue)}
            maxValue={parseInt(content.maxValue)}
            interest_rate={parseInt(content.interest_rate)}
          />
        );
      case 3:
        return (
          <ConsumerLoansWithCollateral
            minValue={parseInt(content.minValue)}
            maxValue={parseInt(content.maxValue)}
            interest_rate={parseInt(content.interest_rate)}
          />
        );
      case 4:
        return (
          <Tool4
            minValue={parseInt(content.minValue)}
            maxValue={parseInt(content.maxValue)}
            interest_rate={parseInt(content.interest_rate)}
          />
        );
      case 5:
        return (
          <Tool5
            minValue={parseInt(content.minValue)}
            maxValue={parseInt(content.maxValue)}
            interest_rate={parseInt(content.interest_rate)}
          />
        );
      case 6:
        return (
          <Tool6
            minValue={parseInt(content.minValue)}
            maxValue={parseInt(content.maxValue)}
            interest_rate={parseInt(content.interest_rate)}
          />
        );
      case 7:
        return (
          <Tool7
            minValue={parseInt(content.minValue)}
            maxValue={parseInt(content.maxValue)}
            interest_rate={parseInt(content.interest_rate)}
          />
        );
      case 8:
        return (
          <Tool8
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
