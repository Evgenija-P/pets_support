import { Formik} from "formik"
import { Link } from 'react-router-dom';

import { Container, WraperForm, Title, Input,Button, Text} from "./LoginForm.styled";


const LoginForm = () => {

const initialValues = {
    login:"",
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
            >
                <WraperForm autoComplete="off">
                    <label htmlFor="login">  
                        <Input type="text" name="login" placeholder="Email"/>            
                    </label>                    
            
                    <label htmlFor="password">
                        <Input type="password" name="password" placeholder="Password"/>
                    </label>
                
                    <Button type="submit">Login</Button>
                    <Text>
                        <p> Don't have an account? 
                            <span>
                                <Link to='/register'>Register</Link>
                            </span>
                        </p> 
                         
                    </Text>
                </WraperForm>
             </Formik>
        </Container>
    )

 }
   

export default LoginForm 
