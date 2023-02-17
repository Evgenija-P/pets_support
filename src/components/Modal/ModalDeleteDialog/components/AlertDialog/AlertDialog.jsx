import * as styled from './AlertDialog.styled';
import { deleteNotices } from '../../../../../redux/notices/operations ';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { optionsToast } from '../../../../../styles/stylesLayout';
const AlertDialog = ({ onClose, onDelete, activeNotice }) => {
  const dispatch = useDispatch();

  const handeleDelete = () => {
    dispatch(deleteNotices(activeNotice));
    toast.success('Notice successfully deleted...', optionsToast);
    onClose();
  };
  return (
    <styled.DialogWrapper>
      <div>
        <styled.DialogContentText>
          Do you really want to delete ?
        </styled.DialogContentText>
      </div>
      <styled.ButtonWrapper>
        <styled.SecondaryBtn type="button" onClick={() => onClose()}>
          Cancel
        </styled.SecondaryBtn>
        <styled.PrimaryBtn
          type="button"
          onClick={() => (activeNotice ? handeleDelete() : onDelete())}
        >
          Delete
        </styled.PrimaryBtn>
      </styled.ButtonWrapper>
    </styled.DialogWrapper>
  );
};

export default AlertDialog;
