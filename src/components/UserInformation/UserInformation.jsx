import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { object, string } from 'yup';
import { selectUser } from '../../redux/auth/selectors';
import { InputBirthday } from "./Flatpickr";
import {
  logOut,
  addAvatar,
  updateUserInformation,
} from '../../redux/auth/operations';
import imgPlug from '../../img/no-foto.png';
import {
  emailRegex,
  phoneRegexp,
  cityRegexp,
  userNameRegexp,
  dateRegexp,
} from '../../helpers/regExpsHelpers';
import {
  Title,
  UserContainer,
  UserImg,
  UserInformationContainer,
  UserForm,
  UserKey,
  UserValue,
  LogOutButton,
  LogOutIcon,
  UserInformationEdit,
  UserInformationEditWrapper,
  UserKeyLabel,
  UserValueInput,
  UserInformationEdited,
  InputEditPhoto,
  CameraSVG,
  CameraSVGWrapper,
  UserWrapper,
  AvatarWrapper,
  ButtonEdit,
  LogOutIconWrapper,
  ErrBox,
  UserKeyEdit,
} from './UserInformation.styled';



const userUpdateSchema = object().shape({
  email: string()
    .matches(emailRegex, 'Invalid email address')
    // .email('Invalid email address')
    .required('Email is required'),
  name: string()
    .min(2, 'Min 2 symbols')
    .matches(userNameRegexp, 'Only latin letters')
    .required('Name is required'),
  phone: string()
    .min(13, 'Too Short!')
    .matches(phoneRegexp, 'Bad phone number')
    .required('Phone is required'),
  city: string()
    .matches(cityRegexp, 'Error. Example: Brovary, Kyiv')
    .required('City is required'),
  birthday: string()
    .matches(dateRegexp, 'Error. Example: DD.MM.YYYY')
    .max(10, 'Year must be 4 letters')
});

