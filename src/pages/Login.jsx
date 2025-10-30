import React, { useState} from 'react'
import FormInput from '../Components/FormInput';
import Button from '../Components/Button';
import { Link , useNavigate } from 'react-router-dom';

const Login = () => {
  // state for form data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false); // for showing alert

  const navigate = useNavigate();

  const handleLogin = () => {
    if(!email || !password) {
      alert("please fill both email and password");
      return;
    }

    // find user from localStorage and match
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Match the user
    const validUser = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if(validUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(validUser));

      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        navigate('/account');
      }, 500);
      
      
    } else {
      alert(`Invalid email and password!`);
    }

  }

  return (
    <div className="container-sm d-flex flex-column h-full w-full">
      {showAlert && (
        <div className="alert alert-success text-center py-2" role="alert">
          Login success
        </div>
      )}

      {/* <----- Form Header -----> */}
        <div className='mb-5'>
          <p style={{color: '#595C5F'}}>Please enter your details</p>
          <h1>Welcome back</h1>
        </div>
        
        {/* <----- Form Inputs -----> */}
        <div className='container p-0'>
            <FormInput type='email' placeholder='Email Address' value={email} onChange={event => setEmail(event.target.value)}/>
        </div>
        <div className='container p-0'>
            <FormInput type='password' placeholder='Password' value={password} onChange={event => setPassword(event.target.value)}/>
        </div>

        {/* <----- Form Button -----> */}
        <div className='container text-center mt-5'>
          <Button type='primary' text='Login' onClick={handleLogin}/>
        </div>

        <div className="text-center" style={{color: "#595C5F"}}>
          <p>Don't have an account? <Link to='/register'>Register</Link></p>
        </div>
        
    </div>
  )
}

export default Login