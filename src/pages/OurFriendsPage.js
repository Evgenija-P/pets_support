import { Helmet } from 'react-helmet';
import React, { useState } from 'react';
import Modal from '../components/Modal';

const OurFriendsPage = () => {
  const [showModal, setShowModal] = useState(false);

  function toggleModal(e) {
    setShowModal(!showModal);
  }

  return (
    <div>
      <Helmet>
        <title>OurFriendsPage</title>
      </Helmet>
      <button onClick={toggleModal}>Click me!!!</button>

      {showModal && (
        <Modal onClose={toggleModal} title={'add pets'} type={'notice'}>
          children
        </Modal>
      )}
    </div>
  );
};
export default OurFriendsPage;
