//
//
// ВНИМАНИЕ!
//
// компонент, который использует Modal, должен:
// - использовать стейт const [showModal, setShowModal] = useState(false);
// - использовать ф-цию function toggleModal() {setShowModal(!showModal);}
// - передать в пропсах onClose = { toggleModal }. Использовать сразу сетстейт нельзя, много рендеров.

// срабатывает по нажатию на элемент <element onClick={toggleModal}></element>
// рендер по условию {showModal && <Modal onClose={toggleModal}>children</Modal>;}

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalWrapper, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    function keyDown(e) {
      if (e.code === 'Escape' || e.currentTarget === e.target) {
        onClose();
      }
    }
    window.addEventListener('keydown', keyDown);
    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  }, [onClose]);

  return createPortal(
    <Overlay onClick={onClose}>
      <ModalWrapper>
        <p>{children}</p>
      </ModalWrapper>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
