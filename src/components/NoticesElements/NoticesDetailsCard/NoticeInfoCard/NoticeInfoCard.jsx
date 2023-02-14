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
} from './NoticeInfoCard.styled';

import React from 'react';
import { onFavoriteNotAuth } from '../../../../helpers/noticesHelpers';
import { ReactComponent as HeartFavorite } from '../../../../img/icons/heartFavorite.svg';
import { ReactComponent as Delete } from '../../../../img/icons/delete.svg';
import defaultPhoto from '../../../../img/default.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { setSelectedNotice } from '../../../../redux/notices/noticesSlice';
import { deleteNotices } from '../../../../redux/notices/operations ';
import Spinner from '../../../Spinner/Spinner';
import { selectUser } from '../../../../redux/auth/selectors';
import useAuth from '../../../../hooks/useAuth.js';
import {
  getIsOwnNotice,
  getIsFavoriteNotice,
} from '../../../../helpers/currentHelpers';
import {
  addToFavoriteNotices,
  removeFromFavoriteNotices,
} from '../../../../redux/notices/operations ';
import { selectNoticesObj } from '../../../../redux/notices/selectors';
import { labelNotice } from '../../../../helpers/noticesHelpers';
const NoticeInfoCard = () => {
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
  const [Isfavorite, setIsfavorite] = useState(favorite);

  const onToggle = () => {
    setIsfavorite(prev => !prev);
    if (Isfavorite) {
      dispatch(removeFromFavoriteNotices(_id));

      return;
    }
    dispatch(addToFavoriteNotices(_id));
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
              <NoticesText>{email}</NoticesText>
            </NotiseColumn>
            <NotiseColumn>
              <NoticesTag>Phone: </NoticesTag>
              <NoticesText>{phone}</NoticesText>
            </NotiseColumn>
          </Notices>
        </NoticesInfo>
      </NoticesBox>

      <NoticesComment>
        <strong>Comments: </strong> {comments}
      </NoticesComment>
      {isLoading && <Spinner />}
      <ButtonBlock>
        {own && (
          <NoticesButtonDelete
            disabled={isLoading}
            onClick={() => {
              dispatch(deleteNotices(_id), dispatch(setSelectedNotice()));
            }}
          >
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
    </>
  );
};

export default NoticeInfoCard;
