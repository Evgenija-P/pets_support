import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from '../../redux/auth/selectors'
import {logOut} from '../../redux/auth/operations'
 




const UserInformation = () => {
    const [change, setChange] = useState(false);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

   
    const initialValues = {
    name: user.name,
    email: user.email,
    birthday: user.birthday,
    phone: user.phone,
    city: user.city
}

    const handleSubmit = (e) => {
        setChange(false);
    }

    return (
        <div>
            <h1>My information: </h1>
            <div>
                <img
                    src="photo.jpg"
                    alt="Avatar"
                />
                <button type='submit'>Edit photo</button>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    <Form autoComplete='off'>

                        {change === 'name' ? <label>
                            Name:
                            <Field name='name'/>
                            <button type='submit'>Change</button>
                        </label> : <div>
                            <p>{`Name: ${initialValues.name}`}</p>
                            <button type='button' onClick={() => setChange('name')}>Change</button></div>}
                        
                        {change === 'email' ? <label>
                            Email:
                            <Field name='email' />
                            <button type='submit'>Change</button>
                        </label> : <div>
                            <p>{`Email: ${initialValues.email}`}</p>
                            <button type='button' onClick={() => setChange('email')}>Change</button></div>}
                        
                         {change === 'birthday' ? <label>
                            Birthday:
                            <Field name='birthday' />
                            <button type='submit'>Change</button>
                        </label> : <div>
                            <p>{`Birthday: ${initialValues.birthday}`}</p>
                            <button type='button' onClick={() => setChange('birthday')}>Change</button></div>}
                        
                          {change === 'phone' ? <label>
                            Phone:
                            <Field name='phone' />
                            <button type='submit'>Change</button>
                        </label> : <div>
                            <p>{`Phone: ${initialValues.phone}`}</p>
                            <button type='button' onClick={() => setChange('phone')}>Change</button></div>}
                        
                        {change === 'city' ? <label>
                            City:
                            <Field name='city' />
                            <button type='submit'>Change</button>
                        </label> : <div>
                            <p>{`City: ${initialValues.city}`}</p>
                            <button type='button' onClick={() => setChange('city')}>Change</button></div>} 
                    </Form>
                </Formik>
                <button type='button' onClick={() => dispatch(logOut())}>Log out</button>
            </div>
        </div>
    );
};

export default UserInformation;