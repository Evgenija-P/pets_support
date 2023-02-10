import defaultPhoto from '../../../../img/default.jpg';
import {
  NoticesInfoContainer,
  NoticesBox,
  NoticesImage,
  NoticesInfo,
  NoticesTitle,
  NoticesText,
  NoticesTag,
  ButtonBlock,
  NoticesButton,
} from './NoticeInfoCard.styled';
// import notFoundNoticesImage from '../../../img/notFoundNoticesImage.jpg';

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
        <NoticesImage
          src={petImageURL ? petImageURL : defaultPhoto}
          alt={title}
        />
        <NoticesInfo>
          <NoticesTitle>Cute dog looking for a home {title}</NoticesTitle>
          <NoticesText>
            <NoticesTag>Name: </NoticesTag> {name}
          </NoticesText>
          <NoticesText>
            <NoticesTag>Birthday: </NoticesTag> {birthdate}
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

      <NoticesText>
        Comments: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Vero, fugiat minima! Quod repudiandae veniam a. Voluptatum, quam
        delectus incidunt aspernatur laboriosam, obcaecati a id ut quidem quia
        porro itaque odit. {comments}
      </NoticesText>

      <ButtonBlock>
        <NoticesButton>Add to</NoticesButton>
        <NoticesButton>Contact</NoticesButton>
      </ButtonBlock>
    </NoticesInfoContainer>
  );
};

export default NoticeInfoCard;
