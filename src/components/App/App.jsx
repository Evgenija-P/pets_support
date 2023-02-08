import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../hooks/useAuth';
import HomePage from '../../pages/HomePage';
import NotFoundPage from '../../pages/NotFoundPage';
import { refreshUser } from '../../redux/auth/operations';
import PrivateRoute from '../PrivateRoute';
import RestrictedRoute from '../RestrictedRoute';
import SharedLayout from '../SharedLayout';

const NoticesCategoriesNav = lazy(() =>
  import('../NoticesElements/NoticesCategoriesNav')
);

const RegisterPage = lazy(() => import('../../pages/Register'));
const LoginPage = lazy(() => import('../../pages/Login'));
const NewsPage = lazy(() => import('../../pages/NewsPage'));
const NoticesPage = lazy(() => import('../../pages/NoticesPage'));
const OurFriendsPage = lazy(() => import('../../pages/OurFriendsPage'));
const UserPage = lazy(() => import('../../pages/UserPage'));

const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing, isLoggedIn } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Идем на сервер'
  ) : (
    <>
      {' '}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/news"
            element={<RestrictedRoute component={<NewsPage />} />}
          />

          <Route
            path="/notices"
            element={
              isLoggedIn ? (
                <PrivateRoute
                  component={<NoticesPage />}
                  // redirectTo="/notices/sell"
                />
              ) : (
                <RestrictedRoute
                  component={<NoticesPage />}
                  // redirectTo="/notices/sell"
                />
              )
            }
          >
            <Route
              path="sell"
              element={<RestrictedRoute component={<NoticesCategoriesNav />} />}
            />
            <Route
              path="lost-found"
              element={<RestrictedRoute component={<NoticesCategoriesNav />} />}
            />
            <Route
              path="for-free"
              element={<RestrictedRoute component={<NoticesCategoriesNav />} />}
            />
            <Route
              path="favorite"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<NoticesCategoriesNav />}
                />
              }
            />
            <Route
              path="own"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<NoticesCategoriesNav />}
                />
              }
            />
          </Route>

          <Route
            path="/friends"
            element={<RestrictedRoute component={<OurFriendsPage />} />}
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
            element={<PrivateRoute component={<UserPage />} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer transition={Flip} />
    </>
  );
};

export default App;
