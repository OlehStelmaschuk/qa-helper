import React from 'react'
import { changeHelloAction } from '../store/actions/dashboardAction'
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component'
import { helloManager } from '../utilites/helloManager'
import { LangEn, LangRu, LangUa } from './LangImages'
import { useDispatch, useSelector } from 'react-redux'

const AnswerPost = ({ item: { title, en, ru, ua } }) => {
  const dispatch = useDispatch()
  const dashboard = useSelector((state) => state.dashboard)

  const disableHello = (e) => {
    dispatch(changeHelloAction(true))
    e.closest('.post').animate([{ background: 'forestgreen' }], {
      duration: 500,
    })
  }
  return (
    <div className='post'>
      <CopyToClipboard
        text={dashboard.addHello ? helloManager('ru', dashboard.time) + ru : ru}
        title={ru}
      >
        <div
          className='title'
          title={ru}
          onClick={(e) => disableHello(e.target)}
        >
          {title}
        </div>
      </CopyToClipboard>
      <div className='lang-buttons'>
        <CopyToClipboard
          text={
            dashboard.addHello ? helloManager('en', dashboard.time) + en : en
          }
          title={en}
        >
          <div className='button' onClick={(e) => disableHello(e.target)}>
            {en && <LangEn />}
          </div>
        </CopyToClipboard>
        <CopyToClipboard
          text={
            dashboard.addHello ? helloManager('ua', dashboard.time) + ua : ua
          }
          title={ua}
        >
          <div className='button' onClick={(e) => disableHello(e.target)}>
            {ua && <LangUa />}
          </div>
        </CopyToClipboard>
        <CopyToClipboard
          text={
            dashboard.addHello ? helloManager('ru', dashboard.time) + ru : ru
          }
          title={ru}
        >
          <div className='button' onClick={(e) => disableHello(e.target)}>
            {ru && <LangRu />}
          </div>
        </CopyToClipboard>
      </div>
    </div>
  )
}

export default AnswerPost
