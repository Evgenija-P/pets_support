import * as styled from './AlertDialog.styled';

const AlertDialog = ({ onClose, onDelete, _id }) => {
  return (
    <styled.DialogWrapper>
      <div>
        <styled.DialogContentText>
          Do you really want to delete ?
        </styled.DialogContentText>
      </div>
      <styled.ButtonWrapper>
        <styled.PrimaryBtn type="button" onClick={() => onDelete(_id)}>
          Delete
        </styled.PrimaryBtn>

        <styled.SecondaryBtn type="button" onClick={() => onClose()}>
          Cancel
        </styled.SecondaryBtn>
      </styled.ButtonWrapper>
    </styled.DialogWrapper>
  );
};

export default AlertDialog;
