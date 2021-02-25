import React, { Fragment, useEffect, useState } from 'react'
import { AlignJustify, Bookmark } from 'react-feather'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/actions/userLoginAction'
import '../assets/adminpage.scss'
import { useParams } from 'react-router-dom'
import { clearPost, getSinglePost } from '../store/actions/dashboardAction'
import { ButtonPanel, EditForm } from '../components/admin'

const AdminScreenPostEdit = ({ history }) => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.user)
  const { id } = useParams()
  useEffect(() => dispatch(clearPost()))

  useEffect(() => {
    if (!userInfo || userInfo.role !== 'admin') {
      history.push('/login')
    }
    dispatch(getSinglePost(id))
  }, [userInfo, history, id])

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
        <div className='search-block-main'>
          <ButtonPanel />
        </div>
        <div className='main-block'>
          <EditForm />
        </div>
      </div>
    </Fragment>
  )
}
export default AdminScreenPostEdit
