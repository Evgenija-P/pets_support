import Pagination from '@mui/material/Pagination';
import PropTypes from 'prop-types';
import React from 'react';
import { PagginationWrapper } from './GalleryPagination.styled';

const GalleryPagination = ({ onPagination, countPages, currentPage }) => {
  return (
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
      />
    </PagginationWrapper>
  );
};

export default GalleryPagination;
GalleryPagination.propTypes = {
  onPagination: PropTypes.func.isRequired,
  countPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};
