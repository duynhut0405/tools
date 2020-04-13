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
import TableRate from '../tableRate';

const propTypes = {
  data: PropTypes.array,
  pageId: PropTypes.number
};

function BlockRender({ data, pageId }) {
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
                    optionWidth={JSON.parse(values.content).optionWidth}
                    data={JSON.parse(values.content)}
                    key={index}
                    id={values.id}
                  />
                );
              }
              if (values.name === 'NewCard' && values.content !== null) {
                return (
                  <NewCard
                    optionWidth={JSON.parse(values.content).optionWidth}
                    data={JSON.parse(values.content)}
                    key={index}
                    id={values.id}
                  />
                );
              }
              if (values.name === 'Installment Payment System') {
                return (
                  <TablePayment
                    id={values.id}
                    data={JSON.parse(values.content)}
                    key={index}
                    optionWidth={JSON.parse(values.content).optionWidth}
                  />
                );
              }
              if (values.name === 'Pages' && values.content !== null) {
                return <Pages id={values.id} data={JSON.parse(values.content)} key={index} />;
              }
              if (values.name === 'Form đăng kí' && values.content !== null) {
                return (
                  <Form
                    id={values.id}
                    pageId={pageId}
                    data={JSON.parse(values.content)}
                    key={index}
                  />
                );
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
                    optionWidth={JSON.parse(values.content).optionWidth}
                  />
                );
              }
              if (values.name === 'Table' && values.content !== null) {
                return (
                  <Repeat
                    data={JSON.parse(values.content)}
                    type={JSON.parse(values.content).type}
                    optionWidth={JSON.parse(values.content).optionWidth}
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
                    optionWidth={JSON.parse(values.content).optionWidth}
                    data={JSON.parse(values.content)}
                    key={index}
                    id={values.id}
                  />
                );
              }
              if (values.name === 'Sản phẩm nổi bật' && values.content !== null) {
                return (
                  <TagProduct
                    optionWidth={JSON.parse(values.content).optionWidth}
                    data={JSON.parse(values.content)}
                    key={index}
                    id={values.id}
                  />
                );
              }
              if (values.name === 'MenuIntro' && values.content !== null) {
                return (
                  <MenuIntro
                    data={JSON.parse(values.content)}
                    pageId={pageId}
                    key={index}
                    id={values.id}
                    type={JSON.parse(values.content).type}
                    optionWidth={JSON.parse(values.content).optionWidth}
                  />
                );
              }
              if (values.name === 'Lãnh Đạo' && values.content !== null) {
                return (
                  <DetailPerson data={JSON.parse(values.content)} key={index} id={values.id} />
                );
              }
              if (values.name === 'Công cụ tính' && values.content !== null) {
                return <Tools content={JSON.parse(values.content)} key={index} id={values.id} />;
              }
              if (values.name === 'About' && values.content !== null) {
                return <About data={JSON.parse(values.content)} key={index} id={values.id} />;
              }
              if (values.name === 'Investors' && values.content !== null) {
                return <Investors key={index} data={JSON.parse(values.content)} id={values.id} />;
              }
              if (values.name === 'Contact' && values.content !== null) {
                return <Contact data={JSON.parse(values.content)} key={index} id={values.id} />;
              }
              if (values.name === 'Transaction' && values.content !== null) {
                return <Transaction data={JSON.parse(values.content)} key={index} id={values.id} />;
              }
              if (values.name === 'DowloadCategory' && values.content !== null) {
                return (
                  <DowloadCategory
                    key={index}
                    id={values.id}
                    optionWidth={JSON.parse(values.content).optionWidth}
                  />
                );
              }
              if (values.name === 'OtherNews' && values.content !== null) {
                return <OtherNews key={index} data={JSON.parse(values.content)} id={values.id} />;
              }
              if (values.name === 'Comment' && values.content !== null) {
                return <Comment data={JSON.parse(values.content)} id={values.id} key={index} />;
              }
              if (values.name === 'DownloadFile' && values.content !== null) {
                return (
                  <ListDowloadFIle
                    type={Number(JSON.parse(values.content).type)}
                    optionWidth={Number(JSON.parse(values.content).optionWidth)}
                    search
                    id={values.id}
                    key={index}
                  />
                );
              }
              if (values.name === 'DownloadVideo' && values.content !== null) {
                return (
                  <ListDowloadVideo
                    optionWidth={Number(JSON.parse(values.content).optionWidth)}
                    type={Number(JSON.parse(values.content).type)}
                    id={values.id}
                    key={index}
                  />
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
                return (
                  <SMEIntro
                    id={values.id}
                    key={index}
                    optionWidth={Number(JSON.parse(values.content).optionWidth)}
                  />
                );
              }
              if (values.name === 'Form Step' && values.content !== null) {
                return (
                  <FormStep
                    key={index}
                    pageId={pageId}
                    data={JSON.parse(values.content)}
                    id={values.id}
                  />
                );
              }
              if (values.name === 'Banner' && values.content !== null) {
                return <Banner key={index} data={JSON.parse(values.content)} id={values.id} />;
              }
              if (values.name === 'Bảng tỷ giá' && values.content !== null) {
                return <TableRate key={index} data={JSON.parse(values.content)} id={values.id} />;
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
