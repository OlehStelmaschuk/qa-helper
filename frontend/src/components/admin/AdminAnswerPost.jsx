import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Edit2 } from 'react-feather'
import { getSinglePost } from '../../store/actions/dashboardAction'
// import { useDispatch } from 'react-redux'
import { postChangeWeight } from '../../services'

const AdminAnswerPost = ({ item: { _id, title } }) => {
  const user = useSelector((state) => state.user)
  // const { post } = useSelector((state) => state.dashboard)
  // const dispatch = useDispatch()

  // const changeValueUp = async (e) => {
  //   if (e.target.closest('.post').previousSibling) {
  //     const upperPost = e.target.closest('.post').previousSibling
  //     const data = await postChangeWeight(upperPost.id)
  //     // console.log(data)
  //   }
  // }

  return (
    <div className='post' id={_id}>
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
      {/*<div className='flex space-x-2'>*/}
      {/*  <div onClick={(e) => changeValueUp(e)}>Up</div>*/}
      {/*  <div>Down</div>*/}
      {/*</div>*/}
    </div>
  )
}

export default AdminAnswerPost
