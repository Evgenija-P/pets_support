import Pagination from '@mui/material/Pagination';
import React from 'react';
import { PagginationWrapper } from './GalleryPagination.styled';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { colors } from '../../../styles/stylesLayout';
import { createTheme } from '@mui/material/styles';
import { fetchNotices } from '../../../redux/notices/operations ';
import { selectNoticesObj } from '../../../redux/notices/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
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

const GalleryPagination = () => {
  const { page, totalHits, search, limit } = useSelector(selectNoticesObj);

  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const OnPagination = page => {

    dispatch(fetchNotices({ category: pathname, page, search }));
  };

  const countPages = Math.ceil(totalHits / limit);

  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        {/* {countPages > 1 && pathname !== '/notices/favorite' && ( */}
        {countPages > 1 && (
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
              sx={{ color: '#FF6101' }}
            />
          </PagginationWrapper>
        )}
      </StyledEngineProvider>
    </ThemeProvider>
  );
};

export default GalleryPagination;
