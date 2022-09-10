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
import Tool9 from './Tool9';
import Tool10 from './Tool10';

const propTypes = {
  content: Proptypes.object,
  id: Proptypes.number
};

function Tools({ content, id }) {
  console.log('🚀 ~ file: index.js ~ line 20 ~ Tools ~ content', content);
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
      case 10:
        return (
          <Tool10
            type={content.type}
            id={id}
            padding={padding}
            minValue={parseInt(content.minValue)}
            maxValue={parseInt(content.maxValue)}
            interest_rate={parseFloat(content.interest_rate)}
          ></Tool10>
        );
      default:
        return null;
    }
  };
  return <React.Fragment>{renderTools()}</React.Fragment>;
}

Tools.propTypes = propTypes;

export default Tools;
