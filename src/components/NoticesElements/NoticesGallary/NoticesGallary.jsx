import NoticesCategoriesListSecond from '../../NoticesElements/NoticesCategoriesListSecond';
import { selectNoticesObj } from '../../../redux/notices/selectors';
import { useSelector } from 'react-redux';
import GalleryPagination from '../../NoticesElements/GalleryPagination';
import NoticesLoader from '../NoticesLoader';
import Spinner from '../../Spinner';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
// import Modal from '../../Modal/Modal';
// import { useDispatch } from 'react-redux';
// import { deleteNotices } from '../../../redux/notices/operations ';
const NoticesGallary = () => {
  const { isLoading, error, noticesList } = useSelector(selectNoticesObj);
  const { pathname } = useLocation();
  const [activeNotice, setActiveNotice] = useState(true);
  // const dispatch = useDispatch();
  return (
    <div>
      {isLoading && <Spinner />}
      {(error || noticesList.length === 0) &&
        !isLoading &&
        pathname === '/notices/favorite' && <NoticesLoader />}
      {(error || noticesList.length === 0) &&
        !isLoading &&
        pathname !== '/notices/favorite' && <NoticesLoader />}
      <NoticesCategoriesListSecond
        onPresDel={_id => {
          setActiveNotice(_id);
          console.log('select', activeNotice);
        }}
      />
      <GalleryPagination />
      <button type="button" onClick={() => setActiveNotice(true)}></button>
      {/* {activeNotice && (
        <Modal
          type={'deleteDialog'}
          title={activeNotice}
          activeNotice={activeNotice}
          onClose={setActiveNotice(null)}
        ></Modal>
      )} */}
    </div>
  );
};
export default NoticesGallary;
