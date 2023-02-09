import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from '../../redux/auth/selectors'
import { logOut, addAvatar, updateUserInformation } from '../../redux/auth/operations'
import imgPlug from '../../img/no-foto.png'
import{Title, Container} from './UserInformation.styled'
 




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
    const handleSubmit = ({name, email, birthday, phone, city}) => {
        const data = {
            name,
            email,
            birthday,
            phone,
            city,
        }
        dispatch(updateUserInformation(data))
        setChange(false);
    }
    
    const handleChange = (e) => {
        const avatar = e.target.files[0];
        const formData = new FormData();
        formData.append('avatar', avatar);
        dispatch(addAvatar(formData));
    }
    

    return (
        <Container>
            <h1>My information: </h1>
            <div>
                <img
                    src={!user.avatarURL ? imgPlug : user.avatarURL}
                    alt="Avatar"
                    width="233"
                    height="233"
                />
                <input type="file" onChange={handleChange}/>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    <Form autoComplete='off'>

                        {change === 'name' ? <label>
                            Name:
                            <Field type='text' name='name'/>
                            <button type='submit'>Change</button>
                        </label> : <div>
                            <p>{`Name: ${initialValues.name}`}</p>
                            <button type='button' onClick={() => setChange('name')}>Change</button></div>}
                        
                        {change === 'email' ? <label>
                            Email:
                            <Field type='email' name='email' />
                            <button type='submit'>Change</button>
                        </label> : <div>
                            <p>{`Email: ${initialValues.email}`}</p>
                            <button type='button' onClick={() => setChange('email')}>Change</button></div>}
                        
                         {change === 'birthday' ? <label>
                            Birthday:
                            <Field type='text' name='birthday' />
                            <button type='submit'>Change</button>
                        </label> : <div>
                            <p>{`Birthday: ${initialValues.birthday}`}</p>
                            <button type='button' onClick={() => setChange('birthday')}>Change</button></div>}
                        
                          {change === 'phone' ? <label>
                            Phone:
                            <Field type='text' name='phone' />
                            <button type='submit'>Change</button>
                        </label> : <div>
                            <p>{`Phone: ${initialValues.phone}`}</p>
                            <button type='button' onClick={() => setChange('phone')}>Change</button></div>}
                        
                        {change === 'city' ? <label>
                            City:
                            <Field type='text' name='city' />
                            <button type='submit'>Change</button>
                        </label> : <div>
                            <p>{`City: ${initialValues.city}`}</p>
                            <button type='button' onClick={() => setChange('city')}>Change</button></div>} 
                    </Form>
                </Formik>
                <button type='button' onClick={() => dispatch(logOut())}>Log out</button>
            </div>
        </Container>
    );
};

export default UserInformation;