import React from 'react'
import '../assets/dashboard.scss'
import { SearchPanel, AnswerList, SidePanel } from '../components'

const Dashboard = () => {
  return (
    <div className='parent'>
      <div className='side-block'>
        <SidePanel />
      </div>
      <div className='search-block'>
        <SearchPanel />
      </div>
      <div className='main-block'>
        <AnswerList />
      </div>
    </div>
  )
}

export default Dashboard
