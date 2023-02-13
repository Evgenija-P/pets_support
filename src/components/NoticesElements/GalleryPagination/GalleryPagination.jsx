import Pagination from '@mui/material/Pagination';
import React from 'react';
import { PagginationWrapper } from './GalleryPagination.styled';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { colors } from '../../../styles/stylesLayout';
import { createTheme } from '@mui/material/styles';
// import useAuth from '../../../hooks/useAuth';
import { fetchNotices } from '../../../redux/notices/operations ';
import { selectNoticesObj } from '../../../redux/notices/selectors';
import { useDispatch, useSelector } from 'react-redux';
// import { selectFavoriteObj } from '../../../redux/favorite/selectors';
// import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { useRef } from 'react';

//  accent: '#F59256',
//   background: '#FDF7F2',
//   accentButton: '#FF6101',
//   black: '#111111',
//   newsText: '#111321',
//   maleColor: '#23C2EF',
//   femaleColor: '#FF8787',
//   blue: '#3091EB',
//   white: '#FFFFFF',
//   gray: 'rgba(17, 17, 17, 0.6)',
//   gradient: 'linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)',
//   shadow: 'rgba(49, 21, 4, 0.07)',

const theme = createTheme({
  palette: {
    primary: {
      main: colors.accentButton,
    },
    secondary: {
      main: colors.accent,
    },
    neutral: {
      main: '#166adf',
      contrastText: '#fff',
    },
  },
});

const GalleryPagination = () => {
  const {
    // noticesList,
    // selectedNotice,
    page,
    totalHits,
    isLoading,
    // isAdding,
    // error,

    search,
    limit,
  } = useSelector(selectNoticesObj);
  // const { isLoading: isLoadingFavorite } = useSelector(selectFavoriteObj);
  // const { isLoggedIn } = useAuth();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  // const firstRender = useRef(true);

  // const navigate = useNavigate();

  //////////////////////////////////////////////////////////////////////////////////////////////
  const OnPagination = page => {
    console.log('OnPagination', { category: pathname, page, search });
    dispatch(fetchNotices({ category: pathname, page, search }));
  };
  const countPages = Math.ceil(totalHits / limit);
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        {countPages > 1 && pathname !== '/notices/favorite' && !isLoading && (
          <PagginationWrapper>
            <Pagination
              // boundaryCount={5}
              count={Number(countPages)}
              page={Number(page)}
              showFirstButton
              showLastButton
              variant="outlined"
              shape="rounded"
              size="large"
              onChange={(e, page) => OnPagination(page)}
              color="primary"
            />
          </PagginationWrapper>
        )}
      </StyledEngineProvider>
    </ThemeProvider>
  );
};

export default GalleryPagination;
