import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className='loginContainer'>
      <div className='loginForm'>
        <h1>Login</h1>
        <form>
          <div>
            <label htmlFor='email'>Email</label>
            <input id='email' name='email' type='text' />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input id='password' name='password' type='password' />
          </div>
          <span>Forget Password?</span>
          <input type='button' name='' id='' value='Click me' />
        </form>
        <div className='socialConnect'>
          <span>Or Sign up using</span>
          <div></div>
        </div>
        <span>or sign up using</span>
        <span>Sign up</span>
      </div>
    </div>
  );
};

export default Login;
