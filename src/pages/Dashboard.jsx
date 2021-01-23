import React from 'react'
import '../assets/dashboard.scss'
import { SearchPanel, AnswerList } from '../components'

const Dashboard = () => {
  return (
    <div className='parent'>
      <div className='side-block'> </div>
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
