import { Formik, Form, Field } from 'formik';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  city: '',
  phone: '+380',
};

const RegisterForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <Field type="email" name="email" placeholder="Email" />
        <Field type="password" name="password" placeholder="Password" />
        <Field
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
        />
        <Field type="text" name="name" placeholder="Name" />
        <Field type="text" name="city" placeholder="City, region" />
        <Field type="tel" name="phone" placeholder="Mobile phone" />
      </Form>
    </Formik>
  );
};

export default RegisterForm;
