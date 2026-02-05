import React from 'react'

const Login = () => {
  return (
    <div className='min-h-screen w-full flex justify-center items-center bg-gray-50'>
      
      {/* Card */}
      <div className='w-full max-w-md bg-white rounded-2xl shadow-lg px-6 py-8'>
        {/* top content */}
        <div className='mb-8 text-center'>
          <div className='mx-auto mb-4 w-12 h-12 rounded-full bg-gray-200' />
          <h1 className='text-2xl font-semibold text-gray-900'>Welcome Back</h1>
          <p className='text-sm text-gray-500 mt-2'>Please sign in to your account</p>
        </div>

        {/* Login form */}
        <div className='space-y-5'>
          {/* Email field */}
          <div>
            <label className='mb-1 block text-sm font-medium  text-gray-700'>Email address</label>
            <div className='h-11 w-full rounded-lg bg-gray-100'></div>
          </div>

          {/* Password field */}
          <div>
            <label className='mb-1 block text-sm font-medium  text-gray-700'>Password</label>
            <div className='h-11 w-full rounded-lg bg-gray-100'></div>
          </div>

          {/* Forgot password */}
          <div className='flex justify-end'>
            <span className='text-sm text-blue-600 cursor-pointer'>Forgot password?</span>
          </div>

          {/* Login button */}
          <div className='w-full h-11 rounded-lg bg-blue-600 text-white flex justify-center items-center font-semibold text-md cursor-pointer'>Login</div>

          {/* Divider */}
          <div className='flex items-center gap-4 my-6'>
            <div className='h-px w-full bg-gray-200'/>
            <span className='text-sm text-gray-400'>OR</span>
            <div className='h-px w-full bg-gray-200'/>
          </div>

          {/* Secondary action */}
          <div className='text-center text-sm text-gray-600'>
            Don’t have an account?
            <span className='ml-1 text-blue-600 cursor-pointer'>Sign up</span>
          </div>

        </div>
      </div>   
    </div>
  )
}

export default Login
