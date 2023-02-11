import useAuth from '../../../hooks/useAuth';

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import NoticesAuthNav from '../NoticesAuthNav';
import NoticesUserNav from '../NoticesUserNav';
import AddNoticeButton from '../AddNoticeButton';
import Modal from '../../Modal';

import { NoticesCategoriesContainer } from './NoticesCategoriesNav.styled';

const NoticesCategoriesNav = ({ notices }) => {
  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!category) {
      navigate('/notices/sell');
    }
  }, [category, navigate]);

  const { isLoggedIn } = useAuth();
  const [isAddNoticeModalShown, setisAddNoticeModalShown] = useState(false);
  const [, setIsUnauthorizeModalShown] = useState(false);

  function toggleAddNoticeModal() {
    setisAddNoticeModalShown(prevState => !prevState);
  }
  function toggleUnauthorizedModal() {
    setIsUnauthorizeModalShown(prevState => !prevState);
  }

  console.log('isLoggedIn', isLoggedIn);

  return (
    <NoticesCategoriesContainer>
      <AddNoticeButton
        onClick={isLoggedIn ? toggleAddNoticeModal : toggleUnauthorizedModal}
      />
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
    </NoticesCategoriesContainer>
  );
};

export default NoticesCategoriesNav;
