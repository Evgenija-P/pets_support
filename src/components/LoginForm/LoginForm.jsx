import { Formik, Form,} from "formik"
import { Link } from 'react-router-dom';

import { Container ,Input } from "./LoginForm.styled";


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
            <h1>Login</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                <Form autoComplete="off">
                <label htmlFor="login">  
                    <Input type="text" name="login" placeholder="Email"/>            
                </label>                    
           
                <label htmlFor="password">
                    <Input type="password" name="password" placeholder="Password"/>
                </label>
            
                    <button type="submit">Login</button>
                    <div>
                        <p> Don't have an account?
                             <span>
                            <Link to='/register'>Register</Link>
                        </span>
                        </p>                                             
                    </div>
                </Form>
             </Formik>
        </Container>
    )

 }
   

export default LoginForm 
