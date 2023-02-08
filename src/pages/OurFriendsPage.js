import { Helmet } from 'react-helmet';
import React, { useState } from 'react';
import Modal from '../components/Modal';
import FriendsList from '../components/Friends/FriendsList/FriendsList';

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
      <FriendsList />

      {showModal && (
        <Modal onClose={toggleModal} title={'add pets'} type={'notice'}>
          children
        </Modal>
      )}
    </div>
  );
};
export default OurFriendsPage;
