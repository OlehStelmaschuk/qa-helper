import React, { useEffect } from 'react'
import '../assets/dashboard.css'
import { SearchPanel, AnswerList, SidePanel } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { getAnswerList } from '../store/actions/dashboardAction'

const Dashboard = ({ history }) => {
  const dispatch = useDispatch()
  dispatch(getAnswerList())

  const { userInfo } = useSelector((state) => state.user)
  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }
  }, [userInfo, history])

  useEffect(() => {
    document.title = 'QAHelper || Dashboard'
  }, [])

  return (
    <div className='parent'>
      <div className='side-block'>
        <SidePanel />
      </div>
      <div className='search-block-main'>
        <SearchPanel />
      </div>
      <div className='main-block'>
        <AnswerList />
      </div>
    </div>
  )
}

export default Dashboard
