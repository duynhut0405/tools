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
  let padding = '';
  if (content.optionWidth === '2') {
    padding = 'sec-tb';
  } else if (content.optionWidth === '3') {
    padding = 'sec-t';
  } else if (content.optionWidth === '4') {
    padding = 'sec-b';
  } else {
    padding = 'sec-';
  }
  const renderTools = () => {
    switch (parseInt(content.type)) {
      case 1:
        return (
          <ToolHome
            padding={padding}
            minValue={parseInt(content.minValue)}
            maxValue={parseInt(content.maxValue)}
            interest_rate={parseInt(content.interest_rate)}
          />
        );
      case 2:
        return (
          <ProductionBusiness
            padding={padding}
            minValue={parseInt(content.minValue)}
            maxValue={parseInt(content.maxValue)}
            interest_rate={parseInt(content.interest_rate)}
          />
        );
      case 3:
        return (
          <ConsumerLoansWithCollateral
            padding={padding}
            minValue={parseInt(content.minValue)}
            maxValue={parseInt(content.maxValue)}
            interest_rate={parseFloat(content.interest_rate)}
          />
        );
      case 4:
        return (
          <Tool4
            padding={padding}
            minValue={parseInt(content.minValue)}
            maxValue={parseInt(content.maxValue)}
            interest_rate={parseFloat(content.interest_rate)}
          />
        );
      case 5:
        return (
          <Tool5
            padding={padding}
            minValue={parseInt(content.minValue)}
            maxValue={parseInt(content.maxValue)}
            interest_rate={parseFloat(content.interest_rate)}
          />
        );
      case 6:
        return (
          <Tool6
            padding={padding}
            minValue={parseInt(content.minValue)}
            maxValue={parseInt(content.maxValue)}
            interest_rate={parseFloat(content.interest_rate)}
          />
        );
      case 7:
        return (
          <Tool7
            padding={padding}
            minValue={parseInt(content.minValue)}
            maxValue={parseInt(content.maxValue)}
            interest_rate={parseFloat(content.interest_rate)}
          />
        );
      case 8:
        return (
          <Tool8
            padding={padding}
            minValue={parseInt(content.minValue)}
            maxValue={parseInt(content.maxValue)}
            interest_rate={parseFloat(content.interest_rate)}
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
