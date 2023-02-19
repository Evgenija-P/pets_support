import { useEffect } from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { createPortal } from 'react-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import { ReactComponent as IconClose } from '../../../img/icons/close_menu.svg';
import { CloseButton } from '../Modal.styled';

import * as styled from './OperationConfirmationPopUp.styled';

const confirmationPopUp = document.querySelector('#confirmation-popup');

const OperationConfirmationPopUp = props => {
  const { onClose, executeOperation, elementId, title, isExecuting } = props;

  useEffect(() => {
    function keyDown(e) {
      if (e.code !== 'Escape') {
        return;
      }
      onClose();
    }

    window.addEventListener('keydown', keyDown);
    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  }, [onClose]);

  function handleBackDropClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
    return;
  }

  return createPortal(
    <RemoveScroll>
      <styled.BackDrop onClick={handleBackDropClick}>
        <styled.PopUp>
          <CloseButton
            type="button"
            aria-label="close modal button"
            onClick={onClose}
          >
            <IconClose />
          </CloseButton>
          {title && <styled.Title>{title}</styled.Title>}
          <styled.Container>
            <div>
              <styled.ContentText>
                Do you really want to delete ?
              </styled.ContentText>
            </div>
            <styled.BtnGroup>
              <styled.SecondaryBtn type="button" onClick={() => onClose()}>
                Cancel
              </styled.SecondaryBtn>
              <styled.PrimaryBtn
                type="button"
                onClick={async () => {
                  // console.log('elementId', elementId);
                  await executeOperation(elementId);
                  onClose();
                }}
                disabled={isExecuting}
              >
                Delete{' '}
                {isExecuting && (
                  <styled.LoaderWrapper>
                    <ClipLoader size="100%" color="#ffffff" />
                  </styled.LoaderWrapper>
                )}
              </styled.PrimaryBtn>
            </styled.BtnGroup>
          </styled.Container>
        </styled.PopUp>
      </styled.BackDrop>
    </RemoveScroll>,
    confirmationPopUp
  );
};

export default OperationConfirmationPopUp;
