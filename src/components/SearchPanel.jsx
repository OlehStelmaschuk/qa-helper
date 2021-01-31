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
  filterItems,
  setCategory,
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
    dispatch(filterItems())
  }

  const keyPressHandler = (e) => {
    if (e.code === 'Escape') {
      dispatch(resetSearchString())
      dispatch(setCategory('all'))
    }
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
        <div
          className={
            dashboard.time === 'auto'
              ? 'bg-gray-200 text-black p-2 rounded-l cursor-pointer'
              : 'bg-black text-white p-2 rounded-l cursor-pointer'
          }
          title='Automatic'
          onClick={() => setHelloTime('auto')}
        >
          <RefreshCw />
        </div>
        <div
          className={
            dashboard.time === 'sunrise'
              ? 'bg-gray-200 text-black p-2 cursor-pointer'
              : 'bg-black text-white p-2 cursor-pointer'
          }
          title='Morning'
          onClick={() => setHelloTime('sunrise')}
        >
          <Sunrise />
        </div>
        <div
          className={
            dashboard.time === 'day'
              ? 'bg-gray-200 text-black p-2 cursor-pointer'
              : 'bg-black text-white p-2 cursor-pointer'
          }
          title='Day'
          onClick={() => setHelloTime('day')}
        >
          <Sun />
        </div>
        <div
          className={
            dashboard.time === 'sunset'
              ? 'bg-gray-200 text-black p-2 cursor-pointer'
              : 'bg-black text-white p-2 cursor-pointer'
          }
          title='Evening'
          onClick={() => setHelloTime('sunset')}
        >
          <Sunset />
        </div>
        <div
          className={
            dashboard.time === 'night'
              ? 'bg-gray-200 text-black p-2 rounded-r cursor-pointer'
              : 'bg-black text-white p-2 rounded-r cursor-pointer'
          }
          title='Night'
          onClick={() => setHelloTime('night')}
        >
          <Moon />
        </div>
      </div>

      <div
        className={
          !dashboard.addHello
            ? ' bg-black text-white p-2 rounded mx-3 cursor-pointer'
            : 'bg-yellow-400 text-black p-2 rounded mx-3 cursor-pointer'
        }
        title='Add hello message'
        onClick={changeHello}
      >
        <MessageSquare /> <Plus />
      </div>
    </Fragment>
  )
}

export default SearchPanel
