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
  TagProduct,
  MenuIntro,
  Download
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
                return <Icon id={values.id} data={JSON.parse(values.content)} key={index} />;
              }
              if (values.name === 'Block Images') {
                return <Images id={values.id} data={JSON.parse(values.content)} key={index} />;
              }
              if (values.name === 'Single Post') {
                return <SingerPost id={values.id} data={JSON.parse(values.content)} key={index} />;
              }
              if (values.name === 'Block News') {
                return (
                  <News
                    type={JSON.parse(values.content).type}
                    data={JSON.parse(values.content)}
                    key={index}
                    id={values.id}
                  />
                );
              }
              // if (values.name === 'Block News') {
              //   return <Post data={JSON.parse(values.content)} key={index} />;
              // }
              if (values.name === 'Pages') {
                return <Pages id={values.id} data={JSON.parse(values.content)} key={index} />;
              }
              if (values.name === 'Form đăng kí') {
                return <Form id={values.id} data={JSON.parse(values.content)} key={index} />;
              }
              if (values.name === 'Category-mini-wtithtab') {
                return <MiniTab id={values.id} data={JSON.parse(values.content)} key={index} />;
              }
              if (values.name === 'Table') {
                return (
                  <Repeat
                    data={JSON.parse(values.content)}
                    type={JSON.parse(values.content).type}
                    key={index}
                    id={values.id}
                  />
                );
              }
              if (values.name === 'Download') {
                return (
                  <Download
                    data={JSON.parse(values.content)}
                    type={JSON.parse(values.content).type}
                    key={index}
                    id={values.id}
                  />
                );
              }
              if (values.name === 'Product') {
                return <Product data={JSON.parse(values.content)} id={values.id} key={index} />;
              }
              if (values.name === 'Question') {
                return <Question data={JSON.parse(values.content)} id={values.id} key={index} />;
              }
              if (values.name === 'Category') {
                return (
                  <Pages
                    type={JSON.parse(values.content).type}
                    data={JSON.parse(values.content)}
                    key={index}
                    id={values.id}
                  />
                );
              }
              if (values.name === 'Sản phẩm nổi bật') {
                return <TagProduct data={JSON.parse(values.content)} key={index} id={values.id} />;
              }
              if (values.name === 'MenuIntro') {
                return <MenuIntro data={JSON.parse(values.content)} key={index} id={values.id} />;
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
