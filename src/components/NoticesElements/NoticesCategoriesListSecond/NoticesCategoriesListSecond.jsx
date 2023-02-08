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

// import { useSelector, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useAuth from '../../../hooks/useAuth.js';
import {
  selectNotices,
  selectFavoriteNotices,
} from '../../../redux/notices/selectors';

import { selectUser } from '../../../redux/auth/selectors.js';

const NoticesCategoriesListSecond = () => {
  const noticesRaw = useSelector(selectNotices);
  const favorite = useSelector(selectFavoriteNotices);
  const user = useSelector(selectUser);
  const userFavoriteNotices = () => {
    const noticesWithFavorite = noticesRaw.map(notice => {
      if (favorite.find(fav => fav._id === notice._id)) {
        console.log('favorite', notice._id);
        return { ...notice, favorite: true };
      }
      return { ...notice, favorite: false };
    });
    // console.log('favoriteList', noticesWithFavorite);
    return noticesWithFavorite;
  };
  const noticesWithFavorite = userFavoriteNotices();

  const isOwnerNotices = () => {
    const noticesOwn = noticesWithFavorite.map(notice => {
      console.log('user._id', user);
      if (notice.owner === user._id) {
        console.log('owner', notice.owner);
        return { ...notice, isOwner: true };
      }
      return { ...notice, isOwner: false };
    });
    console.log('ownerList', noticesOwn);
    return noticesOwn;
  };
  const notices = isOwnerNotices();
  const isLogined = useAuth();
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
          favorite,
          isOwner,
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
                {favorite && isLogined && <NoticesTag>Favorite </NoticesTag>}
                {isOwner && isLogined && <NoticesTag>Favorite </NoticesTag>}
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
