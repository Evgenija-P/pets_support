import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { toast } from 'react-toastify';

// import FileInput from '../../../ModalAddNotice/components/FileInput';
import FileInput from '../FileInput';
import TextInput from '../../../ModalAddNotice/components/TextInput';
import PreviewPhoto from '../PreviewPhoto';
import CommentsInput from '../../../ModalAddNotice/components/CommentsInput';

import { optionsToast } from '../.././../../../styles/stylesLayout';
import addPetSchema from '../../../../../validationShemas/petSchema';
import { addNotices } from '../../../../../redux/notices/operations ';
import createFormData from '../../../../../helpers/createFormData';
import { selectIsAdding } from '../../../../../redux/notices/selectors';

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
  const [isFirstStep, setIsFirstStep] = useState(true);

  async function handleFormSubmit({ petPhoto, ...values }) {
    console.log('values', values);
    const data = petPhoto ? { ...values, petPhoto } : { ...values };

    console.log('data', values);
    const formData = createFormData(data);
    // console.log('formData: ', formData.name);
    // dispatch(addNotices(formData))
    //   .unwrap()
    //   .then(() => {
    //     toast.success('Notice was added.', optionsToast);
    //     onClose();
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     toast.error(
    //       'Error occured. Notice addition not completed.',
    //       optionsToast
    //     );
    //   });
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
              />
              <TextInput
                label="Date of birth"
                name="birthday"
                placeholder="dd.mm.yyyy"
              />
              <TextInput label="Breed" name="breed" placeholder="Type breed" />

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
                    onChange={async ({ target }) => {
                      setFieldValue('petPhoto', target.files[0]);
                    }}
                  />
                </>
              )}

              <CommentsInput
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

                <styled.PrimaryBtn type="submit" disabled={false}>
                  done {false && <styled.Loader size={25} color="white" />}
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
