import NoticesCategoriesListSecond from '../../NoticesElements/NoticesCategoriesListSecond';
import { selectNoticesObj } from '../../../redux/notices/selectors';
import { useSelector } from 'react-redux';
import GalleryPagination from '../../NoticesElements/GalleryPagination';
import NoticesLoader from '../NoticesLoader';
import { GalleryWrapper, WrapperSpiner } from './NoticesGallary.styled';
import { useLocation } from 'react-router-dom';
import Spinner from '../../Spinner';
// import { Wrapper } from '../NoticesCategoriesListSecond/NoticesCategoriesListSecond.styled';
// import { positions } from '@mui/system';
const NoticesGallary = () => {
  const {
    isLoadingNotices,
    // isLoadingFavorite,
    // isLoadingSelected,
    // isAdding,
    errorNotices,
    // errorFavorit,
    // errorSelected,
    noticesList,
  } = useSelector(selectNoticesObj);
  const { pathname } = useLocation();

  return (
    <GalleryWrapper>
      {isLoadingNotices ? (
        <WrapperSpiner>
          <Spinner />
        </WrapperSpiner>
      ) : (
        <>
          {(errorNotices || noticesList.length === 0) &&
            !isLoadingNotices &&
            pathname === '/notices/favorite' && <NoticesLoader />}
          {(errorNotices || noticesList.length === 0) &&
            !isLoadingNotices &&
            pathname !== '/notices/favorite' && <NoticesLoader />}
          {!errorNotices && <NoticesCategoriesListSecond />}
          <GalleryPagination />
        </>
      )}
    </GalleryWrapper>
  );
};
export default NoticesGallary;
