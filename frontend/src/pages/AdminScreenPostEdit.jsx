import React, { Fragment, useEffect, useState } from 'react'
import { AlignJustify, Bookmark } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/actions/userLoginAction'
import '../assets/adminpage.scss'
import { useParams } from 'react-router-dom'
import {
  clearPost,
  getSinglePost,
  postChange,
} from '../store/actions/dashboardAction'
import { ButtonPanel } from '../components/admin'

const AdminScreenPostEdit = ({ history }) => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.user)
  const { id } = useParams()
  dispatch(clearPost())

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
              <Bookmark />
              Answers
            </li>
            <li className={`item`}>
              <AlignJustify />
              Sorting
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

const EditForm = () => {
  const { post } = useSelector((state) => state.dashboard)
  const dispatch = useDispatch()
  const [state, setState] = useState({})
  useEffect(() => {
    post && setState(post)
  }, [post])
  useEffect(() => {
    dispatch(postChange(state))
  }, [state])
  const changeHandler = async ({ target }) => {
    const { name, value } = target
    setState({ ...state, [name]: value })
  }

  return (
    <Fragment>
      <div className='edit-form'>
        <div className='item h-5'>
          <span>Category:</span>
          <textarea
            required
            name='category'
            key='category'
            value={state.category}
            onChange={changeHandler}
          />
        </div>
        <div className='item h-5'>
          <span>Weight:</span>{' '}
          <textarea
            required
            value={state.weight}
            name='weight'
            key='weight'
            onChange={changeHandler}
          />
        </div>
        <div className='item'>
          <span>Title:</span>{' '}
          <textarea
            required
            value={state.title}
            name='title'
            key='title'
            onChange={changeHandler}
          />
        </div>
        <div className='item h-28'>
          <span>RU:</span>{' '}
          <textarea
            required
            value={state.ru}
            key='ru'
            name='ru'
            onChange={changeHandler}
          />
        </div>
        <div className='item h-28'>
          <span>EN:</span>
          <textarea
            value={state.en}
            key='en'
            name='en'
            onChange={changeHandler}
          />
        </div>
        <div className='item h-28'>
          <span>UA:</span>
          <textarea
            value={state.ua}
            name='ua'
            key='ua'
            onChange={changeHandler}
          />
        </div>
      </div>
    </Fragment>
  )
}
export default AdminScreenPostEdit
