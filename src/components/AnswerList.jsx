import React from 'react'
import { Loader } from './'
import { useSelector } from 'react-redux'
import AnswerPost from './AnswerPost'

const AnswerList = () => {
  const dashboard = useSelector((state) => state.dashboard)

  return (
    <div className='answer-list-block'>
      {dashboard.answerListSuccess ? (
        dashboard.filteredAnswerList.map((item, index) => (
          <AnswerPost item={item} key={index} />
        ))
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default AnswerList
