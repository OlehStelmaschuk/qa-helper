import React from 'react'
import { Save, Trash } from 'react-feather'
import { useParams, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  createPost,
  postDelete,
  updatePost,
} from '../../store/actions/dashboardAction'

const ButtonPanel = ({ history }) => {
  const { id } = useParams()
  const dispatch = useDispatch()
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
  const { newPost } = useSelector((state) => state.dashboard)

  const saveHandler = async () => {
    id
      ? await dispatch(updatePost(id, newPost))
      : await dispatch(createPost(newPost))
    history.push('/admin')
  }

  const deleteHandler = async () => {
    if (confirm("Delete post? It can't be undone")) {
      await dispatch(postDelete(id))
      history.push('/admin')
    }
  }

  return (
    <div className='flex w-full'>
      <div className='w-4/5 flex'>
        <span className='my-auto px-2'>Category:</span>
        <select className='select-css mr-2'>
          {options.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>
      {id && (
        <div className='hello-button flex ml-0' onClick={deleteHandler}>
          <Trash />
        </div>
      )}
      <div className='hello-button w-1/5 flex ml-0' onClick={saveHandler}>
        <Save />
        <span className='pl-2'>Save changes</span>
      </div>
    </div>
  )
}

export default withRouter(ButtonPanel)
