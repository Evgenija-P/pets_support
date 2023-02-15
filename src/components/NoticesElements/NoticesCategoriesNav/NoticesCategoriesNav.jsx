import { toast } from 'react-toastify';
import { optionsToast } from '../../..//styles/stylesLayout';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import NoticesAuthNav from '../NoticesAuthNav';
import NoticesUserNav from '../NoticesUserNav';
import AddNoticeButton from '../AddNoticeButton';
import Modal from '../../Modal';

import { NoticesCategoriesContainer } from './NoticesCategoriesNav.styled';

const NoticesCategoriesNav = ({ notices }) => {
  const { isLoggedIn } = useAuth();
  const [isAddNoticeModalShown, setisAddNoticeModalShown] = useState(false);
  const [, setIsUnauthorizeModalShown] = useState(false);

  function toggleAddNoticeModal() {
    setisAddNoticeModalShown(prevState => !prevState);
  }

  function toggleUnauthorizedModal() {
    setIsUnauthorizeModalShown(prevState => !prevState);

    if (!isLoggedIn) {
      toast.warn('You must login or register to add pets', {
        optionsToast,
      });
      return;
    }
  }

  return (
    <NoticesCategoriesContainer>
      {isLoggedIn ? (
        <NoticesAuthNav notices={notices} />
      ) : (
        <NoticesUserNav notices={notices} />
      )}
      {isAddNoticeModalShown && (
        <Modal
          type="addNotice"
          title="Add pet"
          onClose={toggleAddNoticeModal}
        />
      )}
      <AddNoticeButton
        onClick={isLoggedIn ? toggleAddNoticeModal : toggleUnauthorizedModal}
      />
    </NoticesCategoriesContainer>
  );
};

export default NoticesCategoriesNav;
