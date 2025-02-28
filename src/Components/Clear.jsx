import React from 'react'

const Clear = ({onhandleClear}) => {
  return (
    <button onClick={onhandleClear} className='px-4 py-1 mx-auto bg-green-600 text-white rounded cursor-pointer hover:bg-green-400 w-[30%] transition-all duration-300' >Clear Me</button>
  )
}

export default Clear