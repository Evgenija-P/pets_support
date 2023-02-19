import NoticesCategoriesListSecond from '../../NoticesElements/NoticesCategoriesListSecond';
import { selectNoticesObj } from '../../../redux/notices/selectors';
import { useSelector } from 'react-redux';
import GalleryPagination from '../../NoticesElements/GalleryPagination';
import NoticesLoader from '../NoticesLoader';
import NoticesSpinner from '../NoticesSpіnner';
import { useLocation } from 'react-router-dom';

const NoticesGallary = () => {
  const { isLoading, error, noticesList } = useSelector(selectNoticesObj);
  const { pathname } = useLocation();

  return (
    <div>
      <NoticesSpinner />
      {(error || noticesList.length === 0) &&
        !isLoading &&
        pathname === '/notices/favorite' && <NoticesLoader />}
      {(error || noticesList.length === 0) &&
        !isLoading &&
        pathname !== '/notices/favorite' && <NoticesLoader />}
      <NoticesCategoriesListSecond />
      <GalleryPagination />
    </div>
  );
};
export default NoticesGallary;
