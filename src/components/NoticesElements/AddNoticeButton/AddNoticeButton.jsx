import { toast } from 'react-toastify';
import { optionsToast } from '../../..//styles/stylesLayout';
import useAuth from '../../../hooks/useAuth';

import { Button } from './AddNoticeButton.styled';

import addNoticeIcon from '../../../img/icons/addNoticeIcon.svg';

const AddNoticeButton = ({ onClick }) => {
  const { isLoggedIn } = useAuth();
// eslint-disable-next-line
  const onFavoriteToggle = () => {
    if (!isLoggedIn) {
      toast.info('You must login or register to add to favorites', {
        optionsToast,
      });
      return;
    }
  };

  return (
    <Button onClick={onClick}>
      <span>
        <img src={addNoticeIcon} alt={addNoticeIcon} />
      </span>
      Add pet
    </Button>
  );
};

export default AddNoticeButton;
