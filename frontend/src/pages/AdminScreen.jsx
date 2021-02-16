import React from 'react'
import { Bookmark } from 'react-feather'

const AdminScreen = () => {
  return (
    <div className='parent'>
      <div className='side-block'>
        <ul className='side-list'>
          <li className={`item`}>
            <Bookmark />
            Answers
          </li>
        </ul>
      </div>
      <div className='search-block-main'>
        TODO: Block with save/edit buttons
      </div>
      <div className='main-block'>TODO: Main </div>
    </div>
  )
}
export default AdminScreen
