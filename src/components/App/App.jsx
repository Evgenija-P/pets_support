import axios from 'axios';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../hooks/useAuth';
import HomePage from '../../pages/HomePage';
import NotFoundPage from '../../pages/NotFoundPage';
import { refreshUser } from '../../redux/auth/operations';
import PrivateRoute from '../PrivateRoute';
import RestrictedRoute from '../RestrictedRoute';
import SharedLayout from '../SharedLayout';
import Spinner from '../Spinner';
import BASE_URL from '../../servises/api';

const NoticesCategoriesNav = lazy(() =>
  import('../NoticesElements/NoticesCategoriesNav')
);

const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const NewsPage = lazy(() => import('../../pages/NewsPage'));
const NoticesPage = lazy(() => import('../../pages/NoticesPage'));
const OurFriendsPage = lazy(() => import('../../pages/OurFriendsPage'));
const UserPage = lazy(() => import('../../pages/UserPage'));

axios.defaults.baseURL = BASE_URL;

const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing, isLoggedIn } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Spinner />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />

          <Route
            path="/news"
            element={
              isLoggedIn ? (
                <PrivateRoute component={<NewsPage />} />
              ) : (
                <RestrictedRoute component={<NewsPage />} />
              )
            }
          />

          <Route
            path="/notices"
            element={
              isLoggedIn ? (
                <PrivateRoute component={<NoticesPage />} />
              ) : (
                <RestrictedRoute component={<NoticesPage />} />
              )
            }
          >
            <Route
              path="/notices/:categoryName"
              element={<NoticesCategoriesNav />}
            />
          </Route>

          <Route
            path="/friends"
            element={
              isLoggedIn ? (
                <PrivateRoute component={<OurFriendsPage />} />
              ) : (
                <RestrictedRoute component={<OurFriendsPage />} />
              )
            }
          />

          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={<RegisterPage />}
                redirectTo="/user"
              />
            }
          />

          <Route
            path="/login"
            element={
              <RestrictedRoute component={<LoginPage />} redirectTo="/user" />
            }
          />

          <Route
            path="/user"
            element={
              isLoggedIn ? (
                <PrivateRoute component={<UserPage />} />
              ) : (
                <RestrictedRoute component={<HomePage />} />
              )
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      <ToastContainer transition={Flip} />
    </>
  );
};

export default App;
