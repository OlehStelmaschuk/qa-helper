import React from 'react'
import { Link } from 'react-router-dom'
import { changeHelloAction } from '../../store/actions/dashboardAction'
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component'
import { helloManager } from '../../utilites/helloManager'
import { LangEn, LangRu, LangUa } from './LangImages'
import { useDispatch, useSelector } from 'react-redux'
import { Edit2 } from 'react-feather'

const AnswerPost = ({ item: { _id, title, en, ru, ua } }) => {
  const dispatch = useDispatch()
  const dashboard = useSelector((state) => state.dashboard)
  const user = useSelector((state) => state.user)

  const disableHello = (e) => {
    dispatch(changeHelloAction(true))
    e.closest('.post').animate(
      [
        {
          background: 'transparent',
        },
        {
          background: 'forestgreen',
        },
        {
          background: 'transparent',
        },
      ],
      {
        duration: 700,
      }
    )
  }

  return (
    <div className='post'>
      {user.userInfo.role === 'admin' && (
        <Link
          className='mr-2 cursor-pointer text-green-900'
          title='Edit post'
          to={`/admin/post/${_id}`}
        >
          <Edit2 className='my-auto h-full' />
        </Link>
      )}
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
