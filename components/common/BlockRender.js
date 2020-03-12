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
  Download,
  DetailPerson
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
              if (values.name === 'Block Icon' && values.content !== null) {
                return <Icon id={values.id} data={JSON.parse(values.content)} key={index} />;
              }
              if (values.name === 'Block Images' && values.content !== null) {
                return <Images id={values.id} data={JSON.parse(values.content)} key={index} />;
              }
              if (values.name === 'Single Post' && values.content !== null) {
                return <SingerPost id={values.id} data={JSON.parse(values.content)} key={index} />;
              }
              if (values.name === 'Block News' && values.content !== null) {
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
              if (values.name === 'Pages' && values.content !== null) {
                return <Pages id={values.id} data={JSON.parse(values.content)} key={index} />;
              }
              if (values.name === 'Form đăng kí' && values.content !== null) {
                return <Form id={values.id} data={JSON.parse(values.content)} key={index} />;
              }
              if (values.name === 'Category-mini-wtithtab' && values.content !== null) {
                return <MiniTab id={values.id} data={JSON.parse(values.content)} key={index} />;
              }
              if (values.name === 'Table' && values.content !== null) {
                return (
                  <Repeat
                    data={JSON.parse(values.content)}
                    type={JSON.parse(values.content).type}
                    key={index}
                    id={values.id}
                  />
                );
              }
              if (values.name === 'Download' && values.content !== null) {
                return (
                  <Download
                    data={JSON.parse(values.content)}
                    type={JSON.parse(values.content).type}
                    key={index}
                    id={values.id}
                  />
                );
              }
              if (values.name === 'Product' && values.content !== null) {
                return <Product data={JSON.parse(values.content)} id={values.id} key={index} />;
              }
              if (values.name === 'Question' && values.content !== null) {
                return <Question data={JSON.parse(values.content)} id={values.id} key={index} />;
              }
              if (values.name === 'Category' && values.content !== null) {
                return (
                  <Pages
                    type={JSON.parse(values.content).type}
                    data={JSON.parse(values.content)}
                    key={index}
                    id={values.id}
                  />
                );
              }
              if (values.name === 'Sản phẩm nổi bật' && values.content !== null) {
                return <TagProduct data={JSON.parse(values.content)} key={index} id={values.id} />;
              }
              if (values.name === 'MenuIntro' && values.content !== null) {
                return (
                  <MenuIntro
                    data={JSON.parse(values.content)}
                    key={index}
                    id={values.id}
                    type={JSON.parse(values.content).type}
                  />
                );
              }
              if (values.name === 'Lãnh Đạo' && values.content !== null) {
                return (
                  <DetailPerson data={JSON.parse(values.content)} key={index} id={values.id} />
                );
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
