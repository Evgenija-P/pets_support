import NoticesCategoriesList from '../NoticesCategoriesList';
import { selectNoticesObj } from '../../../redux/notices/selectors';
import { useSelector } from 'react-redux';
import GalleryPagination from '../../NoticesElements/GalleryPagination';
import NoticesLoader from '../NoticesLoader';
import Spinner from '../../Spinner';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const NoticesGallary = () => {
  const { isLoading, error, noticesList } = useSelector(selectNoticesObj);
  const { pathname } = useLocation();
  const { categoryName } = useParams;
  console.log(categoryName, pathname);
  return (
    <div>
      {isLoading && <Spinner />}
      {(error || noticesList.length === 0) &&
        !isLoading &&
        pathname === '/notices/favorite' && <NoticesLoader />}
      {(error || noticesList.length === 0) &&
        !isLoading &&
        pathname !== '/notices/favorite' && <NoticesLoader />}
      <NoticesCategoriesList />
      <GalleryPagination />
    </div>
  );
};
export default NoticesGallary;
