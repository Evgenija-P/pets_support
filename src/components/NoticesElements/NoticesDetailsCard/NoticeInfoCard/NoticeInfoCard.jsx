import {
  NoticesInfoContainer,
  NoticesBox,
  NoticesCategory,
  NoticesImage,
  NoticesInfo,
  NoticesTitle,
  NoticesText,
  NoticesComment,
  NoticesTag,
  ButtonBlock,
  NoticesButton,
  HeartIcon,
} from './NoticeInfoCard.styled';

import { ReactComponent as HeartFavorite } from '../../../../img/icons/heartFavorite.svg';
import defaultPhoto from '../../../../img/default.jpg';

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
  return (
    <NoticesInfoContainer>
      <NoticesBox>
        <NoticesCategory>
          <span>{categoryName}</span>
        </NoticesCategory>
        <NoticesImage
          src={petImageURL ? petImageURL : defaultPhoto}
          alt={title}
        />
        <NoticesInfo>
          <NoticesTitle>Cute dog looking for a home {title}</NoticesTitle>
          <NoticesText>
            <NoticesTag>Name: </NoticesTag> Tim {name}
          </NoticesText>
          <NoticesText>
            <NoticesTag>Birthday: </NoticesTag> 10 february {birthdate}
          </NoticesText>
          <NoticesText>
            <NoticesTag>Breed: </NoticesTag> {breed}
          </NoticesText>
          <NoticesText>
            <NoticesTag>Place: </NoticesTag> {location}
          </NoticesText>
          <NoticesText>
            <NoticesTag>The sex: </NoticesTag> {sex}
          </NoticesText>
          <NoticesText>
            <NoticesTag>Email: </NoticesTag> {email}
          </NoticesText>
          <NoticesText>
            <NoticesTag>Phone: </NoticesTag> {phone}
          </NoticesText>
        </NoticesInfo>
      </NoticesBox>

      <NoticesComment>
        <strong>Comments: </strong> Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Vero, fugiat minima! Quod repudiandae veniam a.
        Voluptatum, quam delectus incidunt aspernatur laboriosam, obcaecati a id
        ut quidem quia porro itaque odit. {comments}
      </NoticesComment>

      <ButtonBlock>
        <NoticesButton>
          Add to
          <HeartIcon>
            <HeartFavorite />
          </HeartIcon>
        </NoticesButton>
        <NoticesButton>Contact</NoticesButton>
      </ButtonBlock>
    </NoticesInfoContainer>
  );
};

export default NoticeInfoCard;
