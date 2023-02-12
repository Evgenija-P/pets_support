// ВНИМАНИЕ!
//
// компонент, который использует Modal, должен:
// - использовать стейт const [showModal, setShowModal] = useState(false);
// - использовать ф-цию function toggleModal() {setShowModal(!showModal);}

// - передать в пропсах:
// - onClose = { toggleModal }.Использовать сразу сетстейт нельзя, много рендеров.
// - title={''} - заголовок модалки
// - type={''} в пропс type передать 'info' для модалки с просмотром объявления животного, 'pet' для создания своего животного, 'notice' для создания объявления о животном. Можно передавать children из компонента, а можно сразу в нужной модалке сделать свою разметку. Решите как вам удобнее, лишнее удалите.

// общий вид такой Modal onClose={toggleModal} title={'add pets'} type={'info'}

// срабатывает по нажатию на элемент <element onClick={toggleModal}></element>
// рендер по условию {showModal && <Modal onClose={toggleModal}>children</Modal>;}

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { RemoveScroll } from 'react-remove-scroll';
import { Overlay } from './Modal.styled';
import ModalAddMyPet from './ModalAddMyPet/ModalAddMyPet';
import ModalInfo from './ModalInfo/ModalInfo';
import ModalNotice from './ModalNotice/ModalNotice';
// import NoticeInfoCard from '../NoticesElements/NoticesDetailsCard/NoticeInfoCard';

import ModalAddNotice from '../../components/Modal/ModalAddNotice';
import ModalUnauthorized from './ModalUnauthorized/ModalUnauthorized';
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
        {type === 'info' && <ModalInfo onClose={onClose}>{children}</ModalInfo>}
        {type === 'pet' && (
          <ModalAddMyPet onClose={onClose} title={title}>
            Add pet
          </ModalAddMyPet>
        )}
        {type === 'notice' && (
          <ModalNotice onClose={onClose} title={title}>
            {children}
          </ModalNotice>
        )}
        {type === 'addNotice' && (
          <ModalAddNotice onClose={onClose} title={title} />
        )}
        {type === 'unauth' && <ModalUnauthorized onClose={onClose} />}
      </Overlay>
    </RemoveScroll>,
    modalRoot
  );
};

export default Modal;
