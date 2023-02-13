import ClipLoader from 'react-spinners/ClipLoader';
import { Loader } from './Spinner.styled';

// import { selectFavoriteObj } from '../../../redux/favorite/selectors';

// import NoticesLoader from '../../NoticesLoader';

// import Modal from '../../../components/Modal/Modal';
// //import useAuth from '../../../hooks/useAuth.js';
// import { selectNoticesObj } from '../../../../redux/notices/selectors';

// import { selectFavoriteObj } from '../../../../redux/favorite/selectors';
// import { selectUser } from '../../../redux/auth/selectors';
// import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { useRef } from 'react';

const Spinner = () => {
  return (
    <Loader>
      <ClipLoader size={150} color="#F59256" />
    </Loader>
  );
};

export default Spinner;
