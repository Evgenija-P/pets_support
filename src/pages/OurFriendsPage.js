import { Helmet } from 'react-helmet';
import React, { useState } from 'react';
import Modal from '../components/Modal/Modal';

const OurFriendsPage = () => {
  const [showModal, setShowModal] = useState(false);

  function toggleModal(e) {
    // if (e.currentTarget === e.target) {
    setShowModal(!showModal);
    //   console.log('изменили состояние');
    // }
    // console.log('open modal');
    // if (e.currentTarget !== e.target) {
    //   console.log('не совпадают события');
    // }
  }

  return (
    <div>
      <Helmet>
        <title>OurFriendsPage</title>
      </Helmet>
      <button onClick={toggleModal}>Click me!!!</button>

      {showModal && <Modal onClose={toggleModal}>children</Modal>}
    </div>
  );
};
export default OurFriendsPage;
