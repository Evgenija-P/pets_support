import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik, Formik /* getActiveElement */ } from 'formik';
import { object, string, ref } from 'yup';
import Spinner from '../Spinner';
import { ImEye, ImEyeBlocked } from 'react-icons/im';

import { selectIsLoading } from '../../redux/auth/selectors';
import { register } from '../../redux/auth/operations';

import {
  // emailRegex,
  phoneRegexp,
  cityRegexp,
  userNameRegexp,
  passwordRegexp,
} from '../../helpers/regExpsHelpers';
import {
  FormRegister,
  FormContainer,
  Input,
  Button,
  Title,
  ErrBox,
  BackButton,
  PhoneInput,
  ShowPassword,
  StyledLink,
  BoxText,
  SpinerWrapper,
} from './RegisterForm.styled';

import { Background } from '../LoginForm/LoginForm.styled';

const emailRegex = /^[^-][a-zA-Z0-9_.-]{1,64}@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const phoneNumberMask = [
  '+',
  /\d/,
  /\d/,
  /\d/,

  /\d/,
  /\d/,

  /\d/,
  /\d/,
  /\d/,

  /\d/,
  /\d/,

  /\d/,
  /\d/,
];

const registerSchema = object().shape({
  password: string()
    .min(7, 'Password must be at least 7 characters')
    .max(32, 'Password must be at most 32 characters')
    .matches(passwordRegexp, 'Must not contain spaces')
    .required('Password is required'),
  confirmPassword: string()
    .required('Please confirm your password')
    .oneOf([ref('password')], 'Passwords do not match'),
  email: string()
    .email('Invalid email address')
    .matches(emailRegex, 'Invalid email address')
    .required('Email is required'),
  name: string()
    .min(2, 'Min 2 symbols')
    .matches(userNameRegexp, 'Only letters')
    .required('Name is required'),
  phone: string()
    .min(13, 'Too Short!')
    .matches(phoneRegexp, 'Bad phone number')
    .required('Phone is required'),
  city: string()
    .matches(cityRegexp, 'Error. Example: Brovary, Kyiv')
    .required('City is required'),
});

const RegisterForm = () => {
  const [isShown, setIsShown] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const loading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const showForm = () => {
    setIsShown(false);
  };
  const hideForm = () => {
    setIsShown(true);
  };

  const onSubmit = values => {
    const { name, email, password, phone, city } = values;
    dispatch(
      register({
        name,
        email,
        password,
        phone,
        city,
      }),
      hideForm()
    );
    // console.log(values);
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      city: '',
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  const isValid =
    (formik.errors.email && formik.touched.email) ||
    (formik.errors.password && formik.touched.password) ||
    (formik.errors.confirmPassword && formik.touched.confirmPassword) ||
    formik.values.email === '' ||
    formik.values.confirmPassword === ''
      ? true
      : false;

  const showPassword = () => {
    setShowPass(!showPass);
  };
  const showConfirmPassword = () => {
    setShowConfirmPass(!showConfirmPass);
  };
  return (
    <>
      {loading ? (
        <SpinerWrapper>
          <Spinner />
        </SpinerWrapper>
      ) : (
        <FormContainer>
          <Formik validationSchema={registerSchema}>
            <FormRegister onSubmit={formik.handleSubmit} autoComplete="off">
              <Title>Register</Title>
              {isShown && (
                <>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      validate={registerSchema.email}
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      onBlur={formik.handleBlur}
                    />

                    {formik.errors.email || formik.touched.email ? (
                      <ErrBox>{formik.errors.email}</ErrBox>
                    ) : null}
                  </div>
                </>
              )}

              {isShown && (
                <>
                  <div>
                    <Input
                      name="password"
                      type={showPass ? 'text' : 'password'}
                      placeholder="Password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      onBlur={formik.handleBlur}
                    />

                    <ShowPassword onClick={showPassword}>
                      {!showPass ? <ImEyeBlocked /> : <ImEye />}
                    </ShowPassword>
                    {formik.errors.password && formik.touched.password ? (
                      <ErrBox>{formik.errors.password}</ErrBox>
                    ) : null}
                  </div>
                </>
              )}
              {isShown && (
                <>
                  <div>
                    <Input
                      name="confirmPassword"
                      type={showConfirmPass ? 'text' : 'password'}
                      placeholder="Confirm Password"
                      onChange={formik.handleChange}
                      value={formik.values.confirmPassword}
                      onBlur={formik.handleBlur}
                    />
                    <ShowPassword onClick={showConfirmPassword}>
                      {!showConfirmPass ? <ImEyeBlocked /> : <ImEye />}
                    </ShowPassword>
                    {formik.errors.confirmPassword &&
                    formik.touched.confirmPassword ? (
                      <ErrBox>{formik.errors.confirmPassword}</ErrBox>
                    ) : null}
                  </div>
                </>
              )}
              {isShown && (
                <Button type="button" onClick={showForm} disabled={isValid}>
                  Next
                </Button>
              )}
              {!isShown && (
                <>
                  <div>
                    <Input
                      name="name"
                      type="text"
                      placeholder="Name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      onBlur={formik.handleBlur}
                    />

                    {formik.errors.name && formik.touched.name ? (
                      <ErrBox>{formik.errors.name}</ErrBox>
                    ) : null}
                  </div>
                </>
              )}
              {!isShown && (
                <>
                  <div>
                    <Input
                      name="city"
                      type="text"
                      placeholder="City, region"
                      onChange={formik.handleChange}
                      value={formik.values.city}
                      onBlur={formik.handleBlur}
                    />

                    {formik.errors.city && formik.touched.city ? (
                      <ErrBox>{formik.errors.city}</ErrBox>
                    ) : null}
                  </div>
                </>
              )}
              {!isShown && (
                <>
                  <div>
                    <PhoneInput
                      mask={phoneNumberMask}
                      id="phone"
                      type="phone"
                      placeholder="Mobile phone"
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                      onBlur={formik.handleBlur}
                      name="phone"
                    />

                    {formik.errors.phone && formik.touched.phone ? (
                      <ErrBox>{formik.errors.phone}</ErrBox>
                    ) : null}
                  </div>
                </>
              )}
              {!isShown && <Button type="submit">Register</Button>}
              {!isShown && (
                <BackButton type="button" onClick={hideForm}>
                  Back
                </BackButton>
              )}
              <BoxText>
                <span>Already have an account?</span>{' '}
                <StyledLink to="/login">Login</StyledLink>
              </BoxText>
            </FormRegister>
          </Formik>
          <Background></Background>
        </FormContainer>
      )}
    </>
  );
};

export default RegisterForm;
