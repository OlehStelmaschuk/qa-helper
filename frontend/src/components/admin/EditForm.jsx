import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { postChange, translatePost } from '../../store/actions/dashboardAction'
import { useParams } from 'react-router-dom'

const EditForm = () => {
  const initState = {
    category: '',
    weight: '',
    title: '',
    ru: '',
    en: '',
    ua: '',
  }

  const { id } = useParams()
  const { post, loadingTranslate } = useSelector((state) => state.dashboard)
  const dispatch = useDispatch()
  const [state, setState] = useState(initState)
  useEffect(() => {
    post && setState(post)
  }, [post])
  useEffect(() => {
    dispatch(postChange(state))
  }, [state])
  useEffect(() => {
    !id && setState(initState)
  }, [id])
  const changeHandler = async ({ target }) => {
    const { name, value } = target
    setState({ ...state, [name]: value })
  }
  const translateHandler = async (text, inLang, outLang) => {
    const data = await dispatch(translatePost(text, inLang, outLang))
    data && setState({ ...state, [outLang]: data })
  }

  const options = [
    'main',
    'hosting',
    'domain',
    'vps',
    'cash',
    'user',
    'database',
    'cms',
    'mail',
    'restriction',
    'errors',
    'redirect',
  ]

  return (
    <div className='edit-form'>
      <div className='item'>
        <span>Category:</span>
        {/*<input*/}
        {/*  required*/}
        {/*  name='category'*/}
        {/*  key='category'*/}
        {/*  value={state.category}*/}
        {/*  onChange={changeHandler}*/}
        {/*/>*/}
        <select
          className='select-css'
          name='category'
          key='category'
          value={state.category}
          onChange={(e) => changeHandler(e)}
        >
          <option value='' selected disabled hidden>
            Choose category
          </option>
          {options.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
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
      {!loadingTranslate && (
        <div className='flex justify-end'>
          <div
            className='main-button'
            onClick={() => translateHandler(state.ru, 'ru', 'en')}
          >
            <span>Translate RU to EN</span>
          </div>
          <div
            className='main-button'
            onClick={() => translateHandler(state.ru, 'ru', 'ua')}
          >
            <span className=''>Translate RU to UA</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default EditForm
