import React from 'react'

const Message = ({ text }) => {
  return (
    <div className='mx-auto text-center bg-yellow-200 rounded mt-4'>
      Error: {text}
    </div>
  )
}

export default Message
