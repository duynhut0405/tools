import React from 'react';
import {
  Icon,
  Images,
  // Post,
  Product,
  Question,
  Repeat,
  SingerPost,
  Pages,
  MiniTab,
  News,
  Form,
  TagProduct
} from '../block';

import { map } from 'lodash';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.array
};

function BlockRender({ data }) {
  return (
    <>
      {data !== undefined && (
        <>
          {map(
            data.sort((a, b) => a.position - b.position),
            (values, index) => {
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
                return (
                  <News
                    type={JSON.parse(values.content).type}
                    data={JSON.parse(values.content)}
                    key={index}
                  />
                );
              }
              // if (values.name === 'Block News') {
              //   return <Post data={JSON.parse(values.content)} key={index} />;
              // }
              if (values.name === 'Pages') {
                return <Pages data={JSON.parse(values.content)} key={index} />;
              }
              if (values.name === 'Form đăng kí') {
                return <Form data={JSON.parse(values.content)} key={index} />;
              }
              if (values.name === 'MiniTab') {
                return <MiniTab data={JSON.parse(values.content)} key={index} />;
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
              if (values.name === 'Block Pages') {
                return (
                  <Pages
                    type={JSON.parse(values.content).type}
                    data={JSON.parse(values.content)}
                    key={index}
                  />
                );
              }
              if (values.name === 'Tab Mini') {
                return <MiniTab data={JSON.parse(values.content)} key={index} />;
              }
              if (values.name === 'Sản phẩm nổi bật') {
                return <TagProduct data={JSON.parse(values.content)} key={index} />;
              }
              return null;
            }
          )}
        </>
      )}
    </>
  );
}

BlockRender.propTypes = propTypes;

export default BlockRender;
