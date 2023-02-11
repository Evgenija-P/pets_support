import Pagination from '@mui/material/Pagination';
import PropTypes from 'prop-types';
import React from 'react';
import { PagginationWrapper } from './GalleryPagination.styled';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { colors } from '../../styles/stylesLayout';
import { createTheme } from '@mui/material/styles';

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

const GalleryPagination = ({ onPagination, countPages, currentPage }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <PagginationWrapper>
          <Pagination
            // boundaryCount={5}
            count={countPages}
            page={currentPage}
            showFirstButton
            showLastButton
            variant="outlined"
            shape="rounded"
            size="large"
            onChange={(e, page) => onPagination(page)}
            color="primary"
          />
        </PagginationWrapper>
      </StyledEngineProvider>
    </ThemeProvider>
  );
};

export default GalleryPagination;
GalleryPagination.propTypes = {
  onPagination: PropTypes.func.isRequired,
  countPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};
