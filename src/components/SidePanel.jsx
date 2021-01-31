import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Icon from 'react-feather'
import { filterItems, setCategory } from '../store/actions/dashboardAction'

const SidePanel = () => {
  const dispatch = useDispatch()
  const dashboard = useSelector((state) => state.dashboard)

  const categoryHandler = (item) => {
    dispatch(setCategory(item))
    dispatch(filterItems())
  }

  const listData = [
    {
      item: 'Main',
      icon: <Icon.Home className='mx-auto' />,
      categoryName: 'all',
    },
    {
      item: 'Hosting',
      icon: <Icon.HardDrive className='mx-auto' />,
      categoryName: 'hosting',
    },
    {
      item: 'Domain',
      icon: <Icon.Globe className='mx-auto' />,
      categoryName: 'domain',
    },
    {
      item: 'VPS',
      icon: <Icon.Cpu className='mx-auto' />,
      categoryName: 'vps',
    },
    {
      item: 'Cash',
      icon: <Icon.DollarSign className='mx-auto' />,
      categoryName: 'cash',
    },
    {
      item: 'User',
      icon: <Icon.User className='mx-auto' />,
      categoryName: 'user',
    },
    {
      item: 'Database',
      icon: <Icon.Database className='mx-auto' />,
      categoryName: 'database',
    },
    {
      item: 'CMS',
      icon: <Icon.Layout className='mx-auto' />,
      categoryName: 'cms',
    },
    {
      item: 'Mail',
      icon: <Icon.Mail className='mx-auto' />,
      categoryName: 'mail',
    },
    {
      item: 'Restriction',
      icon: <Icon.Slash className='mx-auto' />,
      categoryName: 'restriction',
    },
    {
      item: 'Errors',
      icon: <Icon.XCircle className='mx-auto' />,
      categoryName: 'errors',
    },
    {
      item: 'Redirect',
      icon: <Icon.Send className='mx-auto' />,
      categoryName: 'redirect',
    },
  ]

  const CategoryItem = ({ item: { categoryName, icon, item } }) => {
    return (
      <li
        className={`text-center cursor-pointer py-1 ${
          dashboard.category === categoryName &&
          `text-indigo-900 bg-yellow-200 rounded`
        }`}
        onClick={(e) => categoryHandler(categoryName)}
      >
        {icon}
        {item}
      </li>
    )
  }

  const catalogList = listData.map((item, index) => {
    return <CategoryItem key={index} item={item} />
  })

  return (
    <ul className='flex flex-col justify-center space-y-2'>{catalogList}</ul>
  )
}

export default SidePanel
