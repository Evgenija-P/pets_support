import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
 
const initialValues = {
    name: 'Ivan',
    email: 'Ivan@mail.com',
    birthday: '1312',
    phone: '+3802919302',
    city: 'Kyiv'
}
 

   
    


const UserInformation = () => {
    const [change, setChange] = useState(false);

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
                            <Field name='name' />
                            <button type='submit'>Change</button>
                        </label> : <div>
                            <p>{`Name: ${initialValues.name}`}</p>
                            <button type='button' onClick={() => setChange('name')}>Change</button></div>}
                        
                        {change === 'email' ? <label>
                            Email:
                            <Field name='email' />
                            <button type='submit'>Change</button>
                        </label> : <div>
                            <p>{`Name: ${initialValues.email}`}</p>
                            <button type='button' onClick={() => setChange('email')}>Change</button></div>}
                        
                         {change === 'birthday' ? <label>
                            Birthday:
                            <Field name='birthday' />
                            <button type='submit'>Change</button>
                        </label> : <div>
                            <p>{`Name: ${initialValues.birthday}`}</p>
                            <button type='button' onClick={() => setChange('birthday')}>Change</button></div>}
                        
                          {change === 'phone' ? <label>
                            Birthday:
                            <Field name='phone' />
                            <button type='submit'>Change</button>
                        </label> : <div>
                            <p>{`Name: ${initialValues.phone}`}</p>
                            <button type='button' onClick={() => setChange('phone')}>Change</button></div>}
                        
                        {change === 'city' ? <label>
                            Birthday:
                            <Field name='city' />
                            <button type='submit'>Change</button>
                        </label> : <div>
                            <p>{`Name: ${initialValues.city}`}</p>
                            <button type='button' onClick={() => setChange('city')}>Change</button></div>} 
                    </Form>
                </Formik>
                <button type='submit'>Log out</button>
            </div>
        </div>
    );
};

export default UserInformation;