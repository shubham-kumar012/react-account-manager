import React, { useState } from 'react'
import FormInput from '../Components/FormInput';
import Button from '../Components/Button';
import { Link , useNavigate } from 'react-router-dom';

const Register = () => {
    // state variables for form data
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const handleRegister = () => {
        // handle cases(when user remain some fields empty)
        if(!firstName || !lastName || !email || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }
        if(password !== confirmPassword) {
            alert("Password do not match");
            return;
        }

        // check if user already existed
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        const userExists = existingUsers.some(user => user.email === email);
        if(userExists) {
            alert('User already exists');
            return;
        }

        // creating new user
        const newUser = { firstName, lastName, email, password };

        // save to local storage
        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers));

        // registration success alert
        setShowAlert(true);
        setTimeout(() => {
            navigate('/login');
        }, 500);
    }


    return (
        <div className="container-sm d-flex flex-column h-full w-full">
            {/* <---- Registration success alert ----> */}
            {showAlert && (
                <div className={`alert alert-success text-center py-2`} role="alert">
                    Registration Success
                </div>
            )}

            {/* <---- Form Header ----> */}
            <div className='d-flex flex-column justify-content-center align-items-center  mb-5'>
                <h1>Register</h1>
                <p style={{ color: '#595C5F' }}>Create your account. It's free and only take a minute.</p>
            </div>

            {/* <---- Form Inputs ----> */}
            <div className='d-flex gap-3'>
                <FormInput type='text' placeholder='First Name' value={firstName} onChange={event => setFirstName(event.target.value)}/>
                <FormInput type='text' placeholder='Last Name' value={lastName} onChange={event => setLastName(event.target.value)}/>
            </div>
            <div className='container p-0'>
                <FormInput type='email' placeholder='Email Address' value={email} onChange={event => setEmail(event.target.value)}/>
            </div>
            <div className='container p-0'>
                <FormInput type='password' placeholder='Password' value={password} onChange={event => setPassword(event.target.value)}/>
            </div>
            <div className='container p-0'>
                <FormInput type='password' placeholder='Confirm Password' value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)}/>
            </div>

            {/* <---- Form Buttons ----> */}
            <div className='container text-center mt-4'>
                <Button type='primary' text='Register' onClick={handleRegister}/>
            </div>

            <div className="text-center" style={{ color: "#595C5F" }}>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
            </div>

        </div>
    )
}

export default Register