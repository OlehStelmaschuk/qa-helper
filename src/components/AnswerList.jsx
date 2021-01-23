import React, { useEffect } from 'react'
import { Loader, LangUa, LangEn, LangRu } from './'
import { useDispatch, useSelector } from 'react-redux'
import { getAnswerList } from '../store/actions/dashboardAction'

const AnswerList = () => {
  const dispatch = useDispatch()
  const {
    answerList,
    answerListSuccess,
    searchString,
    filteredAnswerList,
  } = useSelector((state) => state.dashboard)

  useEffect(() => {
    dispatch(getAnswerList())
  }, [])

  const AnswerPost = ({ title, id }) => {
    return (
      <div
        className='answer-item flex border-dashed border-b border-w'
        key={id}
      >
        <div className='w-full'>{title}</div>
        <div className='justify-self-end flex'>
          <div className='px-1'>
            <LangEn />
          </div>
          <div className='px-1'>
            <LangUa />
          </div>
          <div className='px-1'>
            <LangRu />
          </div>
        </div>
      </div>
    )
  }

  const Main = () => {
    return (
      <div className='flex flex-col h-full w-full bg-white rounded-2xl space-y-2 p-3'>
        {answerListSuccess &&
          searchString === '' &&
          answerList.map(({ id, title }) => (
            <AnswerPost title={title} key={id} />
          ))}
        {answerListSuccess &&
          searchString !== '' &&
          filteredAnswerList.map(({ id, title }) => (
            <AnswerPost title={title} key={id} />
          ))}
      </div>
    )
  }

  return answerListSuccess ? <Main /> : <Loader />
}

export default AnswerList
