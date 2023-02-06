import { Formik, Form, ErrorMessage } from "formik"
import * as yup from 'yup';

import {
    Container,
    FieldLogin,
    FieldPass,
    Title,
    Input,
    Button,
    Text,
    Link,
    ErrorText
    
} from "./LoginForm.styled";

const regexPassword = /^\S*$/

const loginSchema = yup.object().shape({
    email:yup.string().email("Invalid email adress").required("Required"),
   password: yup.string().min(7,"Password must be at least 7 characters").max(32,"Password must be at most 32 characters").matches(regexPassword, "Must not contain spaces").required("Required"),
})

const FormError = ({ name }) => {
    return (
        <ErrorMessage
            name={name}            
            render={message => <ErrorText>{message}</ErrorText>}
        />
    )
}


const LoginForm = () => {

    const initialValues = {
        email:"",
        password:""
        }

    const handleSubmit = (valuse, actions) => {
       const { resetForm} = actions
        resetForm()
       
        console.log(valuse)
        //  console.log(actions)
     }
        
    return (
        <Container>
            <Title>Login</Title>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={loginSchema}
            >
                
                <Form autoComplete="off">
                    <FieldLogin>
                        <label htmlFor="email">  
                            <Input id="loginEmail" type="email" name="email" placeholder="Email" />
                            <FormError name="email" />
                        </label>
                        
                    </FieldLogin>

                    <FieldPass>
                        <label htmlFor="password">
                            <Input id="password" type="password" name="password" placeholder="Password" />
                            <FormError name="password" />
                        </label>
                    </FieldPass>
                                  
                    <Button type="submit">Login</Button>
                    <Text>
                        <p> Don't have an account?
                            <span >
                                <Link to='/register'>Register</Link>
                            </span>
                        </p>                         
                    </Text>
                </Form>
            </Formik>
        </Container>
    )
 }


export default LoginForm 
