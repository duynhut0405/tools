import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.object
};

function NewItems({ data }) {
  const router = useRouter();
  return (
    <div className="item mb-3" onClick={() => router.push('/news/[slug]', `/news/${data.url}`)}>
      <div className="item-img">
        <img
          className="lazyload"
          data-src={
            data.base_image === null
              ? `/images/imgdefault.jpg`
              : `${process.env.DOMAIN}${data.base_image}`
          }
          alt={data.title}
          onClick={() => router.push('/news/[slug]', `/news/${data.url}`)}
        />
      </div>

      <div className="item-content ml-3">
        <p onClick={() => router.push('/news/[slug]', `/news/${data.url}`)}>{data.title}</p>
        <p>{data.shortDescription}</p>
      </div>
    </div>
  );
}

NewItems.propTypes = propTypes;

export default NewItems;
