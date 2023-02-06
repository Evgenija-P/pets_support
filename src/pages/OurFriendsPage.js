import { Helmet } from 'react-helmet';
import React, { useState } from 'react';
import Modal from '../components/Modal';
// import datas from '../data/sponsors.json';

const OurFriendsPage = () => {
  const [showModal, setShowModal] = useState(false);

  function toggleModal(e) {
    setShowModal(!showModal);
  }

  // console.log(datas);

  return (
    <div>
      <Helmet>
        <title>OurFriendsPage</title>
      </Helmet>
      <button onClick={toggleModal}>Click me!!!</button>
      {/* <div>
        {datas.map(({ title, address, email }) => (
          <li>{title}</li>
        ))}
      </div> */}

      {showModal && (
        <Modal onClose={toggleModal} title={'add pets'} type={'notice'}>
          children
        </Modal>
      )}
    </div>
  );
};
export default OurFriendsPage;
