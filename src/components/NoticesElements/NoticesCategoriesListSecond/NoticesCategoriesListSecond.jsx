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
  selectNotices,
  // selectFilter,
  // selectVisibleContacts,
} from '../../../redux/notices/selectors';

const NoticesCategoriesListSecond = () => {
  const notices = useSelector(selectNotices);
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
