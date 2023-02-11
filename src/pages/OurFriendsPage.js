import { Helmet } from 'react-helmet';
import React, { useState } from 'react';

import FriendsList from '../components/Friends/FriendsList/FriendsList';
import Modal from '../components/Modal/Modal';

const OurFriendsPage = () => {
  const [showModal, setShowModal] = useState(false);
  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div>
      <Helmet>
        <title>OurFriendsPage</title>
      </Helmet>
      <button onClick={toggleModal}>Open</button>
      {showModal && (
        <Modal onClose={toggleModal} type={'un'}>
          children
        </Modal>
      )}
      <FriendsList />
    </div>
  );
};
export default OurFriendsPage;
