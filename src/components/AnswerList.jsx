import React, { useEffect } from 'react'
import { Loader, LangUa, LangEn, LangRu } from './'
import { useDispatch, useSelector } from 'react-redux'
import {
  changeHelloAction,
  getAnswerList,
} from '../store/actions/dashboardAction'
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component'

const AnswerList = () => {
  const dispatch = useDispatch()
  const dashboard = useSelector((state) => state.dashboard)
  const {
    answerList,
    answerListSuccess,
    searchString,
    filteredAnswerList,
  } = dashboard

  useEffect(() => {
    dispatch(getAnswerList())
  }, [])

  const disableHello = () => {
    dispatch(changeHelloAction(true))
  }

  const AnswerPost = ({ title, id, ru, en, ua }) => {
    return (
      <div
        className='answer-item flex border-dashed border-b border-w'
        key={id}
      >
        <div className='w-full'>{title}</div>
        <div className='justify-self-end flex'>
          <CopyToClipboard text={en} onCopy={() => disableHello()}>
            <div className='px-1 cursor-pointer'>{en && <LangEn />}</div>
          </CopyToClipboard>
          <CopyToClipboard text={ua} onCopy={() => disableHello()}>
            <div className='px-1 cursor-pointer'>{ua && <LangUa />}</div>
          </CopyToClipboard>
          <CopyToClipboard text={ru} onCopy={() => disableHello()}>
            <div className='px-1 cursor-pointer'>{ru && <LangRu />}</div>
          </CopyToClipboard>
        </div>
      </div>
    )
  }

  const Main = () => {
    return (
      <div className='flex flex-col h-full w-full max-h-full bg-white rounded-2xl space-y-2 p-3 overflow-auto'>
        {answerListSuccess &&
          searchString === '' &&
          answerList.map(({ id, title, ru, en, ua }) => (
            <AnswerPost title={title} key={id} ru={ru} en={en} ua={ua} />
          ))}
        {answerListSuccess &&
          searchString !== '' &&
          filteredAnswerList.map(({ id, title, ru, en, ua }) => (
            <AnswerPost title={title} key={id} ru={ru} en={en} ua={ua} />
          ))}
      </div>
    )
  }

  return answerListSuccess ? <Main /> : <Loader />
}

export default AnswerList
