import React, { useEffect, useState } from 'react'
import { Loader } from '../dashboard'
import { useSelector } from 'react-redux'
import AdminAnswerPost from './AdminAnswerPost'

const AnswerList = () => {
  const dashboard = useSelector((state) => state.dashboard)
  const [list, setList] = useState(null)

  useEffect(() => {
    dashboard.answerListSuccess && setList(dashboard.filteredAnswerList)
  }, [dashboard.answerListSuccess])

  return (
    <div className='answer-list-block'>
      {dashboard.answerListSuccess ? (
        list &&
        list.map((item) => <AdminAnswerPost item={item} key={item._id} />)
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default AnswerList
