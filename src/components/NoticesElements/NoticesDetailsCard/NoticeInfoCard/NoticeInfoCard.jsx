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
// import useAuth from '../../../../hooks/useAuth';
// import {
//   selectNotices,
//   // selectFavoriteNotices,
//   selectNoticesObj,

import { useState } from 'react';
// import { selectFavoriteList } from '../../../redux/favorite/selectors';
// import { deletefavoriteNotice } from '../../../redux/notices/noticesSlice';
// import { selectUser } from '../../../../redux/auth/selectors';
// import { display, height } from '@mui/system';
import { setSelectedNotice } from '../../../../redux/notices/noticesSlice';
// import { useLocation } from 'react-router-dom';
import { deleteNotices } from '../../../../redux/notices/operations ';
import Spinner from '../../../Spinner/Spinner';
import { selectUser } from '../../../../redux/auth/selectors';
import { selectFavoriteObj } from '../../../../redux/favorite/selectors';
import useAuth from '../../../../hooks/useAuth.js';
import {
  getIsOwnNotice,
  getIsFavoriteNotice,
} from '../../../../helpers/currentHelpers';
import {
  removeFromFavorite,
  addToFavorite,
} from '../../../../redux/favorite/operations ';
import { selectNoticesObj } from '../../../../redux/notices/selectors';
import { labelNotice } from '../../../../helpers/noticesHelpers';
const NoticeInfoCard = () => {
  // const { _id: user } = useSelector(selectUser);
  const dispatch = useDispatch();

  const { isLoggedIn } = useAuth();
  const { selectedNotice } = useSelector(selectNoticesObj);
  const { _id: userId } = useSelector(selectUser);
  const { favoriteList, isLoading } = useSelector(selectFavoriteObj);

  const noticeReduced = labelNotice(
    getIsFavoriteNotice(favoriteList, getIsOwnNotice(userId, selectedNotice))
  );

  ////////////////////////////////////////////////////////////////////
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
  console.log('favorite', favorite);
  console.log('Isfavorite', Isfavorite);

  // const onFavoriteToggle = (_id, favorite) => {
  //   if (favorite) {
  //     dispatch(removeFromFavorite(_id));

  //     return;
  //   }
  //   dispatch(addToFavorite(_id));
  // };
  const onToggle = () => {
    setIsfavorite(prev => !prev);
    if (Isfavorite) {
      dispatch(removeFromFavorite(_id));

      return;
    }
    dispatch(addToFavorite(_id));
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
            onClick={() => {
              dispatch(deleteNotices(_id), dispatch(setSelectedNotice()));
            }}
          >
            Delete
            <Delete />
          </NoticesButtonDelete>
        )}
        {!Isfavorite && isLoggedIn && (
          <NoticesButtonFavorite
            onClick={onToggle}
            // onClick={() => onFavoriteToggle(_id, Isfavorite)}
          >
            Add to
            <HeartFavorite />
          </NoticesButtonFavorite>
        )}

        {Isfavorite && isLoggedIn && (
          <NoticesButtonFavorite
            // onClick={() => onFavoriteToggle(_id, Isfavorite)}
            onClick={onToggle}
          >
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
