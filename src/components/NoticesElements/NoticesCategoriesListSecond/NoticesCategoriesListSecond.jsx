import {
  NoticesList,
  NoticesItem,
  NoticesTop,
  NoticesNav,
  NoticesImage,
  NoticesBadge,
  NoticesButtonFavorite,
  NoticesDescription,
  NoticesTitle,
  NoticesTags,
  NoticesTag,
  NoticesButton,
  NoticesFavorite,
  NoticesButtonFavoriteV2,
} from './NoticesCategoriesListSecond.styled';
import { toast } from 'react-toastify';
import { optionsToast } from '../../..//styles/stylesLayout';
import {
  getOwnerNotices,
  getPetAge,
  getUserFavoriteNotices,
  labelNotices,
} from '../../../helpers/noticesHelpers';

import notFoundNoticesImage from '../../../img/notFoundNoticesImage.jpg';
import { useSelector, useDispatch } from 'react-redux';
import useAuth from '../../../hooks/useAuth.js';
import { selectNoticesObj } from '../../../redux/notices/selectors';
// import { selectFavoriteList } from '../../../redux/favorite/selectors';
import { selectUser } from '../../../redux/auth/selectors.js';
import { getNoticesById } from '../../../redux/notices/operations ';
// import { fetchFavoriteNotices } from '../../../redux/notices/operations ';

