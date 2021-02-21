import React from 'react'
import { Save } from 'react-feather'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../store/actions/dashboardAction'

const ButtonPanel = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const options = ['main', 'hosting', 'domain']
  const { newPost } = useSelector((state) => state.dashboard)

  const saveHandler = () => {
    id ? dispatch(updatePost(id, newPost)) : dispatch(createPost(newPost))
  }

  return (
    <div className='flex w-full'>
      <div className='w-4/5 flex'>
        <span className='my-auto px-2'>Category:</span>
        <select className='select-css'>
          {options.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>
      <div className='hello-button w-1/5 flex' onClick={saveHandler}>
        <Save />
        <span className='pl-2'>Save changes</span>
      </div>
    </div>
  )
}

export default ButtonPanel
