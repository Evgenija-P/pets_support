import {
  NoticesList,
  NoticesItem,
  NoticesTop,
  NoticesImage,
  NoticesBadge,
  NoticesDescription,
  NoticesTitle,
  NoticesTags,
  NoticesTag,
  NoticesButton,
} from './NoticesCategoriesListSecond.styled';

import notFoundNoticesImage from '../../../img/notFoundNoticesImage.jpg';

import { useSelector, useDispatch } from 'react-redux';

import {
  selectContacts,
  // selectFilter,
  // selectVisibleContacts,
} from '../../../redux/contacts/selectors';

const NoticesCategoriesListSecond = () => {
  const notices = useSelector(selectContacts);
  return (
    <NoticesList>
      {notices.map(
        ({
          _id,
          categoryName,
          petImageURL,
          title,
          breed,
          location,
          age,
          price,
        }) => (
          <NoticesItem key={_id}>
            <NoticesTop>
              <NoticesBadge>{categoryName}</NoticesBadge>
              <NoticesImage
                src={petImageURL ? petImageURL : notFoundNoticesImage}
                alt={title}
              />
            </NoticesTop>

            <NoticesDescription>
              <NoticesTitle>{title}</NoticesTitle>

              <NoticesTags>
                <NoticesTag>Breed: {breed}</NoticesTag>
                <NoticesTag>Place: {location}</NoticesTag>
                <NoticesTag>Age: {age}</NoticesTag>
                <NoticesTag>Price: {price}$</NoticesTag>
              </NoticesTags>

              <NoticesButton>Learn More</NoticesButton>
            </NoticesDescription>
          </NoticesItem>
        )
      )}
    </NoticesList>
  );
};

export default NoticesCategoriesListSecond;
