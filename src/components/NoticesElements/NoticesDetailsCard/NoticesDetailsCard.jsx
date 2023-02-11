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
} from './NoticesDetailsCard.styled';

import React from 'react';

import { ReactComponent as HeartFavorite } from '../../../img/icons/heartFavorite.svg';
import defaultPhoto from '../../../img/default.jpg';

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
}) => {
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
