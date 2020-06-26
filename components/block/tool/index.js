import React from 'react';
import dynamic from 'next/dynamic';
const ToolHome = dynamic(() => import('./Home'));
const ProductionBusiness = dynamic(() => import('./ProductionBusiness'));
const ConsumerLoansWithCollateral = dynamic(() => import('./ConsumerLoansWithCollateral'));
const Tool4 = dynamic(() => import('./Tool4'));
const Tool5 = dynamic(() => import('./Tool5'));
const Tool6 = dynamic(() => import('./Tool6'));
const Tool7 = dynamic(() => import('./Tool7'));
const Tool8 = dynamic(() => import('./Tool8'));
const Tool9 = dynamic(() => import('./Tool9'));
// import ToolHome from './Home';
// import ProductionBusiness from './ProductionBusiness';
// import ConsumerLoansWithCollateral from './ConsumerLoansWithCollateral';
// import Tool4 from './Tool4';
// import Tool5 from './Tool5';
// import Tool6 from './Tool6';
// import Tool7 from './Tool7';
// import Tool8 from './Tool8';
// import Tool9 from './Tool9';
import Proptypes from 'prop-types';


const propTypes = {
  content: Proptypes.object,
  id: Proptypes.number
};

function Tools({ content, id }) {
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
            type={content.type}
            id={id}
            padding={padding}
            minValue={parseInt(content.minValue)}
            maxValue={parseInt(content.maxValue)}
            interest_rate={parseInt(content.interest_rate)}
          />
        );
      case 2:
        return (
          <ProductionBusiness
            types={content.type}
            id={id}
            padding={padding}
            minValue={parseInt(content.minValue)}
            maxValue={parseInt(content.maxValue)}
            interest_rate={parseInt(content.interest_rate)}
          />
        );
      case 3:
        return (
          <ConsumerLoansWithCollateral
            type={content.type}
            id={id}
            padding={padding}
            minValue={parseInt(content.minValue)}
            maxValue={parseInt(content.maxValue)}
            interest_rate={parseFloat(content.interest_rate)}
          />
        );
      case 4:
        return (
          <Tool4
            type={content.type}
            id={id}
            padding={padding}
            minValue={parseInt(content.minValue)}
            maxValue={parseInt(content.maxValue)}
            interest_rate={parseFloat(content.interest_rate)}
          />
        );
      case 5:
        return (
          <Tool5
            type={content.type}
            id={id}
            padding={padding}
            minValue={parseInt(content.minValue)}
            maxValue={parseInt(content.maxValue)}
            interest_rate={parseFloat(content.interest_rate)}
          />
        );
      case 6:
        return (
          <Tool6
            type={content.type}
            id={id}
            padding={padding}
            minValue={parseInt(content.minValue)}
            maxValue={parseInt(content.maxValue)}
            interest_rate={parseFloat(content.interest_rate)}
          />
        );
      case 7:
        return (
          <Tool7
            type={content.type}
            id={id}
            padding={padding}
            minValue={parseInt(content.minValue)}
            maxValue={parseInt(content.maxValue)}
            interest_rate={parseFloat(content.interest_rate)}
          />
        );
      case 8:
        return (
          <Tool8
            type={content.type}
            id={id}
            padding={padding}
            minValue={parseInt(content.minValue)}
            maxValue={parseInt(content.maxValue)}
            interest_rate={parseFloat(content.interest_rate)}
          />
        );
      case 9:
        return (
          <Tool9
            type={content.type}
            id={id}
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
