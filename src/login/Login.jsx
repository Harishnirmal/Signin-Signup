import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="addUser">
        <h3>Sign In</h3>
        <form className='addUserForm'>
            <div className="inputGroup">
                

            <label htmlFor="email">UserName:</label>
                <input type="email"
                id='email'
                autoComplete='off'
                placeholder='Enter your username' 
                />

           <label htmlFor="name">Password:</label>
                <input type="password"
                id='password'
                autoComplete='off'
                placeholder='Enter your password' 
                />
                <button type="submit" class="btn btn-primary">Login</button>
            </div>
        </form>
        <div className="login">
            <p>Don't have an account ?</p>
            <Link to="/"type="submit" class="btn btn-success">Register</Link>
        </div>
    </div>
  )
}

export default Login