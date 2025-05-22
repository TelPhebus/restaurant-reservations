import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import assets from '../../../assets/assets'
import { ShopContext } from '../../../context/ShopContext'
import axios from 'axios'

const LoginPopup = ({setShowLogin}) => {

    // Get API base URL and token setter from context
    const {url, setToken} = useContext(ShopContext)

    const[currState, setCurrState] = useState ("Login")
    // Form data state for name, email, and password
    const [data, setData] = useState({
       name:"",
       email:"",
       password:""

    })

    // Handle changes in the input fields
    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onLogin = async (event) => {
        event.preventDefault()
        // Choose the appropriate API endpoint based on the current form mode
        let newUrl = url;
        if (currState==="Login") {
            newUrl += "/api/user/login"
            
        }
        else{
            newUrl += "/api/user/register"
        }
            try {
        const response = await axios.post(newUrl, data);
        if (response.data.success) {
            setToken(response.data.token);
            setShowLogin(false);  
            // Save the token in context and localStorage
            localStorage.setItem('token', response.data.token);
        } else {
            alert(response.data.message || "Error occurred");
        }
        // Show error message from the backend
    } catch (error) {
        console.error("Error during login/register:", error);
        alert("Server error. Try again later.");
    }


        const response = await axios.post(newUrl, data);

        if (response.data.success) {
            setToken(response.data.token);
            
            
        }
    }

  return (
    // It will show the Form for the Login/Register Form
    <div className='login-popup'>
        <form onSubmit={onLogin} className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />}
            
                <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required/>
                <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required/>
            </div>
            <button type='submit' >{currState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, i agree to the terms of use & private policy.</p>
            </div>
            {currState==="Login"? <p>Create a New Account? <span onClick={()=>setCurrState("Sign Up")}> Click Here</span></p>
            :<p>Already have an Account? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>
            }
            
        </form>
    </div>
  )
}

export default LoginPopup