import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Icon from 'react-feather'
import { filterItems, setCategory } from '../../store/actions/dashboardAction'

const SidePanel = () => {
  const dispatch = useDispatch()
  const dashboard = useSelector((state) => state.dashboard)

  const categoryHandler = (item) => {
    dashboard.answerListSuccess && dispatch(setCategory(item))
    dashboard.answerListSuccess && dispatch(filterItems())
  }
  useEffect(() => categoryHandler('all'), [])

  const listData = [
    {
      item: 'Main',
      icon: <Icon.Home />,
      categoryName: 'all',
    },
    {
      item: 'Hosting',
      icon: <Icon.HardDrive />,
      categoryName: 'hosting',
    },
    {
      item: 'Domain',
      icon: <Icon.Globe />,
      categoryName: 'domain',
    },
    {
      item: 'VPS',
      icon: <Icon.Cpu />,
      categoryName: 'vps',
    },
    {
      item: 'Cash',
      icon: <Icon.DollarSign />,
      categoryName: 'cash',
    },
    {
      item: 'User',
      icon: <Icon.User />,
      categoryName: 'user',
    },
    {
      item: 'Database',
      icon: <Icon.Database />,
      categoryName: 'database',
    },
    {
      item: 'CMS',
      icon: <Icon.Layout />,
      categoryName: 'cms',
    },
    {
      item: 'Mail',
      icon: <Icon.Mail />,
      categoryName: 'mail',
    },
    {
      item: 'Restriction',
      icon: <Icon.Slash />,
      categoryName: 'restriction',
    },
    {
      item: 'Errors',
      icon: <Icon.XCircle />,
      categoryName: 'errors',
    },
    {
      item: 'Redirect',
      icon: <Icon.Send />,
      categoryName: 'redirect',
    },
  ]

  const CategoryItem = ({ item: { categoryName, icon, item } }) => {
    return (
      <li
        className={`item ${dashboard.category === categoryName && `active`}`}
        onClick={() => categoryHandler(categoryName)}
      >
        {icon}
        {item}
      </li>
    )
  }

  const catalogList = listData.map((item, index) => {
    return <CategoryItem key={index} item={item} />
  })

  return <ul className='side-list'>{catalogList}</ul>
}

export default SidePanel
