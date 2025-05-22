import React, { useState } from 'react'
import './Login.css';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import axios from 'axios' 




const Login = ({ setToken }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

     const OnSubmitHandler = async (e) =>{
        try {
            e.preventDefault();
            //Call the Backend file with the email and the password of the admin
            const response = await axios.post(backendUrl + '/api/admin/login', {email, password})
            if(response.data.success){
                
                setToken(response.data.token) // <---- if the fails, it will save the token 
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            
        }
     }
  return ( //The Login Field of the Admin
    <div>
        <div className='login-box'>
            <div className='login-box-field'>
                <h1>Admin Login</h1>
                <form onSubmit={OnSubmitHandler}>
                    <div className='Email-field'>
                        <p>Email Address</p>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' required  className='main-nav'/>
                    </div>
                     <div className='Password-field'>
                        <p>Password</p>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' required className='main-nav'/>
                    </div>
                    <button type="submit" className='Login-Popup'>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login