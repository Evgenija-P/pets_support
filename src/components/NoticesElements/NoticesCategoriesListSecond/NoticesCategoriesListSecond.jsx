import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';

import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { colors } from '../../../styles/stylesLayout';
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
import { selectUser } from '../../../redux/auth/selectors.js';
import { getNoticesById } from '../../../redux/notices/operations ';
import {
  addToFavoriteNotices,
  removeFromFavoriteNotices,
} from '../../../redux/notices/operations ';
import { deleteNotices } from '../../../redux/notices/operations ';
import Modal from '../../../components/Modal/Modal';
import NoticesDetailsCard from '../../../components/NoticesElements/NoticesDetailsCard';
import { setSelectedNotice } from '../../../redux/notices/noticesSlice';
import { useParams } from 'react-router-dom';

const NoticesCategoriesListSecond = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: colors.accentButton,
      },
      secondary: {
        main: colors.accent,
      },
    },
    typography: {
      fontFamily: ['Manrope', 'sans-serif'].join(','),
    },
  });
  const { noticesList, selectedNotice, favoriteNoticesList, isLoading } =
    useSelector(selectNoticesObj);

  const [open, setOpen] = React.useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
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

  const onFavoriteToggle = (_id, favorite) => {
    if (!isLoggedIn) {
      toast.info('You must login or register to add to favorites', {
        optionsToast,
      });
      return;
    }
    if (favorite) {
      dispatch(removeFromFavoriteNotices(_id));

      return;
    }

    dispatch(addToFavoriteNotices(_id));
  };

  const onFavoriteNotAuth = () => {
    toast.warning('You need Login first....', optionsToast);
  };
  const toggleModal = () => {
    dispatch(setSelectedNotice());
  };
  const { categoryName: category } = useParams();

  const sortedNotices = [...noticesUpdated].sort(function (a, b) {
    var dateA = new Date(a.createdAt),
      dateB = new Date(b.createdAt);
    return dateB - dateA;
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAgree = _id => {
    dispatch(deleteNotices(_id));
    setOpen(false);
  };
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
                    disabled={isLoading}
                    onClick={() => {
                      dispatch(getNoticesById(`${category}/${_id}`));
                    }}
                  >
                    Learn More
                  </NoticesButton>

                  {isOwner && isLoggedIn && (
                    <NoticesButtonDelete
                      className="delete"
                      // onClick={() => {
                      //   dispatch(deleteNotices(_id));
                      // }}
                      onClick={handleClickOpen}
                    >
                      Delete <NoticesIconDelete />
                    </NoticesButtonDelete>
                  )}
                  <StyledEngineProvider injectFirst>
                    <ThemeProvider theme={theme}>
                      <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="deleting-dialog"
                        slotProps={{
                          backdrop: {
                            style: {
                              backgroundColor: 'rgba(17, 17, 17,0.3)',
                            },
                          },
                        }}
                      >
                        <DialogTitle id="responsive-dialog-title">
                          {'Deleting notice'}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            Do you really want to delete ?
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button autoFocus onClick={handleClose}>
                            Disagree
                          </Button>
                          <Button
                            onClick={() => dispatch(handleAgree(_id))}
                            autoFocus
                          >
                            Agree
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </ThemeProvider>
                  </StyledEngineProvider>
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
    </>
  );
};

export default NoticesCategoriesListSecond;
