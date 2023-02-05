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
import { ModalWrapper, Overlay, CloseButton } from './Modal.styled';
import { RemoveScroll } from 'react-remove-scroll';
import { ReactComponent as IconClose } from '../../img/icons/close_menu.svg';


const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    function keyDown(e) {
      console.log(e.code);
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

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
    return;
  }

  return createPortal(
    <RemoveScroll>
      <Overlay onClick={handleOverlayClick}>
        <ModalWrapper>
          <CloseButton type="button" onClick={onClose}>
            <IconClose />
          </CloseButton>
          <p>{children}</p>
        </ModalWrapper>
      </Overlay>
    </RemoveScroll>,
    modalRoot
  );
};

export default Modal;
