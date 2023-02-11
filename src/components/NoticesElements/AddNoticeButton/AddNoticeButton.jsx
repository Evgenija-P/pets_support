import { Button } from './AddNoticeButton.styled';

import addNoticeIcon from '../../../img/icons/addNoticeIcon.svg';

const AddNoticeButton = ({ onClick }) => {
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
