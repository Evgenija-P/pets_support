import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';

import TextInput from '../TextInput';
import FileInput from '../FileInput';
import PreviewPhoto from '../PreviewPhoto';
import NoticeCategories from '../NoticeCategories';
import GenderSwitch from '../GenderSwitch';
import addNoticesSchema from '../../../../../validationShemas/noticesSchema';

import { addNotices } from '../../../../../redux/notices/operations ';
import createFormData from '../../../../../helpers/createFormData';
import { selectIsAdding } from '../../../../../redux/notices/selectors';

import * as styled from './AddNoticeForm.styled';

const initialValues = {
  categoryName: 'sell',
  title: '',
  name: '',
  birthdate: '',
  breed: '',
  sex: '',
  location: '',
  comments: '',
  price: '',
  petImage: '',
};

const NOTICE_CATEGORIES = ['lost/found', 'in good hands', 'sell'];
const PET_GENDER = ['male', 'female'];

const AddNoticeForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [isFirstStep, setIsFirstStep] = useState(true);
  const currentValidationSchema = isFirstStep
    ? addNoticesSchema.firstStepValidation
    : addNoticesSchema.secondStepValidation;
  const isNoticeAdding = useSelector(selectIsAdding);

  async function handleFormSubmit({ petImage, ...values }) {
    const data = petImage ? { ...values, petImage } : { ...values };

    const formData = createFormData(data);

    dispatch(addNotices(formData))
      .unwrap()
      .then(() => alert('Contact has added.'))
      .catch(err => alert(err.message))
      .finally(() => {
        onClose();
      });
    console.log('submit');
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={currentValidationSchema}
    >
      {({ values, errors, isValid, handleSubmit, setFieldValue }) => (
        <form onSubmit={handleSubmit}>
          {isFirstStep ? (
            <div>
              <NoticeCategories categories={NOTICE_CATEGORIES} />

              <TextInput label="Title of ad" name="title" required />
              <TextInput label="Name pet" name="name" />
              <TextInput
                label="Date of birth"
                name="birthdate"
                placeholder="dd.mm.yyyy"
              />
              <TextInput label="Breed" name="breed" placeholder="" />
              <styled.BtnGroup>
                <styled.SecondaryBtn type="button" onClick={() => onClose()}>
                  Cancel
                </styled.SecondaryBtn>
                <styled.PrimaryBtn
                  disabled={!isValid || values.title === ''}
                  type={'button'}
                  onClick={async () => setIsFirstStep(false)}
                >
                  Next
                </styled.PrimaryBtn>
              </styled.BtnGroup>
            </div>
          ) : (
            <div>
              <GenderSwitch gender={PET_GENDER} />
              <TextInput label="Location" name="location" required />
              {values.categoryName === 'sell' && (
                <TextInput label="Price" name="price" required />
              )}

              {values.petImage && !errors.petImage ? (
                <PreviewPhoto
                  photo={values.petImage}
                  onDeletePreview={() => setFieldValue('petImage', '')}
                />
              ) : (
                <>
                  <FileInput
                    id="petImage"
                    name="petImage"
                    onChange={async ({ target }) =>
                      setFieldValue('petImage', target.files[0])
                    }
                  />
                </>
              )}
              <TextInput label="Comments" name="comments" />
              <styled.BtnGroup>
                <styled.SecondaryBtn
                  type="button"
                  onClick={() => setIsFirstStep(true)}
                >
                  Back
                </styled.SecondaryBtn>
                <styled.PrimaryBtn
                  type="submit"
                  disabled={
                    !isValid || values.location === '' || isNoticeAdding
                  }
                >
                  {isNoticeAdding ? 'Adding...' : 'Done'}
                </styled.PrimaryBtn>
              </styled.BtnGroup>
            </div>
          )}
        </form>
      )}
    </Formik>
  );
};

export default AddNoticeForm;
