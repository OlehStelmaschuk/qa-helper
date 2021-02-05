import React from 'react'
import langRu from '../assets/lang/flag-ru.webp'
import langEn from '../assets/lang/flag-en.webp'
import langUa from '../assets/lang/flag-ua.webp'

export const LangRu = () => {
  return <img src={langRu} alt='RU' className='w-10' />
}

export const LangUa = () => {
  return <img src={langUa} alt='UA' className='w-10' />
}
export const LangEn = () => {
  return <img src={langEn} alt='EN' className='w-10' />
}
