//
//
// ВНИМАНИЕ!
//
// компонент, который использует Modal, должен:
// - использовать стейт const [showModal, setShowModal] = useState(false);
// - использовать ф-цию function toggleModal() {setShowModal(!showModal);}
// - передать в пропсах:
// - onClose = { toggleModal }.Использовать сразу сетстейт нельзя, много рендеров.
// - title={''} - заголовок модалки
// - type={''} в пропс type передать 'notice' для модалки с объявлением животного и 'user' для авторизации / регистрации (у них другая стилизация). в остальных случаях type={'general'}
// общий вид такой Modal onClose={toggleModal} title={'add pets'} type={'notice'}

// срабатывает по нажатию на элемент <element onClick={toggleModal}></element>
// рендер по условию {showModal && <Modal onClose={toggleModal}>children</Modal>;}

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { RemoveScroll } from 'react-remove-scroll';

import { Overlay } from './Modal.styled';
import ModalGeneral from './ModalGeneral/ModalGeneral';
import ModalNotice from './ModalNotice/ModalNotice';
import ModalUser from './ModalUser/ModalUser';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose, title, type }) => {
  console.log(type);
  useEffect(() => {
    function keyDown(e) {
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
        {type === 'notice' && (
          <ModalNotice onClose={onClose}>{children}</ModalNotice>
        )}
        {type === 'user' && (
          <ModalUser onClose={onClose} title={title}>
            {children}
          </ModalUser>
        )}
        {type === 'general' && (
          <ModalGeneral onClose={onClose} title={title}>
            {children}
          </ModalGeneral>
        )}
      </Overlay>
    </RemoveScroll>,
    modalRoot
  );
};

export default Modal;
