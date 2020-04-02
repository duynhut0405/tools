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
  DetailPerson,
  Card,
  Tools,
  Comment,
  TablePayment,
  TabQuestions,
  CustomTab,
  SMEIntro,
  Banner
} from '../block';
import About from '../about';
import Investors from '../investors';
import OtherNews from '../otherNews';
import { ListDowloadFIle, ListDowloadVideo } from '../common/download';
import Transaction from '../transaction';
import { Contact, DowloadCategory } from '../common';
import FormStep from '../block/formStep';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import NewCard from '../NewCard';

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
              if (values.name === 'NewCard' && values.content !== null) {
                return (
                  <NewCard
                    type={JSON.parse(values.content).type}
                    data={JSON.parse(values.content)}
                    key={index}
                    id={values.id}
                  />
                );
              }
              if (values.name === 'Installment Payment System') {
                return (
                  <TablePayment id={values.id} data={JSON.parse(values.content)} key={index} />
                );
              }
              if (values.name === 'Pages' && values.content !== null) {
                return <Pages id={values.id} data={JSON.parse(values.content)} key={index} />;
              }
              if (values.name === 'Form đăng kí' && values.content !== null) {
                return <Form id={values.id} data={JSON.parse(values.content)} key={index} />;
              }
              if (values.name === 'Category-mini-wtithtab' && values.content !== null) {
                return <MiniTab id={values.id} data={JSON.parse(values.content)} key={index} />;
              }
              if (values.name === 'Card' && values.content !== null) {
                return (
                  <Card
                    id={values.id}
                    data={JSON.parse(values.content)}
                    key={index}
                    type={JSON.parse(values.content).type}
                  />
                );
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
              if (values.name === 'Công cụ tính' && values.content !== null) {
                return <Tools content={JSON.parse(values.content)} key={index} />;
              }
              if (values.name === 'About' && values.content !== null) {
                return <About data={JSON.parse(values.content)} key={index} />;
              }
              if (values.name === 'Investors' && values.content !== null) {
                return <Investors key={index} data={JSON.parse(values.content)} />;
              }
              if (values.name === 'Contact' && values.content !== null) {
                return <Contact key={index} />;
              }
              if (values.name === 'Transaction' && values.content !== null) {
                return <Transaction key={index} />;
              }
              if (values.name === 'DowloadCategory' && values.content !== null) {
                return <DowloadCategory key={index} />;
              }
              if (values.name === 'OtherNews' && values.content !== null) {
                return <OtherNews key={index} />;
              }
              if (values.name === 'Comment' && values.content !== null) {
                return <Comment data={JSON.parse(values.content)} id={values.id} key={index} />;
              }
              if (values.name === 'DownloadFile' && values.content !== null) {
                return (
                  <ListDowloadFIle
                    type={Number(JSON.parse(values.content).type)}
                    search
                    key={index}
                  />
                );
              }
              if (values.name === 'DownloadVideo' && values.content !== null) {
                return (
                  <ListDowloadVideo type={Number(JSON.parse(values.content).type)} key={index} />
                );
              }
              if (values.name === 'TabQuestions' && values.content !== null) {
                return (
                  <TabQuestions data={JSON.parse(values.content)} id={values.id} key={index} />
                );
              }
              if (values.name === 'CustomTab' && values.content !== null) {
                return <CustomTab data={JSON.parse(values.content)} id={values.id} key={index} />;
              }
              if (values.name === 'BlockSMEIntro' && values.content !== null) {
                return <SMEIntro key={index} />;
              }
              if (values.name === 'Form Step' && values.content !== null) {
                return <FormStep key={index} data={JSON.parse(values.content)} />;
              }
              if (values.name === 'Banner' && values.content !== null) {
                return <Banner key={index} data={JSON.parse(values.content)} id={values.id} />;
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
