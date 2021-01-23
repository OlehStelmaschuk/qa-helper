import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../assets/login.scss'
import { Loader } from '../components/'
import { login } from '../store/actions/userLoginAction'

const Login = () => {
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.user)

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    document.title = 'QAHelper || Login'
  }, [])

  const loginHandler = () => {
    dispatch(login(user, password))
  }

  return (
    <div className='login-form-main'>
      <div className='login-header'>QAHelper</div>
      {loading && <Loader />}
      <div className='login-group'>
        <div className='login-form-group'>
          <label className='mr-3'>Username:</label>
          <input
            placeholder='Enter Username'
            className='login-form-input'
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className='login-form-group'>
          <label className='mr-3'>Password:</label>
          <input
            placeholder='Enter Password'
            type='password'
            value={password}
            className='login-form-input'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className='login-form-button' onClick={loginHandler}>
        Login
      </div>
    </div>
  )
}

export default Login
