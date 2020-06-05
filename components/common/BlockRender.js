import React from 'react';
import {
  Icon,
  Images,
  // Post,
  Product,
  Question,
  Repeat,
  // SingerPost,
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
import UserManual from '../block/UserManual';

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
              if (values.content !== null) {
                switch (values.name) {
                  case 'Block Icon':
                    return <Icon id={values.id} data={JSON.parse(values.content)} key={index} />;
                  case 'Block Images':
                    return <Images id={values.id} data={JSON.parse(values.content)} key={index} />;
                  case 'Block News':
                    return (
                      <News
                        type={JSON.parse(values.content).type}
                        optionWidth={JSON.parse(values.content).optionWidth}
                        data={JSON.parse(values.content)}
                        dataBlock={values}
                        key={index}
                        id={values.id}
                        pageId={pageId}
                      />
                    );
                  case 'NewCard':
                    return (
                      <NewCard
                        optionWidth={JSON.parse(values.content).optionWidth}
                        data={JSON.parse(values.content)}
                        key={index}
                        id={values.id}
                      />
                    );
                  case 'Installment Payment System':
                    return (
                      <TablePayment
                        id={values.id}
                        data={JSON.parse(values.content)}
                        key={index}
                        optionWidth={JSON.parse(values.content).optionWidth}
                      />
                    );
                  case 'Pages':
                    return <Pages id={values.id} data={JSON.parse(values.content)} key={index} />;
                  case 'Form đăng kí':
                    return (
                      <Form
                        id={values.id}
                        pageId={pageId}
                        data={JSON.parse(values.content)}
                        key={index}
                      />
                    );
                  case 'Category-mini-wtithtab':
                    return <MiniTab id={values.id} data={JSON.parse(values.content)} key={index} />;
                  case 'Card':
                    return (
                      <Card
                        id={values.id}
                        data={JSON.parse(values.content)}
                        key={index}
                        type={JSON.parse(values.content).type}
                        optionWidth={JSON.parse(values.content).optionWidth}
                      />
                    );
                  case 'Table':
                    return (
                      <Repeat
                        data={JSON.parse(values.content)}
                        type={JSON.parse(values.content).type}
                        optionWidth={JSON.parse(values.content).optionWidth}
                        key={index}
                        id={values.id}
                      />
                    );
                  case 'Download':
                    return (
                      <Download
                        data={JSON.parse(values.content)}
                        type={JSON.parse(values.content).type}
                        key={index}
                        id={values.id}
                      />
                    );
                  case 'Product':
                    return <Product data={JSON.parse(values.content)} id={values.id} key={index} />;
                  case 'Question':
                    return (
                      <Question data={JSON.parse(values.content)} id={values.id} key={index} />
                    );
                  case 'Category':
                    return (
                      <Pages
                        type={JSON.parse(values.content).type}
                        optionWidth={JSON.parse(values.content).optionWidth}
                        data={JSON.parse(values.content)}
                        key={index}
                        id={values.id}
                      />
                    );
                  case 'Sản phẩm nổi bật':
                    return (
                      <TagProduct
                        optionWidth={JSON.parse(values.content).optionWidth}
                        data={JSON.parse(values.content)}
                        key={index}
                        id={values.id}
                      />
                    );
                  case 'MenuIntro':
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
                  case 'Lãnh Đạo':
                    return (
                      <DetailPerson data={JSON.parse(values.content)} key={index} id={values.id} />
                    );
                  case 'Công cụ tính':
                    return (
                      <Tools content={JSON.parse(values.content)} key={index} id={values.id} />
                    );
                  case 'About':
                    return <About data={JSON.parse(values.content)} key={index} id={values.id} />;
                  case 'Investors':
                    return (
                      <Investors key={index} data={JSON.parse(values.content)} id={values.id} />
                    );
                  case 'Contact':
                    return <Contact data={JSON.parse(values.content)} key={index} id={values.id} />;
                  case 'Transaction':
                    return (
                      <Transaction data={JSON.parse(values.content)} key={index} id={values.id} />
                    );
                  case 'DowloadCategory':
                    return (
                      <DowloadCategory
                        key={index}
                        id={values.id}
                        optionWidth={JSON.parse(values.content).optionWidth}
                      />
                    );
                  case 'OtherNews':
                    return (
                      <OtherNews key={index} data={JSON.parse(values.content)} id={values.id} />
                    );
                  case 'Comment':
                    return <Comment data={JSON.parse(values.content)} id={values.id} key={index} />;
                  case 'DownloadFile':
                    return (
                      <ListDowloadFIle
                        data={JSON.parse(values.content)}
                        type={Number(JSON.parse(values.content).type)}
                        optionWidth={Number(JSON.parse(values.content).optionWidth)}
                        search
                        id={values.id}
                        key={index}
                      />
                    );
                  case 'DownloadVideo':
                    return (
                      <ListDowloadVideo
                        data={JSON.parse(values.content)}
                        optionWidth={Number(JSON.parse(values.content).optionWidth)}
                        type={Number(JSON.parse(values.content).type)}
                        id={values.id}
                        key={index}
                      />
                    );
                  case 'TabQuestions':
                    return (
                      <TabQuestions data={JSON.parse(values.content)} id={values.id} key={index} />
                    );
                  case 'CustomTab':
                    return (
                      <CustomTab data={JSON.parse(values.content)} id={values.id} key={index} />
                    );
                  case 'BlockSMEIntro':
                    return (
                      <SMEIntro
                        id={values.id}
                        key={index}
                        optionWidth={Number(JSON.parse(values.content).optionWidth)}
                      />
                    );
                  case 'Form Step':
                    return (
                      <FormStep
                        key={index}
                        pageId={pageId}
                        data={JSON.parse(values.content)}
                        id={values.id}
                      />
                    );
                  case 'Banner':
                    return <Banner key={index} data={JSON.parse(values.content)} id={values.id} />;
                  case 'Bảng tỷ giá':
                    return (
                      <TableRate
                        key={index}
                        data={JSON.parse(values.content)}
                        id={values.id}
                        search
                      />
                    );
                  case 'Hướng dẫn sử dụng':
                    return (
                      <UserManual key={index} data={JSON.parse(values.content)} id={values.id} />
                    );
                  default:
                    return null;
                }
              } else {
                return null;
              }
            }
          )}
        </>
      )}
    </>
  );
}

BlockRender.propTypes = propTypes;

export default BlockRender;
