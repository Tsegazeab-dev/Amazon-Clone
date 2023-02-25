import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import './Login.css'
function Login() {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const navigate = useNavigate();
    const signIn =(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then((credential)=>{
    
            if(credential)
            navigate('/')
        })
        .catch((error)=>alert(error.message))
    }
    const register =(e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((credential)=>{
            
            if(credential)
            navigate('/')
        })
        .catch((error)=>alert(error.message))
    }

  return (
    <div className='login'>
        <Link to='/'><img className='login__logo'
        src="https://img.etimg.com/thumb/msid-59738992,width-640,resizemode-4,imgsize-25499/amazon.jpg"
        alt="amazon logo" /></Link>
        
        <div className='login__container'>
            <h2>Sign-in</h2>

            <form>
                <h4>E-mail</h4>
                <input 
                type="text"
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                />

                <h4>Password</h4>
                <input 
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                 />

                 <button 
                 type='submit'
                 onClick={signIn}
                 className='login__signInButton'>
                    Sign In
                 </button>
            </form>

            <p>
                By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use Sale. Please see our Privacy Notice, our Cookies Notice and Oyr Interest-Based Ads Notice.
            </p>

            <button 
            onClick={register} 
            className="login__registerButton"
            >
                Create Your Amazon Account
            </button>
        </div>
    </div>
  )
}

export default Login;