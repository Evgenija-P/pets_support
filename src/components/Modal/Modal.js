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
import { RemoveScroll } from 'react-remove-scroll';
import { MdClose } from 'react-icons/md';

import { colors } from '../../styles/stylesLayout';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    function keyDown(e) {
      console.log(e.currentTarget);
      if (e.code !== 'Escape') {
        return;
      }
      onClose();
    }
    window.addEventListener('keydown', keyDown);
    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  }, [onClose]);

  return createPortal(
    <RemoveScroll>
      <Overlay>
        <ModalWrapper>
          <button onClick={onClose}>
            <MdClose size={24} color={colors.black} />
          </button>

          <p>{children}</p>
        </ModalWrapper>
      </Overlay>
    </RemoveScroll>,
    modalRoot
  );
};

export default Modal;
