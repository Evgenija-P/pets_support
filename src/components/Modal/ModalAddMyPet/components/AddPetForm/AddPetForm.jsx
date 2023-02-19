import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import ClipLoader from 'react-spinners/ClipLoader';

// import FileInput from '../../../ModalAddNotice/components/FileInput';
import FileInput from '../FileInput';
import TextInput from '../../../ModalAddNotice/components/TextInput';
import PreviewPhoto from '../PreviewPhoto';
import CommentsInput from '../../../ModalAddNotice/components/CommentsInput';

import { optionsToast } from '../.././../../../styles/stylesLayout';
import addPetSchema from '../../../../../validationShemas/petSchema';
import { addNewPet } from '../../../../../redux/pets/operations';
import createFormData from '../../../../../helpers/createFormData';
import { selectIsAdding } from '../../../../../redux/pets/selectors';
import { DATE_MASK } from '../../../../../helpers/inputMasks';

import * as styled from './AddPetForm.styled';

const initialValues = {
  name: '',
  birthday: '',
  breed: '',
  petPhoto: '',
  comments: '',
};

const FIRST_STEP_FORM_FIELDS = ['name', 'birthday', 'breed'];

const AddPetForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const isAdding = useSelector(selectIsAdding);
  const [isFirstStep, setIsFirstStep] = useState(true);

  async function handleFormSubmit({ petPhoto, ...values }) {
    const data = petPhoto ? { ...values, petPhoto } : { ...values };

    const formData = createFormData(data);
    dispatch(addNewPet(formData))
      .unwrap()
      .then(() => {
        toast.success('Pet was added.', optionsToast);
        onClose();
      })
      .catch(err => {
        toast.error('Error occured. Pet addition not completed.', optionsToast);
      });
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={addPetSchema}
    >
      {({
        values,
        errors,
        handleSubmit,
        setFieldValue,
        validateForm,
        setFieldTouched,
      }) => (
        <form onSubmit={handleSubmit}>
          {isFirstStep && (
            <div>
              <TextInput
                label="Name pet"
                name="name"
                placeholder="Type name pet"
                required
              />
              <TextInput
                mask={DATE_MASK}
                label="Date of birth"
                name="birthday"
                placeholder="dd.mm.yyyy"
                required
              />
              <TextInput
                label="Breed"
                name="breed"
                placeholder="Type breed"
                required
              />

              <styled.BtnGroup>
                <styled.SecondaryBtn type="button" onClick={() => onClose()}>
                  Cancel
                </styled.SecondaryBtn>

                <styled.PrimaryBtn
                  type={'button'}
                  onClick={async () => {
                    const errors = await validateForm();
                    const isValid = FIRST_STEP_FORM_FIELDS.every(
                      field => !errors[field]
                    );
                    if (!isValid) {
                      FIRST_STEP_FORM_FIELDS.forEach(field =>
                        setFieldTouched(field, true)
                      );
                      return;
                    }
                    setIsFirstStep(false);
                  }}
                >
                  Next
                </styled.PrimaryBtn>
              </styled.BtnGroup>
            </div>
          )}
          {!isFirstStep && (
            <div>
              {values.petPhoto && !errors.petPhoto ? (
                <PreviewPhoto
                  label="Load the pet's image"
                  photo={values.petPhoto}
                  onDeletePreview={() => setFieldValue('petPhoto', '')}
                />
              ) : (
                <>
                  <FileInput
                    id="petPhoto"
                    name="petPhoto"
                    label="Load the pet's image"
                    // onChange={async ({ target }) => {
                    //   setFieldValue('petPhoto', target.files[0]);
                    // }}
                  />
                </>
              )}

              <CommentsInput
                id="comments"
                label="Comments"
                name="comments"
                placeholder="Type commetns"
              />

              <styled.BtnGroup>
                <styled.SecondaryBtn
                  type="button"
                  onClick={() => setIsFirstStep(true)}
                >
                  Back
                </styled.SecondaryBtn>

                <styled.PrimaryBtn type="submit" disabled={isAdding}>
                  Done{' '}
                  {isAdding && (
                    <styled.LoaderWrapper>
                      <ClipLoader size="100%" color="white" />
                    </styled.LoaderWrapper>
                  )}
                </styled.PrimaryBtn>
              </styled.BtnGroup>
            </div>
          )}
        </form>
      )}
    </Formik>
  );
};

export default AddPetForm;
