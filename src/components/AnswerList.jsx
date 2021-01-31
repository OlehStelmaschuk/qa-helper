import React, { useEffect } from 'react'
import { Loader, LangUa, LangEn, LangRu } from './'
import { useDispatch, useSelector } from 'react-redux'
import { helloManager } from '../utilites/helloManager'
import {
  changeHelloAction,
  getAnswerList,
} from '../store/actions/dashboardAction'
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component'

const AnswerList = () => {
  const dispatch = useDispatch()
  const dashboard = useSelector((state) => state.dashboard)
  const { answerListSuccess, filteredAnswerList, addHello, time } = dashboard

  useEffect(() => {
    dispatch(getAnswerList())
  }, [])

  const disableHello = () => {
    dispatch(changeHelloAction(true))
  }

  const AnswerPost = ({ item: { title, en, ru, ua } }) => {
    return (
      <div className='answer-item flex border-dashed border-b border-w py-1 px-2 hover:bg-gray-200 '>
        <CopyToClipboard
          text={addHello ? helloManager('ru', time) + ru : ru}
          title={ru}
          onCopy={() => disableHello()}
        >
          <div className='w-full my-auto cursor-pointer' title={ru}>
            {title}
          </div>
        </CopyToClipboard>
        <div className='justify-self-end flex'>
          <CopyToClipboard
            text={addHello ? helloManager('en', time) + en : en}
            title={en}
            onCopy={() => disableHello()}
          >
            <div className='px-1 cursor-pointer'>{en && <LangEn />}</div>
          </CopyToClipboard>
          <CopyToClipboard
            text={addHello ? helloManager('ua', time) + ua : ua}
            title={ua}
            onCopy={() => disableHello()}
          >
            <div className='px-1 cursor-pointer'>{ua && <LangUa />}</div>
          </CopyToClipboard>
          <CopyToClipboard
            text={addHello ? helloManager('ru', time) + ru : ru}
            title={ru}
            onCopy={() => disableHello()}
          >
            <div className='px-1 cursor-pointer'>{ru && <LangRu />}</div>
          </CopyToClipboard>
        </div>
      </div>
    )
  }

  const Main = () => {
    return (
      <div className='flex flex-col h-full w-full max-h-full bg-white rounded-2xl p-3 overflow-auto'>
        {filteredAnswerList.map((item, index) => (
          <AnswerPost item={item} key={index} />
        ))}
      </div>
    )
  }

  return answerListSuccess ? <Main /> : <Loader />
}

export default AnswerList
