import React, { Fragment, useEffect } from 'react'
import '../assets/dashboard.css'
import { SearchPanel, AnswerList, SidePanel } from '../components/dashboard'
import { useDispatch, useSelector } from 'react-redux'
import { getAnswerList } from '../store/actions/dashboardAction'
import { logout } from '../store/actions/userLoginAction'

const Dashboard = ({ history }) => {
  const dispatch = useDispatch()
  dispatch(getAnswerList())

  const { userInfo } = useSelector((state) => state.user)
  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }
  }, [userInfo, history])

  useEffect(() => {
    document.title = 'QAHelper || Dashboard'
  }, [])

  const logoutHandler = () => {
    dispatch(logout())
    history.push('/login')
  }

  return (
    <Fragment>
      <div className='header-menu justify-end text-white px-5 flex space-x-2'>
        <div>User: {userInfo && userInfo.name}</div>
        <div
          className='cursor-pointer hover:text-yellow-400'
          onClick={() => logoutHandler()}
        >
          Logout
        </div>
      </div>
      <div className='parent'>
        <div className='side-block'>
          <SidePanel />
        </div>
        <div className='search-block-main'>
          <SearchPanel />
        </div>
        <div className='main-block'>
          <AnswerList />
        </div>
      </div>
    </Fragment>
  )
}

export default Dashboard
