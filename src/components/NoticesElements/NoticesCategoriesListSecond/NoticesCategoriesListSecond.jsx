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
// import GalleryPagination from '../../GalleryPagination';
import notFoundNoticesImage from '../../../img/notFoundNoticesImage.jpg';
// import { PER_PAGE } from '../../../redux/notices/operations ';
// import { useSelector, useDispatch } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import useAuth from '../../../hooks/useAuth.js';
import {
  selectNotices,
  // selectFavoriteNotices,
  // selectNoticesObj,
} from '../../../redux/notices/selectors';
// import { setPage } from '../../../redux/notices/noticesSlice';
import { selectUser } from '../../../redux/auth/selectors.js';
// import { fetchNotices } from '../../../redux/notices/operations ';
import {
  addToFavorite,
  removeFromFavorite,
} from '../../../redux/favorite/operations ';

const NoticesCategoriesListSecond = () => {
  const noticesRaw = useSelector(selectNotices);
  // const favorite = useSelector(selectFavoriteNotices);
  const user = useSelector(selectUser);

  // const { category } = useSelector(selectNoticesObj);
  const dispatch = useDispatch();
  // const { page: currentPage, totalHits } = useSelector(selectNoticesObj);

  // const userFavoriteNotices = () => {
  //   const noticesWithFavorite = noticesRaw.map(notice => {
  //     if (favorite.find(fav => fav === notice._id)) {
  //       // console.log('favorite', notice._id);
  //       return { ...notice, favorite: true };
  //     }
  //     return { ...notice, favorite: false };
  //   });
  //   // console.log('favoriteList', noticesWithFavorite);
  //   return noticesWithFavorite;
  // };

  // const noticesWithFavorite = userFavoriteNotices();

  const isOwnerNotices = () => {
    const noticesOwn = noticesRaw.map(notice => {
      // console.log('user._id', user);
      if (notice.owner === user._id) {
        // console.log('owner', notice.owner);
        return { ...notice, isOwner: true };
      }
      return { ...notice, isOwner: false };
    });
    // console.log('ownerList', noticesOwn);
    return noticesOwn;
  };
  const notices = isOwnerNotices();
  const isLogined = useAuth();

  // const OnPagination = page => {
  //   // dispatch(setPage(page));
  //   console.log('current page', currentPage);
  //   dispatch(fetchNotices({ category, page }));
  // };

  // const countPages = Math.ceil(totalHits / PER_PAGE);
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
                {categoryName === 'sell' && (
                  <NoticesTag>Price: {price}$</NoticesTag>
                )}
                {favorite && isLogined && <NoticesTag>Favorite </NoticesTag>}
                {isOwner && isLogined && <NoticesTag>Owner </NoticesTag>}
              </NoticesTags>

              <NoticesButton>Learn More</NoticesButton>
              <NoticesButton onClick={() => dispatch(addToFavorite(_id))}>
                add to favorite
              </NoticesButton>
              <NoticesButton onClick={() => dispatch(removeFromFavorite(_id))}>
                remove from favorite
              </NoticesButton>
            </NoticesDescription>
          </NoticesItem>
        )
      )}
    </NoticesList>
  );
};

export default NoticesCategoriesListSecond;
