import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import {
  logOut,
  addAvatar,
  updateUserInformation,
} from '../../redux/auth/operations';
import imgPlug from '../../img/no-foto.png';

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
} from './UserInformation.styled';

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
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <UserForm autoComplete="off">
              {change === 'name' ? (
                <UserKeyLabel>
                  Name:
                  <UserValueInput type="text" name="name" />
                  <UserInformationEditWrapper type="submit">
                    <UserInformationEdited />
                  </UserInformationEditWrapper>
                </UserKeyLabel>
              ) : (
                <UserInformationContainer>
                  <UserKey>Name:</UserKey>
                  <UserValue>{`${initialValues.name}`}</UserValue>
                  <UserInformationEditWrapper click={change} onClick={() => setChange('name')}>
                    <UserInformationEdit />
                  </UserInformationEditWrapper>
                </UserInformationContainer>
              )}

              {change === 'email' ? (
                <UserKeyLabel>
                  Email:
                  <UserValueInput type="email" name="email" />
                  <UserInformationEditWrapper type="submit">
                    <UserInformationEdited />
                  </UserInformationEditWrapper>
                </UserKeyLabel>
              ) : (
                <UserInformationContainer>
                  <UserKey>Email:</UserKey>
                  <UserValue>{`${initialValues.email}`}</UserValue>
                  <UserInformationEditWrapper click={change}>
                    <UserInformationEdit onClick={() => setChange('email')} />
                  </UserInformationEditWrapper>
                </UserInformationContainer>
              )}

              {change === 'birthday' ? (
                <UserKeyLabel>
                  Birthday:
                  <UserValueInput
                    type="text"
                    name="birthday"
                    placeholder={initialValues.birthday === null && "11.11.2000"}
                  />
                  <UserInformationEditWrapper type="submit">
                    <UserInformationEdited />
                  </UserInformationEditWrapper>
                </UserKeyLabel>
              ) : (
                <UserInformationContainer>
                  <UserKey>Birthday:</UserKey>
                  <UserValue>{`${initialValues.birthday}`}</UserValue>
                  <UserInformationEditWrapper click={change}>
                    <UserInformationEdit
                      onClick={() => setChange('birthday')}
                    />
                  </UserInformationEditWrapper>
                </UserInformationContainer>
              )}

              {change === 'phone' ? (
                <UserKeyLabel>
                  Phone:
                  <UserValueInput type="text" name="phone" />
                  <UserInformationEditWrapper type="submit">
                    <UserInformationEdited />
                  </UserInformationEditWrapper>
                </UserKeyLabel>
              ) : (
                <UserInformationContainer>
                  <UserKey>Phone:</UserKey>
                  <UserValue>{`${initialValues.phone}`}</UserValue>
                  <UserInformationEditWrapper click={change}>
                    <UserInformationEdit onClick={() => setChange('phone')} />
                  </UserInformationEditWrapper>
                </UserInformationContainer>
              )}

              {change === 'city' ? (
                <UserKeyLabel>
                  City:
                  <UserValueInput type="text" name="city" />
                  <UserInformationEditWrapper type="submit">
                    <UserInformationEdited />
                  </UserInformationEditWrapper>
                </UserKeyLabel>
              ) : (
                <UserInformationContainer>
                  <UserKey>City:</UserKey>
                  <UserValue>{`${initialValues.city}`}</UserValue>
                  <UserInformationEditWrapper click={change}>
                    <UserInformationEdit onClick={() => setChange('city')} />
                  </UserInformationEditWrapper>
                </UserInformationContainer>
              )}
            </UserForm>
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
