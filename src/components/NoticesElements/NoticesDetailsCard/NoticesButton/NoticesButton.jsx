import { NoticesButton } from './NoticesButton.styled';
import React, { useState } from 'react';

import Modal from '../../../Modal';
import NoticesDetailsCard from '../NoticesDetaisCard';

const LearnMoreButton = noticesId => {
  const [showModal, setShowModal] = useState(false);

  function toggleModal(e) {
    setShowModal(!showModal);
  }

  return (
    <div>
      <NoticesButton onClick={toggleModal}>Learn More</NoticesButton>
      {showModal && (
        <Modal onClose={toggleModal} type={'info'}>
          <NoticesDetailsCard />
        </Modal>
      )}
    </div>
  );
};

export default LearnMoreButton;
