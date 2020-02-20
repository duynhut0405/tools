import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { map } from 'lodash';
import Layout from '../../components/layout';
import ReactHtmlParser from 'react-html-parser';
import { getPageService } from '../../services/home';
import { useRouter } from 'next/router';

function Home() {
  const [list, setList] = useState([]);
  const router = useRouter();

  const getHome = async () => {
    const res = await getPageService(router.query.slug);
    if (res && res.status === 200) {
      setList(res.data);
    }
  };

  useEffect(() => {
    getHome();
  }, []);

  return (
    <Layout>
      <Head>
        <title>{list.meta_title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container main_content">
        {map(list.pageBlocks, (values, index) => {
          return <div key={index}>{ReactHtmlParser(values.contentHtml)}</div>;
        })}
      </div>
    </Layout>
  );
}

export default Home;
