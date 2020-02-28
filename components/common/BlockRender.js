import React from 'react';
import {
  Icon,
  Images,
  Post,
  Product,
  Question,
  Repeat,
  SingerPost,
  Pages,
  MiniTab,
  News
} from '../block';

import { map } from 'lodash';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.array
};

function BlockRender({ data }) {
  return (
    <>
<<<<<<< HEAD
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
          return (
            <News
              type={JSON.parse(values.content).type}
              data={JSON.parse(values.content)}
              key={index}
            />
          );
        }
        if (values.name === 'Pages') {
          return <Pages data={JSON.parse(values.content)} key={index} />;
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
        return null;
      })}
=======
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
              if (values.name === 'Block News') {
                return <Post data={JSON.parse(values.content)} key={index} />;
              }
              if (values.name === 'Post LayOut') {
                return <PostLayOut data={JSON.parse(values.content)} key={index} />;
              }
              if (values.name === 'Promotion') {
                return <Promotion data={JSON.parse(values.content)} key={index} />;
              }
              if (values.name === 'Pages') {
                return <Pages data={JSON.parse(values.content)} key={index} />;
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
              return null;
            }
          )}
        </>
      )}
>>>>>>> e8f2916080e7c9e3371062cc2cb9cbb06a6b001e
    </>
  );
}

BlockRender.propTypes = propTypes;

export default BlockRender;
