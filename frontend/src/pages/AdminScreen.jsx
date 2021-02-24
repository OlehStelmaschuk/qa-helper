import React, { Fragment, useEffect } from 'react'
import { AlignJustify, Bookmark } from 'react-feather'
import { AdminAnswerList } from '../components/admin'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/actions/userLoginAction'
import '../assets/adminpage.scss'
import { clearPost, getAnswerList } from '../store/actions/dashboardAction'
import { Link } from 'react-router-dom'

const AdminScreen = ({ history }) => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.user)
  dispatch(clearPost())
  dispatch(getAnswerList())

  useEffect(() => {
    if (!userInfo || userInfo.role !== 'admin') {
      history.push('/login')
    }
  }, [userInfo, history])

  const logoutHandler = () => {
    dispatch(logout())
    history.push('/login')
  }

  return (
    <Fragment>
      <div className='header-menu justify-end text-white px-5 flex space-x-2'>
        <div
          className='cursor-pointer hover:text-yellow-400'
          onClick={() => history.goBack()}
        >
          Back
        </div>
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
          <ul className='side-list'>
            <li className={`item`}>
              <Link to='/admin/post'>
                <Bookmark />
                Create post
              </Link>
            </li>

            <li className={`item`}>
              <Link to='/admin'>
                <AlignJustify />
                Sorting/List
              </Link>
            </li>
          </ul>
        </div>
        <div className='search-block-main'>{/*<ButtonPanel />*/}</div>
        <div className='main-block'>
          <AdminAnswerList />
        </div>
      </div>
    </Fragment>
  )
}
export default AdminScreen
