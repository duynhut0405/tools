import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { map } from 'lodash';
import { Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
// import Logo from '../../public/images/svg/logo.svg'
import Logo from '../../public/images/logo.svg';
const propTypes = {
  data: Proptypes.object.isRequired,
  id: Proptypes.number,
  type: Proptypes.string
};

function DetailPerson({ data }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <main id="main" className="sec-tb ">
      <div className="container">
        <div className="sec-b">
          <h2 className="text-center h1">{data.title}</h2>
          <div className="list-8 row list-item">
            {map(data.listDetail, (item, index) => (
              <React.Fragment>
                <div className="col-md-3" key={index}>
                  <a
                    onClick={() => {
                      setModal(!modal);
                    }}
                    className={`item efch-${index + 2} ef-img-l equal`}
                  >
                    <div className="img tRes">
                      <img className=" loaded loaded" data-lazy-type="image" src={item.image} />
                    </div>
                    <div className="divtext">
                      <h4 className="title line2">{item.name}</h4>
                      <div className="desc line2">{item.position}</div>
                    </div>
                  </a>
                  <Modal isOpen={modal} toggle={toggle} size="lg" centered={true}>
                    <ModalHeader toggle={toggle}>
                      <img className=" loaded loaded" data-lazy-type="image" src={Logo} />
                    </ModalHeader>
                    <ModalBody>
                      <Row>
                        <Col>
                          <div className="img tRes">
                            <img
                              className=" loaded loaded"
                              data-lazy-type="image"
                              src={item.image}
                            />
                          </div>
                        </Col>
                        <Col>
                          <div className="divtext">
                            <h4 className="title line2" style={{ color: '#141ed2' }}>
                              {item.name}
                            </h4>
                            <div className="desc line2">{item.position}</div>
                          </div>
                          {ReactHtmlParser(item.description)}
                        </Col>
                      </Row>
                    </ModalBody>
                  </Modal>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

DetailPerson.propTypes = propTypes;

export default DetailPerson;
