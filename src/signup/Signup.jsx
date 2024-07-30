import React from 'react'
import "./signup.css"
import { Link } from 'react-router-dom'


const Signup = () => {
  return (
    <div className="addUser">
        <h3>Register</h3>
        <form className='addUserForm'>
            <div className="inputGroup">
                <label htmlFor="name">Name:</label>
                <input type="text"
                id='name'
                autoComplete='off'
                placeholder='Enter your name' 
                />

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
                <button type="submit" class="btn btn-success">Submit</button>
            </div>
        </form>
        <div className="login">
            <p>Already have an account ?</p>
            <Link to="/login" type="submit" class="btn btn-primary">
                Login
                </Link>
        </div>
    </div>
  )
}

export default Signup