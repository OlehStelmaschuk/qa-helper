import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Edit2 } from 'react-feather'

const AdminAnswerPost = ({ item: { _id, title } }) => {
  const user = useSelector((state) => state.user)

  return (
    <div className='post' id='post'>
      {user.userInfo.role === 'admin' && (
        <Link
          className='mr-2 cursor-pointer text-green-900'
          title='Edit post'
          to={`/admin/post/${_id}`}
        >
          <Edit2 className='my-auto h-full' />
        </Link>
      )}

      <div className='title'>{title}</div>
    </div>
  )
}

export default AdminAnswerPost