// import {
//   addToFavorite,
//   removeFromFavorite,
// } from '../../../redux/favorite/operations ';
// import Spinner from '../../Spinner';
// import NoticesLoader from '../NoticesLoader';
import {
  addToFavoriteNotices,
  removeFromFavoriteNotices,
} from '../../../redux/notices/operations ';
import { deleteNotices } from '../../../redux/notices/operations ';
import Modal from '../../../components/Modal/Modal';
import NoticeInfoCard from '../../../components/NoticesElements/NoticesDetailsCard/NoticeInfoCard';
import { setSelectedNotice } from '../../../redux/notices/noticesSlice';
import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';
const NoticesCategoriesListSecond = () => {
  const {
    noticesList: listNotices,
    selectedNotice,
    search,
    favoriteNoticesList,
    // isLoading,
    // error,
  } = useSelector(selectNoticesObj);
  const { pathname } = useLocation();
  // const favorite = useSelector(selectFavoriteList);
  // console.log('pathname', pathname);
  const noticesList =
    pathname === '/notices/favorite' ? favoriteNoticesList : listNotices;

  const { _id } = useSelector(selectUser);
  const dispatch = useDispatch();
  // const { pathname } = useLocation();
  const { isLoggedIn } = useAuth();
  let noticesUpdated = [];
  // const del = getUserFavoriteNotices(noticesList, favorite);
  // console.log('del', del);

  if (isLoggedIn) {
    noticesUpdated = labelNotices(
      getPetAge(
        getOwnerNotices(
          getUserFavoriteNotices(noticesList, favoriteNoticesList),
          _id
        )
      )
    );
  } else {
    noticesUpdated = labelNotices(getPetAge(noticesList));
  }

  const onFavoriteToggle = (_id, favorite) => {
    if (!isLoggedIn) {
      toast.info('You must login or register to add to favorites', {
        optionsToast,
      });
      return;
    }
    if (favorite) {
      // dispatch(removeFromFavorite(_id));
      dispatch(removeFromFavoriteNotices(_id));
      // console.log('removeFromFavorite', _id);
      // if (pathname === '/notices/favorite') {
      //   console.log('delete', _id);
      //   dispatch(deletefavoriteNotice(_id));
      // }

      return;
    }
    // dispatch(addToFavorite(_id));
    dispatch(addToFavoriteNotices(_id));
  };

  const onFavoriteNotAuth = () => {
    toast.warning('You need Login first....', optionsToast);
  };
  const toggleModal = () => {
    dispatch(setSelectedNotice());
  };

  // const notices = isLoggedIn ? noticesUpdated : noticesList;
  const notices = noticesUpdated;

  // const filterFavoritrNotices = (notices, search) => {
  //   // console.log('filtr', notices, search);
  //   // const filterByComment = notices.filter(notice =>
  //   //   notice.comments.toLowerCase().includes(search.toLowerCase())
  //   // );
  //   const filterByTitle = notices.filter(notice =>
  //     notice.title.toLowerCase().includes(search.toLowerCase())
  //   );
  //   // const filterByBreed = notices.filter(notice =>
  //   //   notice.breed.toLowerCase().includes(search.toLowerCase())
  //   // );
  //   // const newFilteredList = new Set(filterByTitle);

  //   // return [...newFilteredList.add(filterByComment)];
  //   return filterByTitle;
  // };

  // const NoticesRender = search && pathname === '/notices/favorite';
  const filterNotices = notices;
  // search && pathname === '/notices/favorite'
  //   ? filterFavoritrNotices(notices, search)
  //   : notices;
  const NoticesRender = search ? filterNotices : notices;
  const sortedNotices = [...NoticesRender].sort(function (a, b) {
    var dateA = new Date(a.createdAt),
      dateB = new Date(b.createdAt);
    return dateB - dateA;
  });
  // console.log('not', NoticesRender);
  // console.log('sorted', sortedNotices);
  return (
    <>
      {/* {isLoading && <Spinner />}
      {(error || listNotices === 0) && <NoticesLoader>console</NoticesLoader>} */}

      <NoticesList>
        {sortedNotices.map(
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
                <NoticesNav>
                  <NoticesBadge>{categoryName}</NoticesBadge>
                  {!isLoggedIn && (
                    <NoticesButtonFavorite
                      onClick={onFavoriteNotAuth}
                    ></NoticesButtonFavorite>
                  )}
                  {isLoggedIn && (
                    <NoticesButtonFavoriteV2
                      onClick={() => onFavoriteToggle(_id, favorite)}
                    >
                      <NoticesFavorite isfavorite={favorite.toString()} />
                    </NoticesButtonFavoriteV2>
                  )}
                </NoticesNav>

                <NoticesImage
                  src={petImageURL ? petImageURL : notFoundNoticesImage}
                  alt={title}
                />
              </NoticesTop>

              <NoticesDescription>
                <NoticesTitle>{title}</NoticesTitle>

                <NoticesTags>
                  {/* <NoticesTag>id: {_id}</NoticesTag> */}
                  <NoticesTag>Breed: {breed}</NoticesTag>
                  <NoticesTag>Place: {location}</NoticesTag>
                  <NoticesTag>Age: {age}</NoticesTag>
                  {categoryName === 'sell' && (
                    <NoticesTag>Price: {price}$</NoticesTag>
                  )}
                </NoticesTags>

                <NoticesButton
                  onClick={() => {
                    dispatch(getNoticesById(`${categoryName}/${_id}`));
                  }}
                >
                  Learn More
                </NoticesButton>
                {/* 
                {!favorite && isLoggedIn && (
                  <NoticesButton onClick={() => dispatch(addToFavorite(_id))}>
                    add to favorite
                  </NoticesButton>
                )} */}
                {/* {favorite && isLoggedIn && (
                  <NoticesButton
                    onClick={() => dispatch(removeFromFavorite(_id))}
                  >
                    remove from favorite
                  </NoticesButton>
                )}
                {!isLoggedIn && (
                  <NoticesButton onClick={onFavoriteNotAuth}>
                    add to favorite
                  </NoticesButton>
                )} */}
                {isOwner && isLoggedIn && (
                  <NoticesButton onClick={() => dispatch(deleteNotices(_id))}>
                    Delete
                  </NoticesButton>
                )}
              </NoticesDescription>
            </NoticesItem>
          )
        )}
      </NoticesList>

      {selectedNotice && (
        <Modal
          // title={'notice'}
          type={'info'}
          onClose={toggleModal}
          children={<NoticeInfoCard />}
        ></Modal>
      )}
    </>
  );
};

export default NoticesCategoriesListSecond;
