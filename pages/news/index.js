import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout';
import { map } from 'lodash';
import NewItems from '../../components/news/Items';
import { getNewService } from '../../services/news';

function News({ list }) {
  return (
    <Layout>
      <Head>
        <title>News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container main_content">
        <h1 className="text-center">Tin tức</h1>
        <div className="mb-4">
          <h4>Tin nổi bật</h4>
          {map(list, values => {
            if (values.is_sticky === 1) {
              return <NewItems data={values} key={values.newsId} />;
            }
            return null;
          })}
        </div>
        <div>
          <h4>Tin gần đây</h4>
          {map(list, values => {
            if (values.is_sticky === 0) {
              return <NewItems data={values} key={values.newsId} />;
            }
            return null;
          })}
        </div>
      </div>
    </Layout>
  );
}

News.getInitialProps = async ctx => {
  let list = [];
  const res = await getNewService();
  if (res !== undefined && res.status === 200) {
    list = res.data;
  }
  return { list };
};

export default News;
