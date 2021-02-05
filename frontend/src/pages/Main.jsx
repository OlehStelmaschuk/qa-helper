import React, { useEffect } from 'react'

const Main = ({ history }) => {
  useEffect(() => {
    history.push('/login')
  }, [])

  return <></>
}

export default Main
