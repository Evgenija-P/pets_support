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
  ButtonList,
  BottonsWrapper,
  Wrapper,
  NoticesButtonDelete,
  NoticesIconDelete,
  LoaderWrapper,
} from './NoticesCategoriesListSecond.styled';
import ClipLoader from 'react-spinners/ClipLoader';
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
import { selectUser } from '../../../redux/auth/selectors.js';
import { getNoticesById } from '../../../redux/notices/operations ';
import {
  addToFavoriteNotices,
  removeFromFavoriteNotices,
} from '../../../redux/notices/operations ';
import Modal from '../../../components/Modal/Modal';
import NoticesDetailsCard from '../../../components/NoticesElements/NoticesDetailsCard';
import { setSelectedNotice } from '../../../redux/notices/noticesSlice';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { colors } from '../../../styles/stylesLayout';
const NoticesCategoriesListSecond = () => {
  const {
    noticesList,
    selectedNotice,
    favoriteNoticesList,
    isLoadingSelected,
  } = useSelector(selectNoticesObj);

  const [openDialog, setOpenDialog] = useState(false);

  const [activeNotice, setActiveNotice] = useState(false);

  const [disabledButtons, setDisabledButtons] = useState([]);

  const [disabledLMButtons, setDisabledLMButtons] = useState([]);

  const { categoryName: category } = useParams();

  const { _id } = useSelector(selectUser);

  const dispatch = useDispatch();

  const { isLoggedIn } = useAuth();

  let noticesUpdated = [];

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

  const dialogToggle = _id => {
    if (!openDialog) {
      setActiveNotice(_id);
    }
    setOpenDialog(prev => !prev);
  };

  const onFavoriteToggle = async (_id, favorite) => {
    if (!isLoggedIn) {
      toast.info('You must login or register to add to favorites', {
        optionsToast,
      });
      return;
    }
    if (favorite) {
      setDisabledButtons([...disabledButtons, _id]);
      await dispatch(removeFromFavoriteNotices(_id));
      setDisabledButtons(prev => prev.filter(item => item !== _id));

      return;
    }
    setDisabledButtons([...disabledButtons, _id]);
    await dispatch(addToFavoriteNotices(_id));
    setDisabledButtons(prev => prev.filter(item => item !== _id));
  };

  const onFavoriteNotAuth = () => {
    toast.warning('You need Login first....', optionsToast);
  };
  const toggleModal = () => {
    dispatch(setSelectedNotice());
  };

  const sortedNotices = [...noticesUpdated].sort(function (a, b) {
    var dateA = new Date(a.createdAt),
      dateB = new Date(b.createdAt);
    return dateB - dateA;
  });

  return (
    <>
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
              <Wrapper>
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
                        disabled={disabledButtons.includes(_id)}
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
                </NoticesDescription>
              </Wrapper>
              <BottonsWrapper>
                <ButtonList>
                  <NoticesButton
                    disabled={disabledLMButtons.includes(_id)}
                    onClick={async () => {
                      setDisabledLMButtons([...disabledLMButtons, _id]);
                      await dispatch(getNoticesById(`${category}/${_id}`));
                      setDisabledLMButtons(prev =>
                        prev.filter(item => item !== _id)
                      );
                    }}
                  >
                    Learn More
                    {isLoadingSelected && disabledLMButtons.includes(_id) && (
                      <LoaderWrapper>
                        <ClipLoader size="100%" color={colors.accentButton} />
                      </LoaderWrapper>
                    )}
                  </NoticesButton>

                  {isOwner && isLoggedIn && (
                    <NoticesButtonDelete onClick={() => dialogToggle(_id)}>
                      Delete <NoticesIconDelete />
                    </NoticesButtonDelete>
                  )}
                </ButtonList>
              </BottonsWrapper>
            </NoticesItem>
          )
        )}
      </NoticesList>

      {selectedNotice && (
        <Modal
          type={'info'}
          onClose={toggleModal}
          children={<NoticesDetailsCard />}
        ></Modal>
      )}
      {openDialog && (
        <Modal
          type={'deleteDialog'}
          title={'Deleting notice'}
          activeNotice={activeNotice}
          onClose={dialogToggle}
        ></Modal>
      )}
    </>
  );
};

export default NoticesCategoriesListSecond;
