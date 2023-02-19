import {
  NoticesBox,
  NoticesCategory,
  NoticesImage,
  NoticesInfo,
  NoticesTitle,
  NoticesText,
  NoticesComment,
  NoticesTag,
  ButtonBlock,
  NoticesButtonFavorite,
  NoticesButtonContact,
  Notices,
  NoticesButtonDelete,
  NotiseColumn,
  NoticesLink,
} from './NoticesDetailsCard.styled';
import { toast } from 'react-toastify';
import { optionsToast } from '../../../styles/stylesLayout';
import React from 'react';
import { onFavoriteNotAuth } from '../../../helpers/noticesHelpers';
import { ReactComponent as HeartFavorite } from '../../../img/icons/heartFavorite.svg';
import { ReactComponent as Delete } from '../../../img/icons/delete.svg';
import defaultPhoto from '../../../img/default.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { setSelectedNotice } from '../../../redux/notices/noticesSlice';
import { deleteNotices } from '../../../redux/notices/operations ';
// import Spinner from '../../Spinner/Spinner';
import { selectUser } from '../../../redux/auth/selectors';
import useAuth from '../../../hooks/useAuth.js';
import {
  getIsOwnNotice,
  getIsFavoriteNotice,
} from '../../../helpers/currentHelpers';
import {
  addToFavoriteNotices,
  removeFromFavoriteNotices,
} from '../../../redux/notices/operations ';
import { selectNoticesObj } from '../../../redux/notices/selectors';
import { labelNotice } from '../../../helpers/noticesHelpers';

import Modal from '../../Modal/Modal';
const NoticeInfoCard = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const { selectedNotice, favoriteNoticesList, isLoading } =
    useSelector(selectNoticesObj);
  const { _id: userId } = useSelector(selectUser);

  const noticeReduced = labelNotice(
    getIsFavoriteNotice(
      favoriteNoticesList,
      getIsOwnNotice(userId, selectedNotice)
    )
  );

  const {
    _id,
    petImageURL,
    birthdate,
    breed,
    categoryName,
    comments,
    email,
    name,
    phone,
    sex,
    title,
    location,
    own,
    favorite,
  } = noticeReduced;
  const callNumber = 'tel:' + phone;
  const emailLink = `mailto:` + email;

  const [Isfavorite, setIsfavorite] = useState(favorite);

  const onToggle = async () => {
    if (Isfavorite) {
      await dispatch(removeFromFavoriteNotices(_id));
      setIsfavorite(prev => !prev);
      toast.success('Removed from favorites', optionsToast);

      return;
    }
    await dispatch(addToFavoriteNotices(_id));
    setIsfavorite(prev => !prev);
    toast.success('Good choice, added to favorites', optionsToast);
  };
  const dialogToggle = () => {
    setOpenDialog(prev => !prev);
  };
  const handleDelete = async () => {
    await dispatch(deleteNotices(_id));

    await dispatch(setSelectedNotice());

    dialogToggle();
    toast.success('Notice successfully deleted...', optionsToast);
  };
  return (
    <>
      <NoticesBox>
        <NoticesCategory>
          <span>{categoryName}</span>
        </NoticesCategory>
        <NoticesImage
          src={petImageURL ? petImageURL : defaultPhoto}
          alt={title}
        />
        <NoticesInfo>
          <NoticesTitle> {title} </NoticesTitle>

          <Notices>
            <NotiseColumn>
              <NoticesTag>Name: </NoticesTag>
              <NoticesText>{name}</NoticesText>
            </NotiseColumn>
            <NotiseColumn>
              <NoticesTag>Birthday: </NoticesTag>
              <NoticesText>{birthdate}</NoticesText>
            </NotiseColumn>
            <NotiseColumn>
              <NoticesTag>Breed: </NoticesTag>
              <NoticesText>{breed}</NoticesText>
            </NotiseColumn>
            <NotiseColumn>
              <NoticesTag>Place: </NoticesTag>
              <NoticesText>{location}</NoticesText>
            </NotiseColumn>
            <NotiseColumn>
              <NoticesTag>The sex: </NoticesTag>
              <NoticesText>{sex}</NoticesText>
            </NotiseColumn>
            <NotiseColumn>
              <NoticesTag>Email: </NoticesTag>

              <NoticesText>
                <NoticesLink href={emailLink} target="_blank" rel="noreferrer">
                  {email}
                </NoticesLink>
              </NoticesText>
            </NotiseColumn>
            <NotiseColumn>
              <NoticesTag>Phone: </NoticesTag>
              <NoticesText>
                <NoticesLink href={callNumber}>{phone}</NoticesLink>
              </NoticesText>
            </NotiseColumn>
          </Notices>
        </NoticesInfo>
      </NoticesBox>

      <NoticesComment>
        <strong>Comments: </strong> {comments}
      </NoticesComment>
      <ButtonBlock>
        {own && (
          <NoticesButtonDelete disabled={isLoading} onClick={dialogToggle}>
            Delete
            <Delete />
          </NoticesButtonDelete>
        )}

        {!Isfavorite && isLoggedIn && (
          <NoticesButtonFavorite disabled={isLoading} onClick={onToggle}>
            Add to
            <HeartFavorite />
          </NoticesButtonFavorite>
        )}

        {Isfavorite && isLoggedIn && (
          <NoticesButtonFavorite onClick={onToggle}>
            Remove from
            <HeartFavorite />
          </NoticesButtonFavorite>
        )}
        {!isLoggedIn && (
          <NoticesButtonFavorite onClick={onFavoriteNotAuth}>
            Add to
            <HeartFavorite />
          </NoticesButtonFavorite>
        )}
        <NoticesButtonContact href={callNumber}>Contact</NoticesButtonContact>
      </ButtonBlock>
      {openDialog && (
        <Modal
          type={'deleteDialog'}
          title={'Deleting notice'}
          onClose={dialogToggle}
          onDelete={handleDelete}
        ></Modal>
      )}
    </>
  );
};

export default NoticeInfoCard;
