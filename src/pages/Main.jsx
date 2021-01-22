import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Main = ({ history }) => {
  const { userInfo } = useSelector((state) => state.user)

  useEffect(() => {
    if (Object.keys(userInfo).length === 0) {
      history.push('/login')
    }
  }, [])

  return <></>
}

export default Main
