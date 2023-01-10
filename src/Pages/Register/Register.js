import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 loginBG">
        <div className="hero-content flex-col lg:flex-row pt-0 mt-0">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Welcome to PinaPik</h1>
            <p className="py-6 mb-0 pb-0">
              Create an Account
            </p>

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm">
            <form className="card-body">
              <div className="form-control">
                <input type="text" placeholder="Name" className="border outline-none border-t-0 border-r-0 border-l-0  border-green-500 p-2  bg-base-200" />
              </div>
              <div className="form-control mt-3">
                <input type="text" placeholder="Email Address" className="border outline-none border-t-0 border-r-0 border-l-0  border-green-500 p-2  bg-base-200" />
              </div>
              <div className="form-control mt-3">
                <input type="text" placeholder="Password" className="border outline-none border-t-0 border-r-0 border-l-0  border-green-500 p-2  bg-base-200" />
              </div>
              <div className="form-control mt-3">
                <input type="text" placeholder="Confirm Password" className="border outline-none border-t-0 border-r-0 border-l-0  border-green-500 p-2  bg-base-200" />
              </div>
              <div className='mt-3'>
                <input type='checkbox' /> I agree to the all
              </div>
              <div className="form-control mt-6 mb-3">
                <button className="btn btn-primary rounded-none text-white">Register</button>
              </div>
              <p><span className=''>Already have an account?<Link to='/login'>Login</Link></span></p>
              <div className='mt-5'>
                <p className='underline'><Link to='/seller'>I am a Seller</Link></p>
                <p className='mt-2 underline'><Link to='/affiliater'>I am Affiliater</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register