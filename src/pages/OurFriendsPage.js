import { Helmet } from 'react-helmet';
import React, { useState } from 'react';
import Modal from '../components/Modal/Modal.jsx';

const OurFriendsPage = () => {
  const [showModal, setShowModal] = useState(true);

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
        <Modal onClose={toggleModal} title={'add pets'} type={'general'}>
          children
        </Modal>
      )}
    </div>
  );
};
export default OurFriendsPage;
