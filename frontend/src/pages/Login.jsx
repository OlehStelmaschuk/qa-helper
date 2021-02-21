import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../assets/login.scss'
import { Loader, Message } from '../components/dashboard'
import { login } from '../store/actions/userLoginAction'

const Login = ({ history }) => {
  const dispatch = useDispatch()
  const { loading, userInfo, error } = useSelector((state) => state.user)

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    document.title = 'QAHelper || Login'
  }, [])

  useEffect(() => {
    if (userInfo) {
      history.push('/dashboard')
    }
  }, [userInfo, history])

  const loginHandler = () => {
    dispatch(login(user, password))
  }

  const enterHandler = (e) => {
    if (e.code === 'Enter') {
      loginHandler()
    }
  }

  return (
    <div className='login-form-main'>
      <div className='login-header'>QAHelper</div>
      {loading && <Loader />}
      {error && <Message text={error} />}
      <div className='login-group'>
        <div className='login-form-group'>
          <label className='mr-3'>Username:</label>
          <input
            placeholder='Enter Username'
            className='login-form-input'
            value={user}
            onChange={(e) => setUser(e.target.value)}
            onKeyPress={(e) => enterHandler(e)}
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
            onKeyPress={(e) => enterHandler(e)}
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
