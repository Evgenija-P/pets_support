import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

// import Spinner from '../Spinner';
import {
  useDispatch,
  // useSelector
} from 'react-redux';
// import {
//   selectIsRefreshing,
//   selectIsLoading,
// } from '../../redux/auth/selectors';
// import { toast } from 'react-toastify';
import { logIn } from '../../redux/auth/operations';

import {
  Container,
  FormLogin,
  FieldLogin,
  FieldPass,
  Title,
  Input,
  Button,
  Text,
  Link,
  ErrorText,
} from './LoginForm.styled';

const regexPassword = /^\S*$/;

const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email adress').required('Required'),
  password: yup
    .string()
    .min(7, 'Password must be at least 7 characters')
    .max(32, 'Password must be at most 32 characters')
    .matches(regexPassword, 'Must not contain spaces')
    .required('Required'),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const LoginForm = () => {
  // const isRefreshing = useSelector(selectIsRefreshing);
  // const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async (values, actions) => {
    const { resetForm } = actions;
    const form = { email: values.email, password: values.password };
    const { error } = await dispatch(logIn(form));

    if (!error) {
      resetForm();
    }

    console.log(values);
    //  console.log(actions)
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <FormLogin autoComplete="on">
          <Title>Login</Title>
          <FieldLogin>
            <label htmlFor="email">
              <Input
                id="loginEmail"
                type="email"
                name="email"
                placeholder="Email"
              />
              <FormError name="email" />
            </label>
          </FieldLogin>

          <FieldPass>
            <label htmlFor="password">
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
              />
              <FormError name="password" />
            </label>
          </FieldPass>

          <Button type="submit">Login</Button>
          <Text>
            <span>
              Don't have an account? <Link to="/register">Register</Link>
            </span>
          </Text>
        </FormLogin>
      </Formik>
    </Container>
  );
};

export default LoginForm;

// {<>
//   {isLoading ? (
//     <Spinner />
//   ) : (
//     <Container>
//       <Title>Login</Title>
//       <Formik
//         initialValues={initialValues}
//         onSubmit={handleSubmit}
//         validationSchema={loginSchema}
//       >
//         <Form autoComplete="on">
//           <FieldLogin>
//             <label htmlFor="email">
//               <Input
//                 id="loginEmail"
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//               />
//               <FormError name="email" />
//             </label>
//           </FieldLogin>

//           <FieldPass>
//             <label htmlFor="password">
//               <Input
//                 id="password"
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//               />
//               <FormError name="password" />
//             </label>
//           </FieldPass>

//           <Button type="submit">Login</Button>
//           <Text>
//             <span>
//               Don't have an account? <Link to="/register">Register</Link>
//             </span>
//           </Text>
//         </Form>
//       </Formik>
//     </Container>
//   )}
// </>}
