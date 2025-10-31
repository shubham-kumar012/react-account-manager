import React, { useState, useEffect } from 'react'
import FormInput from '../Components/FormInput';
import Button from '../Components/Button';
import { useNavigate } from 'react-router-dom';

const Account = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    // load the logged-in user's data in form from the localStorage 
    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

        // if user access the page directly so redirect to the login page
        if (!loggedInUser) {
            navigate('/login');
            return;
        }

        // fill the form with user data
        setFirstName(loggedInUser.firstName);
        setLastName(loggedInUser.lastName);
        setEmail(loggedInUser.email);
        setPassword(loggedInUser.password);
        setConfirmPassword(loggedInUser.password);

    }, [navigate]);

    // handling updates
    const handleUpdate = () => {
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            alert('Please fill all fields.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if(!loggedInUser) return;

        // we will update user in users array
        const users = JSON.parse(localStorage.getItem('users')) || [];

        const updatedUsers = users.map(user =>
            user.email === loggedInUser.email ? { ...user, firstName, lastName, password, email } : user
        );

        // save to localStorage
        localStorage.setItem('users', JSON.stringify(updatedUsers));

        // update current loggenIn user(when user change the email)
        localStorage.setItem('loggedInUser', JSON.stringify({ firstName, lastName, email, password }));

        // shows the success alert
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 500);

    }

    // Logout handeling
    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        navigate('/login');
    }

    return (
        <div className="container-sm d-flex flex-column h-full w-full">
            {/* <---- Update Success Alert ----> */}
            {showAlert && (
                <div className={`alert alert-success text-center py-2`} role="alert">
                    Update Success
                </div>
            )}

            {/* <---- Form Header ----> */}
            <div className='d-flex flex-column justify-content-center align-items-center  mb-5'>
                <h1>Welcome back</h1>
                <p style={{ color: '#595C5F' }}>You can edit your account details here!</p>
            </div>

            {/* <---- Form Inputs ----> */}
            <div className='d-flex gap-3'>
                <FormInput type='text' placeholder='First Name' value={firstName} onChange={event => setFirstName(event.target.value)} />
                <FormInput type='text' placeholder='Last Name' value={lastName} onChange={event => setLastName(event.target.value)} />
            </div>
            <div className='container p-0'>
                <FormInput type='email' placeholder='Email Address' value={email} onChange={event => setEmail(event.target.value)} />
            </div>
            <div className='container p-0'>
                <FormInput type='password' placeholder='Password' value={password} onChange={event => setPassword(event.target.value)} />
            </div>
            <div className='container p-0'>
                <FormInput type='password' placeholder='Confirm Password' value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)} />
            </div>

            {/* <---- Form Buttons ----> */}
            <div className='d-flex align-items-center justify-content-around  gap-0 text-center mt-4 mx-0'>
                <Button type='danger' text='Logout' onClick={handleLogout}/>
                <Button type='success' text='Update' onClick={handleUpdate}/>
            </div>

        </div>
    )
}

export default Account