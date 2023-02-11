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
        {own && (
          <NoticesButton
            onClick={() => {
              dispatch(deleteNotices(_id));
              dispatch(setCurrentNotices());
            }}
          >
            Delete
          </NoticesButton>
        )}
        <NoticesButton>Add to</NoticesButton>
        <NoticesButton>Contact</NoticesButton>
      </ButtonBlock>
    </NoticesInfoContainer>
  );
};

export default NoticeInfoCard;
