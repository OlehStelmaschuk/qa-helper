import React from 'react'
import '../assets/dashboard.css'
import { SearchPanel, AnswerList, SidePanel } from '../components'
import { useDispatch } from 'react-redux'
import { getAnswerList } from '../store/actions/dashboardAction'

const Dashboard = () => {
  const dispatch = useDispatch()
  dispatch(getAnswerList())

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
