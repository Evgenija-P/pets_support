import { Helmet } from 'react-helmet';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </>
  );
};
export default Login;
