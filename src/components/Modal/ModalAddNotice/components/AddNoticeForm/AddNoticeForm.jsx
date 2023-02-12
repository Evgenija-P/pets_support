import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { toast } from 'react-toastify';

import TextInput from '../TextInput';
import FileInput from '../FileInput';
import CommentsInput from '../CommentsInput';
import PreviewPhoto from '../PreviewPhoto';
import NoticeCategories from '../NoticeCategories';
import GenderSwitch from '../GenderSwitch';

import { optionsToast } from '../.././../../../styles/stylesLayout';
import addNoticeSchema from '../../../../../validationShemas/noticesSchema';
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

const PET_GENDER = ['Male', 'Female'];
const FIRST_STEP_FORM_FIELDS = ['title', 'name', 'birthDate', 'breed'];
const NOTICE_CATEGORIES = ['for-free', 'lost-found', 'sell'];

const AddNoticeForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [isFirstStep, setIsFirstStep] = useState(true);
  const isNoticeAdding = useSelector(selectIsAdding);

  async function handleFormSubmit({ price, petImage, ...values }) {
    const data = petImage ? { ...values, petImage } : { ...values };
    if (price) {
      data['price'] = price;
    }
    console.log('data', values);
    const formData = createFormData(data);

    dispatch(addNotices(formData))
      .unwrap()
      .then(() => {
        toast.success('Notice was added.', optionsToast);
        onClose();
      })
      .catch(err => {
        console.log(err);
        toast.error(
          'Error occured. Notice addition not completed.',
          optionsToast
        );
      });
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={addNoticeSchema}
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
              <styled.Texts>
                Please select an ad category and fill in all fields.
              </styled.Texts>

              <NoticeCategories categories={NOTICE_CATEGORIES} />
              <TextInput
                label="Title of ad"
                name="title"
                placeholder="Type name"
                required
              />
              <TextInput
                label="Name pet"
                name="name"
                placeholder="Type name pet"
              />
              <TextInput
                label="Date of birth"
                name="birthdate"
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
              <GenderSwitch gender={PET_GENDER} />
              <TextInput
                label="Location"
                name="location"
                placeholder="City, region"
                required
              />
              {values.categoryName === 'sell' && (
                <TextInput
                  label="Price"
                  name="price"
                  placeholder="Type price"
                  required
                />
              )}

              {values.petImage && !errors.petImage ? (
                <PreviewPhoto
                  label="Load the pet's image"
                  photo={values.petImage}
                  onDeletePreview={() => setFieldValue('petImage', '')}
                />
              ) : (
                <>
                  <FileInput
                    id="petImage"
                    name="petImage"
                    label="Load the pet's image"
                    onChange={async ({ target }) => {
                      setFieldValue('petImage', target.files[0]);
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

                <styled.PrimaryBtn type="submit" disabled={isNoticeAdding}>
                  done{' '}
                  {isNoticeAdding && <styled.Loader size={25} color="white" />}
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
