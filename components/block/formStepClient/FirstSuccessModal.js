import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import WrapModal from './WrapModal';
import Tab2 from './componentModal/Tab2';
import Tab1 from './componentModal/Tab1';
import { Modal, ModalBody } from 'reactstrap';
import { searchBranchesService, getProvinceService } from '../../../services/map';

const FirstSuccessModal = props => {
  const {
    showModalContinue,
    modalContinue,
    showModal,
    closeModal,
    modal,
    formState,
    setFormState
  } = props;
  const [branchs, setBranchs] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [selected, setSelected] = useState('name1');

  useEffect(() => {
    const query = {
      districtCity: null,
      networkCategory: 'transaction',
      provinceCity: null
    };
    searchBranchesService(query).then(res => {
      setBranchs(res.data);
    });

    getProvinceService().then(res => {
      setProvinces(res.data);
    });
  }, []);

  const handleSelect = e => {
    setSelected(e.target.value);
  };
  return (
    <Modal isOpen={modal} toggle={showModal}>
      <ModalBody>
        <WrapModal
          id="firstSuccessModal"
          flag={true}
          showModalContinue={showModalContinue}
          modalContinue={modalContinue}
          closeModal={closeModal}
        >
          <div className="col-12 radios c-modal-tabs1-option-js">
            <label className="radio font-18">
              <strong>Chọn chi nhánh</strong>
              <input
                type="radio"
                name="branch"
                required={true}
                value="name1"
                onChange={handleSelect}
                defaultChecked="true"
                checked={selected === 'name1'}
              />
              <span></span>
            </label>

            <label className="radio font-18">
              <strong>Chọn cán bộ tín dụng</strong>
              <input
                type="radio"
                name="branch"
                required={true}
                value="name2"
                checked={selected === 'name2'}
                onChange={handleSelect}
              />
              <span></span>
            </label>
          </div>
          <div className="tab-100 c-modal-tabs1-js">
            {selected === 'name1' && (
              <Tab1
                branchs={branchs}
                setBranchs={setBranchs}
                provinces={provinces}
                formState={formState}
                setFormState={setFormState}
              />
            )}
            {selected === 'name2' && <Tab2 />}
          </div>
        </WrapModal>
      </ModalBody>
    </Modal>
  );
};

FirstSuccessModal.propTypes = {
  closeModal: PropTypes.func,
  modal: PropTypes.bool,
  modalContinue: PropTypes.bool,
  showModal: PropTypes.func,
  showModalContinue: PropTypes.func,
  formState: PropTypes.object,
  setFormState: PropTypes.func
};

export default FirstSuccessModal;
