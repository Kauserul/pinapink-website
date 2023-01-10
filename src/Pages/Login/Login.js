import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200 loginBG">
      <div className="hero-content flex-col lg:flex-row pt-0 mt-0">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Welcome to PinaPik</h1>
          <p className="py-6 mb-0 pb-0">
            Sign in with your account
          </p>

        </div>
        <div className="card flex-shrink-0 w-full max-w-sm">
          <form className="card-body">
            <div className="form-control">
              <input type="text" placeholder="Email Address" className="border outline-none border-t-0 border-r-0 border-l-0  border-green-500 p-2  bg-base-200" />
            </div>
            <div className="form-control mt-5">
              <input type="text" placeholder="Password" className="border outline-none border-t-0 border-r-0 border-l-0  border-green-500 p-2  bg-base-200" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6 mb-3">
              <button className="btn btn-primary rounded-none text-white">Log In</button>
            </div>
            <p><span className=''>New to this website? Please <Link to='/register'>Register</Link></span></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login