import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import moment from 'moment';
import { useRouter } from 'next/router';
import ReactHtmlParser from 'react-html-parser';
import { getNewByUri } from '../../services/news';

function New() {
  const [news, setNews] = useState({});
  const router = useRouter();
  useEffect(() => {
    const res = getNewByUri(router.query.slug);
    res.then(data => {
      if (data !== undefined && data.status === 200) {
        setNews(data.data);
      }
    });
  }, [getNewByUri]);
  return (
    <React.Fragment>
      <Head>
        <title>{news.meta_title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container main_content">
        <h4>{news.title}</h4>
        <div style={{ display: 'flex' }}>
          <p className="mr-4">Tác giả : {news.author_name}</p>
          <p className="mr-2">
            Ngày tạo :
            {moment(news.created_at)
              .endOf('day')
              .fromNow()}
          </p>
        </div>
        <div>{ReactHtmlParser(news.description)}</div>
      </div>
    </React.Fragment>
  );
}

export default New;
