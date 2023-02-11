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
  HeartIcon,
  Tags,
  Text,
  Notices,
  NoticesButtonDelete,
} from './NoticeInfoCard.styled';

import React from 'react';

import { ReactComponent as HeartFavorite } from '../../../../img/icons/heartFavorite.svg';
import defaultPhoto from '../../../../img/default.jpg';
import { useDispatch } from 'react-redux';
// import useAuth from '../../../../hooks/useAuth';
// import {
//   selectNotices,
//   // selectFavoriteNotices,
//   selectNoticesObj,
// } from '../../../redux/notices/selectors';
// import { selectFavoriteList } from '../../../redux/favorite/selectors';
// import { deletefavoriteNotice } from '../../../redux/notices/noticesSlice';
// import { selectUser } from '../../../../redux/auth/selectors';
// import { display, height } from '@mui/system';
// import { getNoticesById } from '../../../redux/current/operations ';
// import { useLocation } from 'react-router-dom';
import { deleteNotices } from '../../../../redux/notices/operations ';
import { setCurrentNotices } from '../../../../redux/current/currentSlice';

const NoticeInfoCard = ({
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
}) => {
  // const { _id: user } = useSelector(selectUser);
  const dispatch = useDispatch();
  const callNumber = 'tel:' + phone;

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
          <NoticesTitle>Cute pet looking for a home {title}</NoticesTitle>
          <Notices>
            <Tags>
              <NoticesTag>Name: </NoticesTag>
              <NoticesTag>Birthday: </NoticesTag>
              <NoticesTag>Breed: </NoticesTag>
              <NoticesTag>Place: </NoticesTag>
              <NoticesTag>The sex: </NoticesTag>
              <NoticesTag>Email: </NoticesTag>
              <NoticesTag>Phone: </NoticesTag>
            </Tags>

            <Text>
              <NoticesText>{name}</NoticesText>
              <NoticesText>{birthdate}</NoticesText>
              <NoticesText>{breed}</NoticesText>
              <NoticesText>{location}</NoticesText>
              <NoticesText>{sex}</NoticesText>
              <NoticesText>{email}</NoticesText>
              <NoticesText>{phone}</NoticesText>
            </Text>
          </Notices>
        </NoticesInfo>
      </NoticesBox>

      <NoticesComment>
        <strong>Comments: </strong> Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Vero, fugiat minima! Quod repudiandae veniam a.
        Voluptatum, quam delectus incidunt aspernatur laboriosam, obcaecati a id
        ut quidem quia porro itaque odit. {comments}
      </NoticesComment>

      <ButtonBlock>
        {own && (
          <NoticesButtonDelete
            onClick={() => {
              dispatch(deleteNotices(_id));
              dispatch(setCurrentNotices());
            }}
          >
            Delete
          </NoticesButtonDelete>
        )}
        <NoticesButtonFavorite>
          Add to
          <HeartIcon>
            <HeartFavorite />
          </HeartIcon>
        </NoticesButtonFavorite>
        <NoticesButtonContact href={callNumber}>Contact</NoticesButtonContact>
      </ButtonBlock>
    </>
  );
};

export default NoticeInfoCard;