const UserInformation = () => {
  const [change, setChange] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const initialValues = {
    name: user.name,
    email: user.email,
    birthday: user.birthday,
    phone: user.phone,
    city: user.city,
  };

  
  const handleSubmit = ({ name, email, birthday, phone, city }) => {
    const data = {
      name,
      email,
      birthday,
      phone,
      city,
    };
    dispatch(updateUserInformation(data));
    setChange(false);
  };

  const handleChange = e => {
    const avatar = e.target.files[0];
    const formData = new FormData();
    formData.append('avatar', avatar);
    dispatch(addAvatar(formData));
  };

  return (
    <div>
      <Title>My information: </Title>
      <UserContainer>
        <UserWrapper>
          <AvatarWrapper>
            <UserImg
              src={!user.avatarURL ? imgPlug : user.avatarURL}
              alt="Avatar"
            />
            <ButtonEdit type="button">
              <label onChange={handleChange}>
                <InputEditPhoto type="file" />
                <CameraSVGWrapper>
                  <CameraSVG />
                </CameraSVGWrapper>
                Edit Photo
              </label>
            </ButtonEdit>
          </AvatarWrapper>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={userUpdateSchema}
            isValid
          >
            {({ errors, touched, isValid }) => (
              <UserForm autoComplete="off">
                {change === 'name' ? (
                  <UserKeyLabel>
                    <UserKeyEdit>Name:</UserKeyEdit>
                    <UserValueInput type="text" name="name" isvalid={isValid.toString()} />
                    {errors.name || touched.name ? (
                      <ErrBox>{errors.name}</ErrBox>
                    ) : null}
                    <UserInformationEditWrapper type="submit">
                      <UserInformationEdited />
                    </UserInformationEditWrapper>
                  </UserKeyLabel>
                ) : (
                  <UserInformationContainer>
                    <UserKey>Name:</UserKey>
                    <UserValue>{`${initialValues.name}`}</UserValue>
                    <UserInformationEditWrapper
                      disabled={!isValid || change}
                      click={change}
                      onClick={() => setChange('name')}>
                      <UserInformationEdit />
                    </UserInformationEditWrapper>
                  </UserInformationContainer>
                )}

                {change === 'email' ? (
                  <UserKeyLabel>
                    <UserKeyEdit>Email:</UserKeyEdit>
                    <UserValueInput type="email" name="email" isvalid={isValid.toString()} />
                    {errors.email || touched.email ? (
                      <ErrBox>{errors.email}</ErrBox>
                    ) : null}
                    <UserInformationEditWrapper type="submit">
                      <UserInformationEdited />
                    </UserInformationEditWrapper>
                  </UserKeyLabel>
                ) : (
                  <UserInformationContainer>
                    <UserKey>Email:</UserKey>
                    <UserValue href={`mailto:${initialValues.email}`}>{`${initialValues.email}`}</UserValue>
                    <UserInformationEditWrapper
                      click={change}
                      disabled={!isValid || change}
                      onClick={() => setChange('email')}>
                      <UserInformationEdit />
                    </UserInformationEditWrapper>
                  </UserInformationContainer>
                )}

                {change === 'birthday' ? (
                  <UserKeyLabel>
                    <UserKeyEdit>Birthday:</UserKeyEdit>
                    <UserValueInput
                      type="text"
                      name="birthday"
                      placeholder={!initialValues.birthday ? "00.00.0000" : ''}
                      component={InputBirthday}
                    />
                    {errors.birthday || touched.birthday ? (
                      <ErrBox>{errors.birthday}</ErrBox>
                    ) : null}
                    <UserInformationEditWrapper type="submit" >
                      <UserInformationEdited />
                    </UserInformationEditWrapper>
                  </UserKeyLabel>
                ) : (
                  <UserInformationContainer>
                    <UserKey>Birthday:</UserKey>
                    <UserValue>{!initialValues.birthday ? "00.00.0000" : `${initialValues.birthday}`}</UserValue>
                    <UserInformationEditWrapper
                      click={change}
                      disabled={!isValid || change}
                      onClick={() => setChange('birthday')}>
                      <UserInformationEdit />
                    </UserInformationEditWrapper>
                  </UserInformationContainer>
                )}

                {change === 'phone' ? (
                  <UserKeyLabel>
                    <UserKeyEdit>Phone:</UserKeyEdit>
                    <UserValueInput type="text" name="phone" isvalid={isValid.toString()} />
                    {errors.phone || touched.phone ? (
                      <ErrBox>{errors.phone}</ErrBox>
                    ) : null}
                    <UserInformationEditWrapper type="submit" >
                      <UserInformationEdited />
                    </UserInformationEditWrapper>
                  </UserKeyLabel>
                ) : (
                  <UserInformationContainer>
                    <UserKey>Phone:</UserKey>
                    <UserValue href={`tel:${initialValues.phone}`}>{`${initialValues.phone}`}</UserValue>
                    <UserInformationEditWrapper
                      click={change}
                      disabled={!isValid || change}
                      onClick={() => setChange('phone')} >
                      <UserInformationEdit />
                    </UserInformationEditWrapper>
                  </UserInformationContainer>
                )}

                {change === 'city' ? (
                  <UserKeyLabel>
                    <UserKeyEdit>City:</UserKeyEdit>
                    <UserValueInput type="text" name="city" isvalid={isValid.toString()} />
                    {errors.city || touched.city ? (
                      <ErrBox>{errors.city}</ErrBox>
                    ) : null}
                    <UserInformationEditWrapper type="submit" >
                      <UserInformationEdited />
                    </UserInformationEditWrapper>
                  </UserKeyLabel>
                ) : (
                  <UserInformationContainer>
                    <UserKey>City:</UserKey>
                    <UserValue>{`${initialValues.city}`}</UserValue>
                    <UserInformationEditWrapper
                      click={change}
                      disabled={!isValid || change}
                      onClick={() => setChange('city')}>
                      <UserInformationEdit />
                    </UserInformationEditWrapper>
                  </UserInformationContainer>
                )}
              </UserForm>
            )}
          </Formik>
        </UserWrapper>
        <LogOutButton type="button" onClick={() => dispatch(logOut())}>
          Log out
          <LogOutIconWrapper>
            <LogOutIcon onClick={() => dispatch(logOut())} />
          </LogOutIconWrapper>
        </LogOutButton>
      </UserContainer>
    </div>
  );
};

export default UserInformation;
