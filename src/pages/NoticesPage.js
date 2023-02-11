// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import SectionContainer from '../components/SectionContainer';
import NoticesCategoriesNav from '../components/NoticesElements/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesSearch from '../components/NoticesElements/NoticesSearch/NoticesSearch';
import NoticesGallary from '../components/NoticesElements/NoticesGallary';
import NoticeInfoCard from '../components/NoticesElements/NoticesDetailsCard/NoticeInfoCard';
import Modal from '../components/Modal/Modal';
import { useSelector, useDispatch } from 'react-redux';
//import useAuth from '../../../hooks/useAuth.js';
import { selectCurrentObj } from '../redux/current/selectors';
import { setCurrentNotices } from '../redux/current/currentSlice';
import { selectUser } from '../redux/auth/selectors';
import Spinner from '../components/Spinner/Spinner';
const NoticesPage = () => {
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(setCurrentNotices());
  };
  const { currentNotices, isLoading, error } = useSelector(selectCurrentObj);
  const { _id } = useSelector(selectUser);
  const addOwntoNorice = () => {
    if (_id === currentNotices.owner) {
      console.log('owner true', { ...currentNotices, own: true });
      return { ...currentNotices, own: true };
    }
    console.log('owner false', { ...currentNotices, own: false });
    return { ...currentNotices, own: false };
  };
  return (
    <>
      <Helmet>
        <title>NoticesPage</title>
      </Helmet>
      <SectionContainer title="Find your favorite pet">
        <NoticesSearch />
        <NoticesCategoriesNav />
        <NoticesGallary />
        {error && <div>error</div>}
        {isLoading && <Spinner />}
        {currentNotices && !isLoading && (
          <Modal
            // title={'notice'}
            type={'info'}
            onClose={toggleModal}
            children={<NoticeInfoCard {...addOwntoNorice()} />}
          ></Modal>
        )}
      </SectionContainer>

      {/* <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense> */}
    </>
  );
};

export default NoticesPage;
