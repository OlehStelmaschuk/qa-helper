import React, { Fragment } from 'react'
import * as ICON from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import * as ACTION from '../store/actions/dashboardAction'

const timeSelectorList = [
  { time: 'auto', title: 'Automatic', icon: <ICON.RefreshCw /> },
  { time: 'sunrise', title: 'Morning', icon: <ICON.Sunrise /> },
  { time: 'day', title: 'Day', icon: <ICON.Sun /> },
  { time: 'sunset', title: 'Evening', icon: <ICON.Sunset /> },
  { time: 'night', title: 'Night', icon: <ICON.Moon /> },
]

const SearchPanel = () => {
  const dispatch = useDispatch()
  const dashboard = useSelector((state) => state.dashboard)

  const setHelloTime = (data) => {
    dispatch(ACTION.setHelloTimeAction(data))
  }

  const changeHello = () => {
    dispatch(ACTION.changeHelloAction())
  }

  const setSearchStringAction = (searchString) => {
    dispatch(ACTION.setSearchString(searchString))
    dispatch(ACTION.filterItems())
  }

  const resetSearch = () => {
    dispatch(ACTION.resetSearchString())
    dispatch(ACTION.setCategory('all'))
  }

  const keyPressHandler = (e) => {
    if (e.code === 'Escape') {
      resetSearch()
    }
  }

  const TimeButtonComponent = ({ time, title, icon }) => {
    return (
      <div
        className={
          dashboard.time === time ? 'time-button active' : 'time-button'
        }
        title={title}
        onClick={() => setHelloTime(time)}
      >
        {icon}
      </div>
    )
  }

  return (
    <Fragment>
      <div className='search-block-input-group'>
        <input
          className='search-block-input'
          placeholder='Search by title, tags or content'
          value={dashboard.searchString}
          onChange={(e) => {
            setSearchStringAction(e.target.value)
          }}
          onKeyDown={(e) => keyPressHandler(e)}
          disabled={!dashboard.answerListSuccess}
        />
        <div
          className='clear-button'
          title='Clear'
          onClick={() => resetSearch()}
        >
          X
        </div>
      </div>

      <div className='search-button-block'>
        {timeSelectorList.map((item, index) => (
          <TimeButtonComponent
            key={index}
            time={item.time}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </div>

      <div
        className={dashboard.addHello ? 'hello-button active' : 'hello-button'}
        title='Add hello message'
        onClick={changeHello}
      >
        <ICON.MessageSquare /> <ICON.Plus />
      </div>
    </Fragment>
  )
}

export default SearchPanel
