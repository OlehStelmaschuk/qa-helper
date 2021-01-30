import React from 'react'
import * as ICON from 'react-feather'

const SidePanel = () => {
  return (
    <ul className='flex flex-col justify-center space-y-2'>
      <li className='text-center cursor-pointer py-1'>
        <ICON.Home className='mx-auto' />
        Main
      </li>
      <li className='text-center cursor-pointer py-1'>
        <ICON.Coffee className='mx-auto' />
        HOT <span className='bg-red-400 p-1.5 rounded-2xl'>5</span>
      </li>
      <li className='text-center cursor-pointer py-1'>
        <ICON.HardDrive className='mx-auto' />
        Hosting
      </li>
      <li className='text-center cursor-pointer py-1'>
        <ICON.Globe className='mx-auto' />
        VPS/DS
      </li>
      <li className='text-center cursor-pointer py-1'>
        <ICON.DollarSign className='mx-auto' />
        Cash
      </li>
      <li className='text-center cursor-pointer py-1 text-indigo-900 bg-yellow-200 rounded'>
        <ICON.User className='mx-auto' />
        User
      </li>
      <li className='text-center cursor-pointer py-1'>
        <ICON.Database className='mx-auto' />
        Database
      </li>
      <li className='text-center cursor-pointer py-1'>
        <ICON.Layout className='mx-auto' />
        CMS
      </li>
      <li className='text-center cursor-pointer py-1'>
        <ICON.Mail className='mx-auto' />
        Mail
      </li>
      <li className='text-center cursor-pointer py-1'>
        <ICON.Slash className='mx-auto' />
        Restriction
      </li>
      <li className='text-center cursor-pointer py-1'>
        <ICON.XCircle className='mx-auto' />
        Errors
      </li>
      <li className='text-center cursor-pointer py-1'>
        <ICON.Send className='mx-auto' />
        Redirect
      </li>
    </ul>
  )
}

export default SidePanel
