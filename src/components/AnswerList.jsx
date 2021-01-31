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
      <div className='post'>
        <CopyToClipboard
          text={addHello ? helloManager('ru', time) + ru : ru}
          title={ru}
          onCopy={() => disableHello()}
        >
          <div className='title' title={ru}>
            {title}
          </div>
        </CopyToClipboard>
        <div className='lang-buttons'>
          <CopyToClipboard
            text={addHello ? helloManager('en', time) + en : en}
            title={en}
            onCopy={() => disableHello()}
          >
            <div className='button'>{en && <LangEn />}</div>
          </CopyToClipboard>
          <CopyToClipboard
            text={addHello ? helloManager('ua', time) + ua : ua}
            title={ua}
            onCopy={() => disableHello()}
          >
            <div className='button'>{ua && <LangUa />}</div>
          </CopyToClipboard>
          <CopyToClipboard
            text={addHello ? helloManager('ru', time) + ru : ru}
            title={ru}
            onCopy={() => disableHello()}
          >
            <div className='button'>{ru && <LangRu />}</div>
          </CopyToClipboard>
        </div>
      </div>
    )
  }

  const Main = () => {
    return (
      <div className='answer-list-block'>
        {filteredAnswerList.map((item, index) => (
          <AnswerPost item={item} key={index} />
        ))}
      </div>
    )
  }

  return answerListSuccess ? <Main /> : <Loader />
}

export default AnswerList
