import React, { useState } from 'react';
import './login.css';

const Login = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const emailPattern =  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;

    const handleSubmit = (event) => {
        event.preventDefault();

        setEmailError('')
        setPasswordError('')

        if(email === ''){
            setEmailError('Email is required')
        }else if(!emailPattern.test(email)){
                setEmailError('Please enter a valid email address');
                return;
            }
        

        if(password === ''){
            setPasswordError('Password is required')
        } else if(password.length < 6){
            setPasswordError('Password must be at least 6 characters');
            return;
        } else if(!/\d/.test(password)){
            setPasswordError('Password must contain at least one number');
            return;
        }

        if(email !== '' && password !== '') {
            onSubmit({ email, password});
            console.log('Form submitted')
        }
    };


  return (
    <div className='auth'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="" value={email} onChange={handleEmailChange}/>
            {emailError && <p>{emailError}</p>}
            <label>Password</label>
            <input type="password" value={password} onChange={handlePasswordChange}/>
            {passwordError && <p>{passwordError}</p>}
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Login