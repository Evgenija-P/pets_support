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
  onFavoriteNotAuth,
} from '../../../helpers/noticesHelpers';

import notFoundNoticesImage from '../../../img/notFoundNoticesImage.jpg';
// import { PER_PAGE } from '../../../redux/notices/operations ';
// import { useSelector, useDispatch } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import useAuth from '../../../hooks/useAuth.js';
import {
  selectNotices,
  // selectFavoriteNotices,
  selectNoticesObj,
} from '../../../redux/notices/selectors';
import { selectFavoriteList } from '../../../redux/favorite/selectors';
// import { deletefavoriteNotice } from '../../../redux/notices/noticesSlice';
import { selectUser } from '../../../redux/auth/selectors.js';
// import { display, height } from '@mui/system';
import { getNoticesById } from '../../../redux/notices/operations ';
// import { useLocation } from 'react-router-dom';
import {
  addToFavorite,
  removeFromFavorite,
} from '../../../redux/favorite/operations ';
import { deleteNotices } from '../../../redux/notices/operations ';
// import { deleteNoticLoc } from '../../../redux/notices/noticesSlice';

// import LearnMoreButton from '../NoticesDetailsCard/NoticesButton/NoticesButton';
import NoticesLoader from '../NoticesLoader';
import Spinner from '../../Spinner/Spinner';
import Modal from '../../../components/Modal/Modal';
import NoticeInfoCard from '../../../components/NoticesElements/NoticesDetailsCard/NoticeInfoCard';
import { setSelectedNotice } from '../../../redux/notices/noticesSlice';
import { Notices } from '../NoticesDetailsCard/NoticeInfoCard/NoticeInfoCard.styled';
import { useLocation } from 'react-router-dom';
const NoticesCategoriesListSecond = () => {
  const {
    noticesList: listNotices,
    selectedNotice,
    page,
    totalHits,
    isLoading: isLoadingNotice,
    isAdding,
    error,
    limit,
    search,
  } = useSelector(selectNoticesObj);
  const { pathname } = useLocation();
  const favorite = useSelector(selectFavoriteList);
  console.log('pathname', pathname);
  const noticesList = pathname === '/notices/favorite' ? favorite : listNotices;

  const { _id } = useSelector(selectUser);
  const dispatch = useDispatch();
  // const { pathname } = useLocation();
  const { isLoggedIn } = useAuth();
  let noticesUpdated = [];
  // const del = getUserFavoriteNotices(noticesList, favorite);
  // console.log('del', del);
  if (isLoggedIn) {
    noticesUpdated = getPetAge(
      getOwnerNotices(getUserFavoriteNotices(noticesList, favorite), _id)
    );
  } else {
    noticesUpdated = getPetAge(noticesList);
  }

  const onFavoriteToggle = (_id, favorite) => {
    if (!isLoggedIn) {
      toast.info('You must login or register to add to favorites', {
        optionsToast,
      });
      return;
    }
    if (favorite) {
      dispatch(removeFromFavorite(_id));
      // console.log('removeFromFavorite', _id);
      // if (pathname === '/notices/favorite') {
      //   console.log('delete', _id);
      //   dispatch(deletefavoriteNotice(_id));
      // }

      return;
    }
    dispatch(addToFavorite(_id));
  };

  const onFavoriteNotAuth = () => {
    toast.warning('You need Login first....', optionsToast);
  };
  const toggleModal = () => {
    dispatch(setSelectedNotice());
  };

  const notices = isLoggedIn ? noticesUpdated : noticesList;

  const filterNotices = (notices, search) => {
    // console.log('filtr', notices, search);
    // const filterByComment = notices.filter(notice =>
    //   notice.comments.toLowerCase().includes(search.toLowerCase())
    // );
    const filterByTitle = notices.filter(notice =>
      notice.title.toLowerCase().includes(search.toLowerCase())
    );
    // const filterByBreed = notices.filter(notice =>
    //   notice.breed.toLowerCase().includes(search.toLowerCase())
    // );

    return [...filterByTitle];
  };

  const NoticesRender = search ? filterNotices(notices, search) : notices;
  return (
    <>
      {/* {isLoadingNotice && <Spinner />}
      // {error && <NoticesLoader>console</NoticesLoader>}
      {!isLoadingNotice && !error && ( */}
      <NoticesList>
        {NoticesRender.map(
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
                  <NoticesTag>id: {_id}</NoticesTag>
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

                {!favorite && isLoggedIn && (
                  <NoticesButton onClick={() => dispatch(addToFavorite(_id))}>
                    add to favorite
                  </NoticesButton>
                )}
                {favorite && isLoggedIn && (
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
                )}
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
      {/* )} */}
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
