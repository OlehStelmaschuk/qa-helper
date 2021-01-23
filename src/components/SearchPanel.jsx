import React, { Fragment } from 'react'
import {
  Sun,
  Sunrise,
  Sunset,
  Moon,
  RefreshCw,
  MessageSquare,
  Plus,
} from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import {
  setHelloTimeAction,
  changeHelloAction,
  setSearchString,
  resetSearchString,
} from '../store/actions/dashboardAction'

const SearchPanel = () => {
  const dispatch = useDispatch()
  const dashboard = useSelector((state) => state.dashboard)

  const setHelloTime = (data) => {
    dispatch(setHelloTimeAction(data))
  }

  const changeHello = () => {
    dispatch(changeHelloAction())
  }

  const setSearchStringAction = (searchString) => {
    dispatch(setSearchString(searchString))
  }

  const keyPressHandler = (e) => {
    if (e.code === 'Escape') dispatch(resetSearchString())
  }
  return (
    <Fragment>
      <input
        className='max-w-screen-xl flex-grow h-5/6 mx-3 rounded-xl text-2xl pl-2 placeholder-purple-500 placeholder-opacity-60'
        placeholder='Search by text or tag'
        value={dashboard.searchString}
        onChange={(e) => {
          setSearchStringAction(e.target.value)
        }}
        onKeyDown={(e) => keyPressHandler(e)}
        disabled={!dashboard.answerListSuccess}
      />

      <div className='search-button-block'>
        <a
          href='#'
          className='p-2 bg-black text-white hover:bg-gray-200 hover:text-black rounded-l'
          title='Automatic'
          onClick={() => setHelloTime('auto')}
        >
          <RefreshCw />
        </a>
        <a
          href='#'
          className='p-2 bg-black text-white hover:bg-gray-200 hover:text-black'
          title='Morning'
          onClick={() => setHelloTime('sunrise')}
        >
          <Sunrise />
        </a>
        <a
          href='#'
          className='p-2 bg-black text-white hover:bg-gray-200 hover:text-black'
          title='Day'
          onClick={() => setHelloTime('day')}
        >
          <Sun />
        </a>
        <a
          href='#'
          className='p-2 bg-black text-white hover:bg-gray-200 hover:text-black'
          title='Evening'
          onClick={() => setHelloTime('sunset')}
        >
          <Sunset />
        </a>
        <a
          href='#'
          className='p-2 bg-black text-white hover:bg-gray-200 hover:text-black rounded-r'
          title='Night'
          onClick={() => setHelloTime('night')}
        >
          <Moon />
        </a>
      </div>

      <a
        href='#'
        className={
          !dashboard.addHello
            ? ' bg-black text-white p-2 rounded mx-3'
            : 'bg-yellow-400 text-black p-2 rounded mx-3'
        }
        title='Add hello message'
        onClick={changeHello}
      >
        <MessageSquare /> <Plus />
      </a>
    </Fragment>
  )
}

export default SearchPanel
