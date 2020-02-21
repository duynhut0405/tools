import React from 'react';
import { Icon, Images, Post, Product, Question, Repeat, SingerPost } from '../block';
import { map } from 'lodash';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.array
};

function BlockRender({ data }) {
  return (
    <div className="container">
      {map(data, (values, index) => {
        if (values.name === 'Block Icon') {
          return <Icon data={JSON.parse(values.content)} key={index} />;
        }
        if (values.name === 'Block Images') {
          return <Images data={JSON.parse(values.content)} key={index} />;
        }
        if (values.name === 'Single Post') {
          return <SingerPost data={JSON.parse(values.content)} key={index} />;
        }
        if (values.name === 'Block News') {
          return <Post data={JSON.parse(values.content)} key={index} />;
        }
        if (values.name === 'Repeat') {
          return <Repeat data={JSON.parse(values.content)} key={index} />;
        }
        if (values.name === 'Product') {
          return <Product data={JSON.parse(values.content)} key={index} />;
        }
        if (values.name === 'Question') {
          return <Question data={JSON.parse(values.content)} key={index} />;
        }
        return null;
      })}
    </div>
  );
}

BlockRender.propTypes = propTypes;

export default BlockRender;
