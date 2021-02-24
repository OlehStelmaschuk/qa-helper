import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { postChange } from '../../store/actions/dashboardAction'

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
    <div className='edit-form'>
      <div className='item'>
        <span>Category:</span>
        <input
          required
          name='category'
          key='category'
          value={state.category}
          onChange={changeHandler}
        />
      </div>
      <div className='item'>
        <span>Weight:</span>{' '}
        <input
          required
          value={state.weight}
          name='weight'
          key='weight'
          onChange={changeHandler}
        />
      </div>
      <div className='item'>
        <span>Title:</span>{' '}
        <input
          required
          value={state.title}
          name='title'
          key='title'
          onChange={changeHandler}
        />
      </div>
      <div className='item'>
        <span>RU:</span>{' '}
        <textarea
          required
          value={state.ru}
          key='ru'
          name='ru'
          onChange={changeHandler}
        />
      </div>
      <div className='item'>
        <span>EN:</span>
        <textarea
          value={state.en}
          key='en'
          name='en'
          onChange={changeHandler}
        />
      </div>
      <div className='item'>
        <span>UA:</span>
        <textarea
          value={state.ua}
          name='ua'
          key='ua'
          onChange={changeHandler}
        />
      </div>
    </div>
  )
}

export default EditForm
