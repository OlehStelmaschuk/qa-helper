import React from 'react'
import '../assets/dashboard.scss'
import SearchPanel from '../components/SearchPanel'

const Dashboard = () => {
  return (
    <div className='parent'>
      <div className='side-block'></div>
      <div className='search-block'>
        <SearchPanel />
      </div>
      <div className='main-block'></div>
    </div>
  )
}

export default Dashboard
