import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState({
    email: '',
    password: '',
  });
  return (
    <div className='loginContainer'>
      <div className='loginForm'>
        <h1>Login</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(
              `Successfully login ${user.email} and password ${user.password}`
            );
            setUser({
              email: '',
              password: '',
            });
          }}
        >
          <div>
            <label htmlFor='email'>Email</label>
            <input
              required
              id='email'
              name='email'
              value={user.email}
              type='email'
              onChange={(e) => {
                if (
                  !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                    e.target.value
                  )
                ) {
                  /////////////// ERROR MESSAGE ////////////////////
                } else {
                  ///////////////////// REMOVE ERROR MESSAGE /////////////////////
                }
                /////////////////// UPDATE THE VALUE HERE
              }}
            />
            {/**   ERROR STATE && <span>{ERROR MESSAGE}</span>  */}
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              required
              minLength={8}
              id='password'
              name='password'
              type='password'
              value={user.password}
              onChange={(e) => {
                ///////////////// SAME AS ABOVE
              }}
            />
          </div>
          <span>Forget Password?</span>
          <input type='submit' value='Click me' />
        </form>
        <div className='socialConnect'>
          <span>Or Sign up using</span>
          <div>
            <img src={require('../assets/facebook.png')} alt='' />
          </div>
        </div>
        <span>or sign up using</span>
        <span>Sign up</span>
      </div>
    </div>
  );
};

export default Login;
